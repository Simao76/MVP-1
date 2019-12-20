'use strict';
const { join } = require('path');
const express = require('express');
const createError = require('http-errors');
const connectMongo = require('connect-mongo');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const logger = require('morgan');
const mongoose = require('mongoose');
const sassMiddleware = require('node-sass-middleware');
const serveFavicon = require('serve-favicon');
const bindUserToViewLocals = require('./middleware/bind-user-to-view-locals.js');
/* const passportConfigure = require("./passport-configuration.js"); */
const indexRouter = require('./routes/index');
const authRouter = require('./routes/authentication');
const leaguesRouter = require('./routes/leagues');
/* const basketballLeaguesRouter = require("./routes/basketballLeagues"); */
const cors = require('cors');
const teamsRouter = require('./routes/teams');
const userRouter = require('./routes/user');
const app = express();
app.set('views', join(__dirname, 'views'));
app.set('view engine', 'hbs');
//app.use(serveFavicon(join(__dirname, 'client/build', 'favicon.ico')));
app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:3000']
  })
);
app.use(
  sassMiddleware({
    src: join(__dirname, 'public'),
    dest: join(__dirname, 'public'),
    outputStyle:
      process.env.NODE_ENV === 'development' ? 'nested' : 'compressed',
    force: process.env.NODE_ENV === 'development',
    sourceMap: true
  })
);
app.use(express.static(join(__dirname, 'public')));
app.use(express.static(join(__dirname, 'client/build')));
app.use(logger('dev'));
//app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(
  expressSession({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: false,
    cookie: {
      maxAge: 60 * 60 * 24 * 15,
      sameSite: 'lax',
      httpOnly: true
      //secure: process.env.NODE_ENV === "production"
    },
    store: new (connectMongo(expressSession))({
      mongooseConnection: mongoose.connection,
      ttl: 60 * 60 * 24
    })
  })
);
app.use(bindUserToViewLocals);
// Passport
require('./passport-configuration');
const passport = require('passport');
app.use(passport.initialize());
app.use(passport.session());
app.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});
app.use('/', indexRouter);
app.use('/', authRouter);
app.use('/', teamsRouter);
app.use('/', leaguesRouter);
app.use('/', userRouter);

app.get('*', (req, res, next) => {
  res.sendFile(join(__dirname, 'client/build/index.html'));
});

// Catch missing routes and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// Catch all error handler
app.use((error, req, res, next) => {
  // Set error information, with stack only available in development
  res.locals.message = error.message;
  res.locals.error = req.app.get('env') === 'development' ? error : {};
  res.status(error.status || 500);
  res.render('error');
});

module.exports = app;
