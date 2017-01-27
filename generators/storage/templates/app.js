'use strict'

var reekoh = require('demo-reekoh-node')
var _plugin = new reekoh.plugins.Storage()

/**
 * Emitted when device data is received.
 * This is the event to listen to in order to get real-time data feed from the connected devices.
 * @param data {Object | [Object]} - The transient data coming from the devices represented as an Object or a collection of Objects.
 */
_plugin.on('data', function (data) {
	// TODO: Insert the data to the database using the initialized connection.
  console.log(data)
})

/**
 * Emitted when the platform bootstraps the plugin.
 * The plugin should listen once and execute its init process.  
 */
_plugin.once('ready', function () {
	// TODO: Initialize the connection to your database here.
  console.log('Storage has been initialized.')
})
