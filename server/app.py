from flask import Flask
from flask_socketio import SocketIO

app = Flask(__name__)
socketio = SocketIO(app)

@app.route("/")
def hello_world():
    return [
        {"dog": "Bob"},
        {"dog": "Beebo"}
    ]
    
    
if __name__ == '__main__':
    socketio.run(app)