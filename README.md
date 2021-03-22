# rcm-client

This module collect host system information for telemetry proposes and developed for [node](http://nodejs.org).

```js
const RHSI = require("@remosi/rhsi-collector");
const RHSinfo = RHSI({
  measurementInterval: 2000, // in Milliseconds
});

// Here after 2 seconds you will have cpu information
let cpu = RHSInfo("cpu");
let os = RHSInfo("os");
let network = RHSInfo("network");
let memory = RHSInfo("memory");

// if you don't enter item name you will get all data

let info = RHSInfo();
```

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).
Node.js 10 or higher is required.

If this is a brand new project, make sure to create a `package.json` first with
the [`npm init` command](https://docs.npmjs.com/creating-a-package-json-file).

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash
$ npm install @remosi/rhsi-collector
```

## Data Output

The function output is an object that contains information bellow:

```json
{
  "os": {
    // Operating system information
    "loadAVG": [
      // 5,10,15 Average load
      0,
      0,
      0
    ],
    "platform": "win32",
    "release": "10.0.19042",
    "type": "Windows_NT",
    "version": "Windows 10 Pro",
    "uptime": 602684,
    "architecture": "x64"
  },
  "network": {
    // Network information
    "netInterfaces": {
      // Network Interfaces
      "Loopback Pseudo-Interface 1": [
        {
          "address": "::1",
          "netmask": "ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff",
          "family": "IPv6",
          "mac": "00:00:00:00:00:00",
          "internal": true,
          "cidr": "::1/128",
          "scopeid": 0
        },
        {
          "address": "127.0.0.1",
          "netmask": "255.0.0.0",
          "family": "IPv4",
          "mac": "00:00:00:00:00:00",
          "internal": true,
          "cidr": "127.0.0.1/8"
        }
      ]
    },
    "hostname": "DESKTOP"
  },
  // RAM information
  "memory": {
    "freeMem": 8904847360,
    "totalMem": 17053687808
  },
  "cpu": {
    // CPU Information
    "overal": {
      /// Overal CPU Usage for all cores
      "idle": [
        121687081.5, // Start Tick
        121688007.5 // End Tick
      ],
      "total": [130089656.25, 130090675.75],
      "usage": 10 // CPU Usage in percents
    },
    "cores": [
      // Cores info
      {
        "model": "Intel(R) Core(TM) i7-6700 CPU @ 3.40GHz",
        "speed": 3408,
        "idle": [117276250, 117277109],
        "total": [131390030, 131391091],
        "usage": 20 // Core usage in percents
      },
      {
        "model": "Intel(R) Core(TM) i7-6700 CPU @ 3.40GHz",
        "speed": 3408,
        "idle": [124263546, 124264531],
        "total": [129921561, 129922577],
        "usage": 4
      },
      {
        "model": "Intel(R) Core(TM) i7-6700 CPU @ 3.40GHz",
        "speed": 3408,
        "idle": [116963484, 116964265],
        "total": [129944170, 129945169],
        "usage": 22
      },
      {
        "model": "Intel(R) Core(TM) i7-6700 CPU @ 3.40GHz",
        "speed": 3408,
        "idle": [124658140, 124659125],
        "total": [129854279, 129855295],
        "usage": 4
      },
      {
        "model": "Intel(R) Core(TM) i7-6700 CPU @ 3.40GHz",
        "speed": 3408,
        "idle": [120373312, 120374250],
        "total": [129945623, 129946639],
        "usage": 8
      },
      {
        "model": "Intel(R) Core(TM) i7-6700 CPU @ 3.40GHz",
        "speed": 3408,
        "idle": [124677593, 124678593],
        "total": [129854403, 129855419],
        "usage": 2
      },
      {
        "model": "Intel(R) Core(TM) i7-6700 CPU @ 3.40GHz",
        "speed": 3408,
        "idle": [121125546, 121126453],
        "total": [129948841, 129949858],
        "usage": 11
      },
      {
        "model": "Intel(R) Core(TM) i7-6700 CPU @ 3.40GHz",
        "speed": 3408,
        "idle": [124158781, 124159734],
        "total": [129858343, 129859358],
        "usage": 7
      }
    ]
  }
}
```
