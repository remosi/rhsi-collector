/*!
 * RHSI Collector v1.0.0
 * Operating System Information
 * Copyright(c) 2020-2021 REMOSI TECHNOLOGY OU
 * MIT Licensed
 */

"use strict";

/**
 * Module exports.
 * @public
 */

module.exports = osInformation;

/**
 * Module dependencies.
 */

const os = require('os');

// Collect memory information
function osInformation() {
    let overview = {
        loadAVG: os.loadavg(),
        platform: os.platform(),
        release: os.release(),
        type: os.type(),
        version: os.version(),
        uptime: os.uptime(),
        architecture: os.arch(),
    }
    return overview;
}
