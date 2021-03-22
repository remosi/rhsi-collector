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
