/*!
 * RHSI Collector v1.0.0
 * Network information
 * Copyright(c) 2020-2021 REMOSI TECHNOLOGY OU
 * MIT Licensed
 */

"use strict";

/**
 * Module exports.
 * @public
 */

module.exports = networkInformation;

/**
 * Module dependencies.
 */

const os = require('os');

// Collect memory information
function networkInformation() {
    let overview = {
        netInterfaces: os.networkInterfaces(),
        hostname: os.hostname()
    }
    return overview;
}