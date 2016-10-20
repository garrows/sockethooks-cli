# SocketHooks CLI

Command line tool for interacting with sockethooks.garrows.com

Both the webservice and the CLI tool are in very early development.


To sleep until your socket hook is hit use the command.
```
SOCKETHOOK_NAME=random-name

sockethooks $SOCKETHOOK_NAME && echo "Your sockethook was hit"
```

Then hit the following URL to kick off your command.
```
curl http://sockethooks.garrows.com/devices/$SOCKETHOOK_NAME
```
