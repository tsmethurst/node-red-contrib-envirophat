module.exports = function (RED) {
    var PythonShell = require('python-shell');

    function EnvirophatNode(config) {
        RED.nodes.createNode(this, config);

        var node = this

        var pyshell = new PythonShell('script.py', {scriptPath: __dirname});

        pyshell.on('message', function (messageString) {
            var results = JSON.parse(messageString.replace(/'/g, '"'));
            var msg = {
                payload: "",
                envirophat: results
            }
            node.send(msg)
        });

        pyshell.on('error', error => {
            node.error(error)
        })
    }

    RED.nodes.registerType("envirophat", EnvirophatNode);
}