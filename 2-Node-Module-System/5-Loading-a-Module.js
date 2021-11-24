var logger = require('./4-Creating-a-Module'); // Node assumes it is a JavaScript file
// console.log(logger); // { log: [Function: log] }
// change to const log = require(...)

logger.log('message'); // change to log('message')
// use const intead of var in loadding a module so as not to accidentally override the value of logger
