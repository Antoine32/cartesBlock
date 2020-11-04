var liveServer = require("live-server");
//const readline = require('readline');
const network = require('./network.json');

/*var networkInterfaces = os.networkInterfaces();

var choice = [];
var names = [];
var it = Object.keys(networkInterfaces);

for (var i = 0; i < it.length; i++) {
    var internal = networkInterfaces[it[i]];
    for (var j = 0; j < internal.length; j++) {
        if (internal[j]['family'] == 'IPv4') {
            choice.push(internal[j]['address']);
            names.push(it[i]);
        }
    }
}

for (var i = 0; i < choice.length; i++) {
    console.log(i + ": \'" + names[i] + "\': \'" + choice[i] + "\'");
}
console.log("");

var ip = NaN;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

quest();
function quest() {
    rl.question('host on: ', (answer) => {
        ip = choice[parseInt(answer)];

        if (ip != undefined) {*/
var params = {
    port: network.port, // Set the server port. Defaults to 8080.
    host: network.ip, // Set the address to bind to. Defaults to 0.0.0.0 or process.env.IP.
    root: "./webdir", // Set root directory that's being served. Defaults to cwd.
    open: false, // When false, it won't load your browser by default.
    ignore: 'scss,my/templates', // comma-separated string for paths to ignore
    file: "index.html", // When set, serve this file (server root relative) for every 404 (useful for single-page applications)
    wait: 1000, // Waits for all changes, before reloading. Defaults to 0 sec.
    mount: [['/components', './node_modules']], // Mount a directory to a route.
    logLevel: 2, // 0 = errors only, 1 = some, 2 = lots
    middleware: [function (req, res, next) { next(); }] // Takes an array of Connect-compatible middleware that are injected into the server middleware stack
};

//console.log("");
liveServer.start(params);

/*rl.close();
} else {
quest();
}
});
}*/
