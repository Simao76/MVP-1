"use strict";

const { Router } = require("express");
const router = new Router();

const User = require("./../models/user");
const bcryptjs = require("bcryptjs");

const generateId = length => {
  const characters =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let token = "";
  for (let i = 0; i < length; i++) {
    token += characters[Math.floor(Math.random() * characters.length)];
  }
  return token;
};

/*
router.get("/success", (req, res, next) => {
  res.render("success");
  //console.log(req.user);
});

 router.get("/confirm/:token", (req, res, next) => {
  const token = req.params.token;
  User.findOneAndUpdate({
      confirmationCode: token
    }, {
      status: "Active"
    })
    .then(user => {
      console.log(req.session.passport)
      req.session.passport.user = user;
      res.redirect("/success");
    })
    .catch(err => {
      next(err)
    });
}); */

//SET PASSPORT
const passport = require("passport");

router.post("/sign-up", passport.authenticate("sign-up"), (req, res, next) => {
  const user = req.user;
  res.json({ user });
});

router.post("/sign-in", passport.authenticate("sign-in"), (req, res, next) => {
  const user = req.user;
  console.log(user);
  res.json({ user });
});

/* // GOOGLE SIGNUP/IN
router.get('/auth/google',
  passport.authenticate('google', {
    scope: ['profile', "email"]
  }));

router.get('/auth/google/redirect',
  passport.authenticate('google', (req, res, next) => {
    const user = req.user;
    res.json({ user });
  })
); */

// LOGOUT
router.post("/sign-out", (req, res, next) => {
  req.session.destroy();
  res.json({});
});

/* router.post('/sign-up', async (req, res, next) => {
  const { name, email, password } = req.body;
  try {
    const confirmToken = generateId(30);
    const hash = await bcryptjs.hash(password, 10);
    const user = await User.create({
      name,
      email,
      passwordHash: hash,
      confirmationCode: confirmToken
    });
    req.session.user = user._id;
    res.json({ user });
  } catch (error) {
    next(error);
  }
}); */

/* router.get('/sign-in', (req, res, next) => {
  res.render('./auth/sign-in');
});

router.post(
  '/sign-in',
  passport.authenticate('sign-in', {
    successRedirect: `/profile`,
    failureRedirect: './auth/sign-in'
  })
); */

/* router.get('/sign-up', (req, res, next) => {
  res.render('./auth/sign-up');
}); */

//GOOGLE SIGNUP/IN
router.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"]
  })
);

router.get(
  "/auth/google/redirect",
  passport.authenticate("google", {
    successRedirect: "/",
    failureRedirect: "./auth/sign-up"
  })
);

// SIGNOUT
router.post("/sign-out", (req, res, next) => {
  req.logout();
  res.json({});
});

const routeGuard = require("../middleware/route-guard");

router.get("/user-information", async (req, res, next) => {
  const userId = req.user;
  if (!userId) {
    res.json({});
  } else {
    try {
      const user = await User.findById(userId);
      if (!user) throw new Error("Signed in user not found");
      res.json({ user });
    } catch (error) {
      next(error);
    }
  }
});

module.exports = router;
