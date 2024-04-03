# TRES LECHES
Team Website



## Some random stuff from previous project:


# Local Chat Room

This local chat room uses Python to communicate between multiple users by using the command prompt.

## Features

- ```server.py``` Python server file to create a server for multiple clients on the same network
- ```client.py``` Python client file to connect to a server hosting the chat room

## Installation

To get started, download and install [python](https://www.python.org/downloads/release/python-3120/), along with the two .py files.

In order to open and edit the two Python files, we recommend downloading and installing [PyCharm](https://www.jetbrains.com/pycharm/download/).

## Configuration

After installing the above, disable app execution aliases. To do this, type in ```App execution aliases``` into the windows search bar. Disable the two ```App Installer``` that have 'python' underneath.

> Note: Make sure to close PyCharm if it is open. Also, make sure this stays disabled by closing and reopening the ```App execution aliases``` and checking if it is still off.

In the ```client.py``` file and under the main function, the variable
```python
serverName
```
needs to match your IP.
```python
def main():
    # Change serverName if not just connecting to the same computer. Replace with IP address instead of localhost.
    serverName = 'localhost'
    # Must match the server port to connect
    serverPort = 12000
```

> Note: The server port number should not need to be changed. However, if it is, make sure both ```server.py``` and ```client.py``` files have the same port number.

To do this, you need your IP address which can be found by using the command prompt. Once you open command prompt, enter in:
```Batchfile
ipconfig 
``` 
Your IP address can be found at the very top of the window to the right of:
```Batchfile
IPv4 Address. . . . . . . . . . . :
``` 
Copy and paste this IP address into the variable:
```python
serverName
```

For example:
```python
serverName = '192.158.1.38'
```

**It is important to save this file after the change.**


## Starting the Server

Once the appropriate IP address is modifed and saved, you can start the server on a separate command prompt. First, make sure to know where the ```client.py``` and ```server.py``` files are located by using the file explorer. Copy the location and type into the command prompt to change the directory:

```Batchfile
cd
```

followed by the location. For example:

```Batchfile
cd C:\Users\YourUserName\Downloads
```

Once this is done, you can launch the server by one of the two commands:

```Batchfile
python server.py
```

or

```Batchfile
py server.py
```

This will result in the message:

```Batchfile
"The server is ready to receive connections on port 12000"
```

## Starting a Client

Once successfully launching the server, you can test it by opening another command prompt window. Type in:

```Batchfile
python client.py
```

or

```Batchfile
py client.py
```

This will result in a welcome message followed by your IP address as a username for the chat room. As long as clients on your network use the correct IP address inside their ```client.py``` file, anyone on the network can join the server and start chatting.
