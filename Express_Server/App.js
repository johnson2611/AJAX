const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const apiRouter = require('./api/apiRouter');


const hostname = '127.0.0.1';
const port = 3000;

// configure bodyParser
const jsonParser = bodyParser.json();
const urlEndcodedParser = bodyParser.urlencoded({extended: false});
app.use(jsonParser);
app.use(urlEndcodedParser);

// configure cors
app.use(cors());

// configure the router
app.use('/api', apiRouter);

// get
app.get('/', (req, res) => {
    res.send(
        `<h2>Welcome to Express Server of Employee Portal</h2>`
    )
});

app.listen(port, hostname, () =>{
    console.log(`Express Server is Started at http://${hostname}:${port}`)
})