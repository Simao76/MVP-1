"use strict";

const { Router } = require("express");
const router = new Router();
const User = require("../models/user");

router.patch("/follow/:teamId/:userId", async (req, res, next) => {
  const userId = req.params.userId;
  const teamId = req.params.teamId;
  try {
    const updateduser = await User.findByIdAndUpdate(userId, {
      $push: { _myTeams: teamId }
    }).exec();
    res.json({ message: "Updates Successfully ", updateduser });
  } catch (err) {
    next(err);
  }
});

router.patch("/unfollow/:teamId/:userId", async (req, res, next) => {
  const userId = req.params.userId;
  const teamId = req.params.teamId;
  try {
    const updateduser = await User.findByIdAndUpdate(userId, {
      $pull: { _myTeams: teamId }
    }).exec();
    res.json({ message: "Delete Successful ", updateduser });
  } catch (err) {
    next(err);
  }
});

const multer = require('multer');
const cloudinary = require('cloudinary');
const storageCloudinary = require('multer-storage-cloudinary');

cloudinary.config({
  cloud_name: process.env.REACT_APP_CLOUDINARY_API_NAME,
  api_key: process.env.REACT_APP_CLOUDINARY_API_KEY,
  api_secret: process.env.REACT_APP_CLOUDINARY_API_SECRET
});

const storage = storageCloudinary({
  cloudinary,
  folder: process.env.REACT_APP_FOLDER_PIC,
  allowedFormats: ['jpg', 'png']
});

const uploader = multer({
  storage
});

router.patch("/edit/:id", async (req, res, next) => {
  const userId = req.params.id;
  
  try {
    const {
      name,
      email,
      password,
      profilePic
    } = req.body; 
    console.log("edit BE", req.body)
    const user = await User.findByIdAndUpdate(userId, {
      ...(name ? { name } : {}),
      ...(email ? { email } : {}),
      //...(password ? { password } : {}),
      ...(profilePic ? { profilePic } : {})
      
    }).exec();
    res.json({ user });
  } catch (error) {
    next(error);
  }
});

router.post(
  '/upload/profileImage',
  uploader.single('profilePic'),
  async (req, res, next) => {
    const returnUrl = req.file.url;
    let link = returnUrl.split('/');
    let joinLink = link[0].replace('http', 'https').concat("//").concat(link[2]).concat("/").concat(link[3]).concat("/")
    .concat(link[4]).concat("/").concat(link[5]).concat("/").concat(link[6]).concat("/")
    .concat(link[7]).concat("/").concat(link[8])
    console.log("joinLink", joinLink)
    res.json({ joinLink });
  }
);

module.exports = router;
