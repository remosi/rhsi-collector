/*!
 * RHSI Collector v1.0.0
 * Memory information
 * Copyright(c) 2020-2021 REMOSI TECHNOLOGY OU
 * MIT Licensed
 */

"use strict";

/**
 * Module exports.
 * @public
 */

module.exports = memoryInformation;

/**
 * Module dependencies.
 */

const os = require('os');


// Collect memory information
function memoryInformation() {
    let overview = {
        freeMem: os.freemem(),
        totalMem: os.totalmem(),
    }
    return overview;
}