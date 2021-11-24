var url = 'http://mlogger.io/log'

function log(message) {
    // Send an HTTP request
    console.log(message)
}

module.exports.log = log; // change to module.exports = log