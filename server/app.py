from flask import Flask, send_file
from flask_socketio import SocketIO, send, emit
from time import sleep
import redis
import json
from cv.see import main as camera_see_car
import threading


# previous = ""
lock = threading.Lock()
app = Flask(__name__)
app.secret_key = "Secret_Key"
socketio = SocketIO(app)

r = redis.StrictRedis(host='localhost', port=6379, db=0, decode_responses=True)

def appStart():
    socketio.run(app, host='localhost', port='5000')

@app.route("/")
def hello_world():
    return "CameraSeeCar Socket Server"
    
@socketio.on('connection')
def log_connect():
    print("Client connected")
    
@socketio.on('disconnection')
def log_disconnect():
    print("Client disconnected")
    
# listen for request to get parking spots
@socketio.on('get-parking-spots')
def send_parking_spots():
    print('Client requested parking spots...')
    while True:
        sleep(.25)
        parkingData = r.get('parkingData')
        frameData = ''
        
        lock.acquire()
        with open('frame.jpeg', 'rb') as f:
            frameData = f.read()
        lock.release()
        
        parkingData = json.loads(parkingData)
        data = {
            "parkingData": parkingData,
            "frameData": frameData
        }
        emit('parking-spots', data, broadcast=True)
        
    
if __name__ == '__main__':
    # appStart()
    # creating thread
    t1 = threading.Thread(target=camera_see_car,args=(r, lock,))
    t2 = threading.Thread(target=appStart)
    
    # starting thread 1
    t1.start()
    # starting thread 2
    t2.start()
    
    # wait until thread 1 is completely executed
    t1.join()
    # wait until thread 2 is completely executed
    t2.join()
 
    # both threads completely executed
    print("Goodbye!")
    