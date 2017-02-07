'use strict'

const config = require('./config.js')
const reekoh = require('demo-reekoh-node')
const _plugin = new reekoh.plugins.Channel()

// let server, socket;

/**
 * Emitted when device data is received.
 * This is the event to listen to in order to get real-time data feed from the connected devices.
 * @param data {Object | [Object]} - The transient data coming from the devices represented as an Object or a collection of Objects.
 */
_plugin.on('data', (data) => {
	// TODO: Send data outbound to a connected client/socket i.e. socket.emit('data', data); or socket.write(data); or socket.send(data);
  console.log(data)
})

/**
 * Emitted when the platform bootstraps the plugin.
 * The plugin should listen once and execute its init process.
 */
_plugin.once('ready', () => {

	let err = config.validate(_plugin.config)

  if (err) {
    return console.error('Config Validation Error: \n', err)
  }

	// TODO: Initialize your channel server here. Channels should be able to send outbound data and also receive incoming requests.

	/*
	 * Example:
	 *
	 * let port = options.port;
	 * server = createServer().listen(port);
	 *
	 * server.on('connection', (conn) => {
	 *     socket = conn;
	 *     socket.on('data', (data) => {
	 *        console.log(data);
	 *        _plugin.relayMessage(data);
	 *     });
	 * });
	 *
	 */

  _plugin.log('Channel has been initialized on port ' + _plugin.port)
})
