/*!
 * RHSI Collector v1.0.0
 * Remosi Host System Information Collector
 * Copyright(c) 2020-2021 REMOSI TECHNOLOGY OU
 * MIT Licensed
 */

"use strict";

const osInfo = require('./lib/os-info');
const memInfo = require('./lib/mem-info');
const cpuInfo = require('./lib/cpu-info');
const networkInfo = require('./lib/net-info');


module.exports = RHSI;


let systemInformation = Object.create(null);

function RHSI(options) {
    let measurementInterval = options.measurementInterval ? options.measurementInterval : 1000;

    const readSysteminformation = () => {
        systemInformation['os'] = osInfo();
        systemInformation['network'] = networkInfo();
        systemInformation['memory'] = memInfo();
        systemInformation['cpu'] = cpuInfo();
        //this.systemInformation['disk'] = this.netOverview();
    }
    setInterval(readSysteminformation, measurementInterval);

    return function (item) {
        if (item == undefined) {
            return systemInformation;
        } else {
            return systemInformation[item];
        }
    }
}
