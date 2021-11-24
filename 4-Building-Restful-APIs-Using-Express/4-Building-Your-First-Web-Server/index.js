const express = require('express'); // returns a fn called express
const app = express(); // return an object of type Express

/*
app.get()
app.post()
app.put()
app.delete()
*/
const port = 3000;

// app.get(route, callback fn or route handler function)
// define a route
// no if block 
// this makes us to move some of the routes to different files
// express gives our app a skeleton/ structure
app.get('/', (req, res) => {
    // req obj have useful prop to give us info of the incoming req
    // expressjs.com/en/4x/api.html#req
    res.send('Hello World')
});

app.get('/api/courses', (req, res) => {
    res.send([1, 2, 3]);
})

// app.post()
// app.put()
// app.delete()

app.listen(3000, () => {
    console.log(`Listening on port ${port}`)
})