const Joi = require('joi');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' }
]

app.use(express.json());
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
    const schema = {
        name: Joi.string().min(3).required()
    };

    const result = Joi.ValidationError(req.body, schema);
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


app.put('/api/courses/:id', (req, res) => {
    // Look up the course
    // If not existing, return 404
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) {
        return res.status(404).send('The course with the given ID was not found.')
    }

    // Validate
    // If invalid, return 400 - Bad request
    const schema = {
        name: Joi.string().min(3).required()
    };

    const result = Joi.validate(req.body, schema);

    if (result.error) {
        // 400 Bad Request
        return res.status(400).send(result.error.details[0].message);
    }

    // Update course
    course.name = req.body.name
    // Return the updated course
    res.send(course);
})


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

/*
A middleware fn is a fn that takes a req object and either return a response to the client or parses control to another middle ware function
*/

// middleware are called in sequence

// parses the body and populate req.body


app.delete('/api/courses/:id', (req, res) => {
    // Look up the course
    // Not existing, return 404
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) {
        return res.status(404).send('The course with the given ID was not found.')
    }

    // Delete otherwise
    const index = courses.indexOf(course);
    courses.splice(index, 1);

    // Return the same course
    res.send(course);
})