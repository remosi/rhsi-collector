/*!
 * RHSI Collector v1.0.0
 * Remosi Host System Information Collector
 * Copyright(c) 2020-2021 REMOSI TECHNOLOGY OU
 * MIT Licensed
 */

"use strict";

/**
 * Module exports.
 * @public
 */

module.exports = RHSI;

/**
 * Module dependencies.
 */

const osInfo = require('./lib/os-info');
const memInfo = require('./lib/mem-info');
const cpuInfo = require('./lib/cpu-info');
const networkInfo = require('./lib/net-info');


// Create system information object
let systemInformation = Object.create(null);


/**
 * Initialise module
 * @param {object} options The module's options
 * @return {function name(item) {}} Information item data
 */

function RHSI(options) {
    let measurementInterval = options.measurementInterval ? options.measurementInterval : 1000;

    const readSysteminformation = () => {
        systemInformation['os'] = osInfo();
        systemInformation['network'] = networkInfo();
        systemInformation['memory'] = memInfo();
        systemInformation['cpu'] = cpuInfo();
    }

    // Read interval
    setInterval(readSysteminformation, measurementInterval);

    // return all system information or by item 
    return function (item) {
        if (item == undefined) {
            return systemInformation;
        } else {
            return systemInformation[item];
        }
    }
}
