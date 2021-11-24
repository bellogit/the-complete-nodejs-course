const os = require('os')

var totalMemory = os.totalmem()
var freeMemory = os.freemem()

console.log('Total Memory: ' + totalMemory);
console.log(`FreeMemory: ${free}`);

// Build template string - no concatenation
