const express = require('express');
const app = express();
// adding a piece of middleware (express.json())
// app.use - to use the middleware in the request processing pipeline 
app.use(express.json());
const port = process.env.PORT || 3000;
const courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' }
]

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>')
});

app.get('/api/courses', (req, res) => {
    res.send([1, 2, 3]);
});

// id = parameter
app.get('/api/courses', (req, res) => {
    res.send(courses);
});


// possible parameters in a route

app.get('/api/courses/:id', (req, res) => {
    // find matches a course that match a given criteria
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) { //404 - object not found (convension of restful API - invalid resourse)
        return res.status(404).send('The course with the given ID was not found.')
    } else {
        return res.send(course);
    }
});

// Create a new post - post to the collection of courses
app.post('/api/courses', (req, res) => {
    const course = {
        id: courses.length + 1,
        // we need to enable passing of json obj in the body of the request (line 42)
        name: req.body.name // app.use(express.json())
    };
    courses.push(course);
    res.send(course); // the client may need to know the id of the new object/resource
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});


