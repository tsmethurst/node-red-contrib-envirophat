# node-red-contrib-envirophat

A simple Node-RED node which runs a Python script to get readings from the Pimoroni Envirophat, then parses those readings as a Javascript object and appends them to a message.

## Table of Contents  
1. [Related Repositories](#related-repositories)
2. [Developer Documentation](#developer-documentation)
	* [Requirements](#requirements)
	* [Installation](#installation)
	* [Configuration](#configuration)
3. [Contact](#contact)

## Related repositories

* [Pimoroni Enviro pHAT Python libraries](https://github.com/pimoroni/enviro-phat).
* [Python Shell Node.js](https://github.com/extrabacon/python-shell)

## Developer Documentation

### Requirements

* You must have Node.js and Node-RED installed. Instructions can be found [here](https://nodejs.org/en/download/).
* You must have the Pimoroni Envirophat libraries installed on your Raspberry Pi. Instructions for this can be found [here](https://learn.pimoroni.com/tutorial/sandyj/getting-started-with-enviro-phat). In short, just run the following command in your terminal:
```
curl https://get.pimoroni.com/envirophat | bash
```

### Installation

Instructions for testing a node module locally can be found [here](https://nodered.org/docs/creating-nodes/packaging).

The node can be found in npm. To install it, go to your node red directory (usually ~./node-red) and use the following command:

```
npm install node-red-contrib-envirophat
```

Note that you will need to restart Node-RED before the quadkey node will be loaded. On Raspberry Pi, you can do this with:

```
node-red-stop && node-red-start
```

### Configuration

All configuration of the node can be done through the Node-RED UI.

See the node's Node Help page within Node-RED for more details/defaults.

## Contact

For questions and help, email [Tobi](mailto:tobi.smethurst@klarrio.com).