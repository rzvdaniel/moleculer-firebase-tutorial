const { ServiceBroker } = require("moleculer");
const express = require('express');
const config = require('./moleculer.config');

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

const broker = new ServiceBroker(config);
broker.loadServices("./services");
const svc = broker.getLocalService("api");
broker.start();
console.log(svc);

const expressServer = express().use("/", svc.express());

if (dev) {
  expressServer.listen(PORT, err => {
    if (err) console.log('error', err);
  });
}

module.exports = {
  expressServer
};