'use strict';

var reekoh = require('demo-reekoh-node');
var _plugin = new reekoh.plugins.Storage();

// var server;

/**
 * Emitted when the platform bootstraps the plugin. The plugin should listen once and execute its init process. 
 */
_plugin.once('ready', function () {

	// TODO: Initialize your gateway/server here.

	/*
	 * When incoming data is received:
	 * 1. Verify if the device id is registered by calling _plugin.requestDeviceInfo
	 * 2. If the device is registered, forward the data by using _plugin.syncDevice
	 */
	platform.log('Gateway has been initialized on port ' + _plugin.port);
});

/**
 * Emitted when a message or command is received from the platform. 
 * The message object has the following properties: 
 * - device {String} - which is the ID of the target device 
 * - messageId {String} - which is the ID of the message in the Reekoh database 
 * - message {String} - which is the message/command itself
 *
 * @param message {Object} - The message which came from an Application or another Device from within the same pipeline as the gateway.  
 */
_plugin.on('message', function (message) {
	// Message Object
	// {
	//	device: deviceid,
	//	messageId: messageId,
	//	message: messageStr
	// }

	// TODO: Send the message to the target client/device. These messages may contain data or commands.
	console.log(message);
});