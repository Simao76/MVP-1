"use strict";

const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("./models/user");
const bcryptjs = require("bcryptjs");
//const nodemailer = require('nodemailer');


const generateId = length => {
  const characters =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let token = "";
  for (let i = 0; i < length; i++) {
    token += characters[Math.floor(Math.random() * characters.length)];
  }
  return token;
};

/* let transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
}); */

/* const sendMail = user => {
  transporter.sendMail({
    from: `MVP Sports <MAIL>`,
    to: `${user.email}`,
    subject: "Email verification",
    text: "Please verify your email address by clicking this link in order to get full access to Wat2Watch",
    // html: `
    //   <p>Welcome to MVP Sports</p>
    //<p><a href="http://localhost:3000/confirm/${user.confirmationCode}">Please verify your email address by clicking this link in order to get full access to Wat2Watch</a></p>`

    // html: `
    // <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.owensvalleyhistory.com%2Fat_the_movies22%2Fthemovies01.png&f=1&nofb=1" width="200px"/>
    // <p><a href="http://localhost:3000/confirm/${user.confirmationCode}">Please verify your email address by clicking this link</a></p>`
  });
} */



passport.serializeUser((user, callback) => {
  callback(null, user._id);
});

passport.deserializeUser((id, callback) => {
  User.findById(id)
    .then(user => {
      callback(null, user);
    })
    .catch(error => {
      callback(error);
    });
});

passport.use(  
  "sign-up",  
  new LocalStrategy({    
      //usernameField: "email",
      passReqToCallback: true
    },
    (req, name, password, callback) => {
      const confirmToken = generateId(30);
      let userObject = {};
      //const name = req.body.name;      
      bcryptjs
        .hash(password, 10)
        .then(hash => {
          return User.create({
            name,
            email: req.body.email,
            passwordHash: hash, 
            confirmationCode: confirmToken
          });          
        })
        .then(user => {
          console.log(user)
          callback(null, user);
        })
        .catch(error => {
          callback(error);
        });
    }
  )
);

passport.use(
  "sign-in",
  new LocalStrategy({ usernameField: "email"  }, (email, password, callback) => {
    let user;
    User.findOne({
      email
    })
      .then(document => {
        user = document;
        return bcryptjs.compare(password, user.passwordHash);
      })
      .then(passwordMatchesHash => {
        if (passwordMatchesHash) {
          callback(null, user);
        } else {
          callback(new Error("Wrong password"));
        }
      })
      .catch(error => {
        callback(error);
      });
  })
);

/*
// GOOGLE CONFIG
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

passport.use(
  new GoogleStrategy({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "https://wt2wtc.herokuapp.com/auth/google/redirect"
    },
    function (accessToken, refreshToken, profile, callback) {
      //console.log(profile._json.sub)
      const {
        email,
        name,
        sub,
        picture
      } = profile._json
      User.findOne({
          googleId: profile._json.sub
        })
        .then(user => {
          if (user) {
            return Promise.resolve(user);
          } else {
            return User.create({
              email: email,
              username: name,
              googleId: sub,
              passwordHash: accessToken,
              profilePic: picture
            });
          }
        })
        .then(user => {
          callback(null, user);
        })
        .catch(error => {
          callback(error);
        });
    }
  ));
  */
