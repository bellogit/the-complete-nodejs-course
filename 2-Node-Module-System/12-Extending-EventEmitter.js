const Logger = require('./12-Extending-EventEmitter1.js');
const logger = new Logger();

// Register a listener
logger.on('messageLogged', (arg) => {
    console.log('Listener called', arg);
});

logger.log('message')