const EventEmitter = require('events');
const emitter = new EventEmitter();

// Register a listener
emitter.on('messageLogged', () => console.log('Listener called'))
// emitter.on(nameofevent, callbackfuncton)

// Raise an event
emitter.emit('messageLogged') // emitter iterate over all the registered listener and called them synchronously

// emit - Make a sound, produce
// A listener is a function that will be called when the event is raised
// Raise an event to make the callback or listener was called



