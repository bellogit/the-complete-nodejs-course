function sayHello(name) {
    console.log('Hello ' + name);
}

sayHello('mosh');
// console.log(window) // ReferenceError: window is not defined - window is perculia to the browser, not with node

// node app.js node gives it to v8 for execution