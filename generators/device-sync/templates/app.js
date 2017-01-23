'use strict';

var reekoh = require('demo-reekoh-node');
var _plugin = new reekoh.plugins.Storage();

// var client;

/**
 * Emitted when the platform bootstraps the plugin. 
 * The plugin should listen once and execute its init process.
 */
_plugin.once('ready', function (options) {

	// TODO: Initialize your client or subscribe to the 3rd party service here.

	/*
	 * Sample Code
	 *
	 * var service = require('service');
	 *
	 * service.connect(options, function (error, serviceClient) {
	 * 	client = serviceClient;
	 * });
	 */

	_plugin.log('Device sync has been initialized.');
});

/**
 * Emitted when a sync has been requested by the Reekoh platform.
 * This event will be received by the plugin based on the schedule/interval set by the user on the Plugin Configuration.
 */
_plugin.on('sync', function () {
	// TODO: Fetch updates from service

	/* Sample Code:
	 *    client.fetchData(function (error, dataCollection) {
	 *        dataCollection.forEach(function (data) {
	 *            _plugin.syncDevice(data);
	 *        });
	 *    });
	 */
});

/**
 * Emitted when a new device has been registered on the platform.
 * @param device {Object} - The device details.
 */
_plugin.on('adddevice', function (device) {
	//TODO: Add device to 3rd party service

	/* Sample Code:
	 * client.addDevice(device, function() {
	 *   console.log('New device added');
	 * });
	 */

});

/**
 * Emitted when a new device has been updated on the platform. 
 * @param device {Object} - The device details.
 */
_plugin.on('updatedevice', function (device) {
	//TODO: Update device from 3rd party service

	/*  Sample Code:
	 * client.updateDevice(device, function() {
	 *   console.log(`${device.name} has been updated`);
	 * });
	 */
});

/**
 * Emitted when a new device has been removed from the platform. 
 * @param device {Object} - The device details.
 */
_plugin.on('removedevice', function (device) {
	//TODO: Remove device from 3rd party service

	/* Sample Code:
	 * client.removeDevice(device._id, function() {
	 *   console.log(`${device.name} has been removed`);
	 * });
	 */
});