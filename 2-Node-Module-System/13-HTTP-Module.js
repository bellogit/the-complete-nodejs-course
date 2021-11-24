const http = require('http');

// the server is an event emitter. It has all th capability of emitter seen in this section

// const server = http.createServer()

// server.on('connection', (socket) => {
//     console.log('New connection')
// })

// server.listen(3000);

// // Server will listen on port 3000
// console.log('Listening on port 3000...');

// server obj raiaing event to respnd to
const server = http.createServer((req, res) => {
    // instead of working with the socket, we can work with the actual request or reponse
    if (req.url === '/') {
        res.write('Hello World');
        res.end();
    }

    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end()
    }

    // ...
    // As we add more route, the code gets more complete in a linear way - so using this http module to build a back end app is not adviceable. Instead we use express - for clean structure to handle various route.

    // Note: express framework is built on top of the HTTP module in node
})

server.listen(3000);

console.log('Listening on port 3000...');



// await readFile(path.join(__dirname, 'template.html'))






















/*
import fs, { fs } from 'fs';
import path from 'path';

const basename = path.basename('file://service/plain/tet.txt')
const ext = path.extname('file://service/plain/tet.txt')
const packageJsonPath = path.join(__filename, '../package.json')
// const delimeter = path.join('')
// console.log('basename', basename)
// console.log('extension', ext)
// console.log('dirname', __dirname)
// console.log('filename', __fiename)

fs.readFile(packageJsonPath)


const newBuff = Buffer.from('nodeSq9');
console.log(newBuff.toString('base64'));

const content = fs.readFileSync(packageJsonPath, { encodig: 'utf-8' }, (err, data) => {
    if (err) {
        console.log('Error', err)
        return
    }
    // const packageJson = JSON.parse(data)
    // cosole.log('data', packageJson.name)
    console.log('data', typeof data)
})
// console.log(content)


// https://nodejs.dev/learn/reading-files-with-nodejs
// https://techstackmedia.medium.com/membership
*/