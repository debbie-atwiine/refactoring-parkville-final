//requiring packages
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
require('dotenv').config()

//requiring the database
const config = require('./config/database');


//requiring routes
const signup = require('./routes/signupRoute');
const login = require('./routes/loginRoute');
const regcar = require('./routes/regcarRoute');
const cartable = require('./routes/cartableRoute');
const dashboard = require('./routes/dashboardRoute');
const tyrereg = require('./routes/tyreregRoute');
const tyretable = require('./routes/tyretableRoute');
const batteryreg = require('./routes/batteryregRoute');
const batterytable = require('./routes/batterytableRoute');

//instantiating the server
const app = express();

//creating a connection to the mongo database 
mongoose.connect(config.database);
const db = mongoose.connection;
db.once('open', ()=> {
    console.log('Connected to mongodb')
});
db.on('error', (err)=> {
    console.error(err)
}); 

//setting up the view engine
app.engine('pug', require('pug').__express);
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

//body parser middle ware section
app.use(bodyParser.urlencoded({
    extended:false
}));
app.use(bodyParser.json());

//express flash middle ware
app.use(require('connect-flash')());
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});

//setting the directory for static files
app.use(express.static(path.join(__dirname, "public")));

//express session middle ware
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
}));

//password configuration
require('./config/passport')(passport);

//passport middle ware
app.use(passport.initialize());
app.use(passport.session());
//* means all. 
app.get('*', (req, res, next) => {
    res.locals.user = req.user || null;
    next();
});

//using the routes
app.use('/', signup);
app.use('/', login);
app.use('/', regcar);
app.use('/', cartable);
app.use('/', dashboard);
app.use('/', tyrereg);
app.use('/', tyretable);
app.use('/', batteryreg);
app.use('/', batterytable);


//establish the server listening port
const port = process.env.PORT || 4040
app.listen(port, ()=> {
    console.log(`The server has started on port ${port}`)
})