const express = require('express');
const loginController = require('../controllers/logincontroller');
const { checkJwt } = require('../controllers/logincontroller');

module.exports = app => {
	const login = require(`../controler/logincontroler.js`);
	let route = require("express").Router();
	
	route.post("/register", login.register);
	route.post("/signup", login.signup);
	//route.get("/", checkJwt ,login.get);
	
	app.use("/login", route);
};