const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>')
});

app.get('/api/courses', (req, res) => {
    res.send([1, 2, 3]);
});

// id = parameter - read value of the parameter with res.params
app.get('/api/courses/:id', (req, res) => {
    res.send(req.params.id);
});

// possible parameters in a route

app.get('/api/posts/:year/:month', (req, res) => {
    res.send(req.params.year);
    // query string parameter to provide additional data to backend services
    // route parameter for essential or required values
    // query string for anything optional
    // res.send(req.query)
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});