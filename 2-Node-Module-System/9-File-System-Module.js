// Sync or Async - Avoid using Sync methods
// Use Async because they are non-blocking
// Sync methods are here only for simplicity

const fs = require('fs');

const files = fs.readdirSync('./');
console.log(files)

/*
[
  '1-introduction.txt',
  '10-Events-Module.js',
  '10-Events-Module.txt',
  '11-Event-Argumets.js',
  '11-Extending-Arguments.txt',
  '12-Extending-EventEmitter.js',
  '12-Extending-EventEmitter.txt',
  '12-Extending-EventEmitter1.js',
  '13-HTTP-Module.js',
  '13-HTTP-Module.txt',
  '2-Global-Object.txt',
  '3-Modules.js',
  '3-Modules.txt',
  '4-Creating-a-Modue.txt',
  '4-Creating-a-Module.js',
  '5-Loading-a-Module.js',
  '5-Loading-a-Module.txt',
  '6-Module-Wrapper-Function.js',
  '6-Module-Wrapper-Function.txt',
  '7-Path-Module.js',
  '7-Path-Module.txt',
  '8-OS-Module.js',
  '8-OS-Module.txt',
  '9-File-System-Module.js',
  '9-File-System-Module.txt'
]
*/

const callback = (err, files) => {
  if (err) console.log('Error', err);
  else console.log('Result', files)
}

fs.readdir('./', callback);
// fs.readdir('$', callback);55 
// Error { Error: ENOENT: no such file or directory, ... }


/*
Result [
  '1-introduction.txt',
  '10-Events-Module.js',
  '10-Events-Module.txt',
  '11-Event-Argumets.js',
  '11-Extending-Arguments.txt',
  '12-Extending-EventEmitter.js',
  '12-Extending-EventEmitter.txt',
  '12-Extending-EventEmitter1.js',
  '13-HTTP-Module.js',
  '13-HTTP-Module.txt',
  '2-Global-Object.txt',
  '3-Modules.js',
  '3-Modules.txt',
  '4-Creating-a-Modue.txt',
  '4-Creating-a-Module.js',
  '5-Loading-a-Module.js',
  '5-Loading-a-Module.txt',
  '6-Module-Wrapper-Function.js',
  '6-Module-Wrapper-Function.txt',
  '7-Path-Module.js',
  '7-Path-Module.txt',
  '8-OS-Module.js',
  '8-OS-Module.txt',
  '9-File-System-Module.js',
  '9-File-System-Module.txt'
]
*/

const EventEmitter = require('events');
const emitter = new EventEmitter();