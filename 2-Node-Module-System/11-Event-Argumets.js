const EventEmitter = require('events');
const emitter = new EventEmitter(); //instance of a class - new object

// Register a listener
emitter.on('message', (arg) => console.log('Listener called', arg))
emitter.on(nameofevent, callbackfuncton)

// argument name is up to u - commonly arg, e, eventArg

// Raise an event
// emitter.emit('messageLogged', id, url) // it is better you use object when you have more than one event arguments, id, url

emitter.emit('messageLogged', { id: 1, url: 'http://' });

// When we call the emit method, the emitter will iterate over all the registered listener and call them synchronously