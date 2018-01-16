const express = require('express');
const { hosthost, port } = require('./config');

const server = express()

server.get('/', (req, res) => res.send('<code>Basic OpenShift Node.js demo!</code>'));

server.listen(port, hosthost, () => {
    console.log("Listening on " + hosthost + ", port " + port);
});
