from flask import Flask
from flask_socketio import SocketIO, send, emit
from time import sleep
import redis
import json

r = redis.Redis(host='localhost', port=6379, db=0, decode_responses=True)
previous = ""
 
app = Flask(__name__)
app.secret_key = "Secret_Key"
socketio = SocketIO(app)

# TODO - run CV app here

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
        sleep(1)
        parkingData = r.get('parkingData')
        if parkingData == previous: continue
        else:
            previous = parkingData
            data = json.loads(parkingData)
            emit('parking-spots', data, broadcast=True)
    
if __name__ == '__main__':
    socketio.run(app, host='localhost', port='5000')