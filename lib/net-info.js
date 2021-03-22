/*!
 * RHSI Collector v1.0.0
 * Network information
 * Copyright(c) 2020-2021 REMOSI TECHNOLOGY OU
 * MIT Licensed
 */

"use strict";

const os = require('os');

module.exports = networkInformation;

// Collect memory information
function networkInformation() {
    let overview = {
        netInterfaces: os.networkInterfaces(),
        hostname: os.hostname()
    }
    return overview;
}