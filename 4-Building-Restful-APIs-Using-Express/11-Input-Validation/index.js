const Joi = require('joi');
const express = require('express');
const app = express();
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

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) {
        return res.status(404).send('The course with the given ID was not found.')
    } else {
        return res.send(course);
    }
});

// as a best practice, you should never trust what the client sends to you
// always validate the input
app.post('/api/courses', (req, res) => {

    // a shcma define the shape of our object - properties, types of each prop
    const schma = {
        name: Joi.string().min(3).required()
    };

    const result = Joi.validate(req.body, schma);
    // console.log(result);

    if (result.error) {
        // 400 Bad Request
        return res.status(400).send(result.error.details[0].message);
    }
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});


