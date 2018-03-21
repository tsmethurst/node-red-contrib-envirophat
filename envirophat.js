module.exports = function (RED) {
    const PythonShell = require('python-shell');

    function EnvirophatNode(config) {
        RED.nodes.createNode(this, config);


        var pyshell = new PythonShell('script.py');

        pyshell.on('message', function (messageString) {
            var msg
            const envirophat = JSON.parse(messageString.replace(/'/g, '"'));
            msg.envirophat = envirophat
            this.send(msg)
        });


    }

    RED.nodes.registerType("envirophat", EnvirophatNode);
}