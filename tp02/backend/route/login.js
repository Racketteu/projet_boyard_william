const express = require('express');
const login = require(`../controler/logincontroler.js`);

module.exports = app => {
	
	let route = require("express").Router();
	
	route.post("/register", login.register);
	route.post("/signup", login.signup);
	route.post("/test", login.test);
	
	app.use("/login", route);
};