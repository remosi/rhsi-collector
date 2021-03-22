/*!
 * RHSI Collector v1.0.0
 * CPUs Information
 * Copyright(c) 2020-2021 REMOSI TECHNOLOGY OU
 * MIT Licensed
 */

"use strict";

const os = require('os');

module.exports = CPUInformation;

let cpus = os.cpus();
let cpuOverview = { overal: { idle: [0, 0], total: [0, 0], usage: 0 }, cores: [] };

//Initialise sum of idle and time of cores and fetch CPU infoS
for (var i = 0, len = cpus.length; i < len; i++) {
    cpuOverview.cores[i] = { model: cpus[i].model, speed: cpus[i].speed, idle: [0, 0], total: [0, 0], usage: 0 };
}


function CPUInformation() {
    return cpuOverview;
}

function recordCPUsData() {
    cpuOverview = setCpuLap(cpuOverview);
}

function setCpuLap(overview) {
    let totalIdle = 0, totalTick = 0;
    let cores = [];
    let cpus = os.cpus();
    //Loop through CPU cores
    for (var i = 0, len = cpus.length; i < len; i++) {
        cores[i] = { totalTick: 0, totalIdle: 0 }
        //Select CPU core
        var cpu = cpus[i];
        //Total up the time in the cores tick
        for (const tp in cpu.times) {
            totalTick += cpu.times[tp];
            cores[i].totalTick += cpu.times[tp];
        }

        //Total up the idle time of the core
        totalIdle += cpu.times.idle;
        cores[i].totalIdle = cpu.times.idle;
    }

    for (var i = 0, len = cpus.length; i < len; i++) {
        overview.cores[i].idle[0] = overview.cores[i].idle[1];
        overview.cores[i].total[0] = overview.cores[i].total[1];
        overview.cores[i].idle[1] = cores[i].totalIdle;
        overview.cores[i].total[1] = cores[i].totalTick;

        //Calculate the difference in idle and total time between the measures
        let coreIdleDifference = overview.cores[i].idle[1] - overview.cores[i].idle[0];
        let coreTotalDifference = overview.cores[i].total[1] - overview.cores[i].total[0];

        let corePercentage = 100 - ~~(100 * coreIdleDifference / coreTotalDifference);
        overview.cores[i].usage = corePercentage;
    }

    //Return the average Idle and Tick times
    overview.overal.idle[0] = overview.overal.idle[1];
    overview.overal.total[0] = overview.overal.total[1];

    overview.overal.idle[1] = totalIdle / cpus.length;
    overview.overal.total[1] = totalTick / cpus.length;

    //Calculate the difference in idle and total time between the measures
    let idleDifference = overview.overal.idle[1] - overview.overal.idle[0];
    let totalDifference = overview.overal.total[1] - overview.overal.total[0];

    //Calculate the average percentage CPU usage
    let percentageCPU = 100 - ~~(100 * idleDifference / totalDifference);
    overview.overal.usage = percentageCPU;

    return overview
}

setInterval(recordCPUsData, 1000);