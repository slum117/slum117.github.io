'use strict';

const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// static files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/img', express.static(__dirname + 'public/img'));


// templating engine
app.set('views', 'views');
app.set('view engine', 'ejs');

// routes
const indexRouter = require('./routes/index');
//const loginRouter = require('./routes/login');
//const galleryRouter = require('./routes/gallery');
//const contactRouter = require('./routes/about');
//const signupRouter = require('./routes/signup');
//const servicesRouter = require('./routes/services');

app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/gallery', galleryRouter);
app.use('/contact', contactRouter);
app.use('/signup', signupRouter);
app.use('/services', servicesRouter);

/*// database connection
const con = mysql.createConnection({
    host: '104.196.251.22',
    user: 'root',
    port: 3306,
    password: 'EventsbyParam',
    database: 'test1'
});

con.connect((err) => {
    if (err) {
        console.log('Not connected to database');
        throw err;
    } else {
        console.log('Connected to database');
    }
});

// make connection global
global.db = con;
*/


// listen on port 3000
app.listen(port, () =>{
    console.log(`Listening on port ${port}`);
});

