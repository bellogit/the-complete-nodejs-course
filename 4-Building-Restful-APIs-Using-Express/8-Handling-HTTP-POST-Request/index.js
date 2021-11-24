const e = require('express');
const express = require('express');
const app = express();
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


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});