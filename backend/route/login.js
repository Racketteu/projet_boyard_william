const express = require('express');
const login = require(`../controler/logincontroler.js`);
const { checkJwt } = require(`./jwt.js`);
module.exports = app => {
	
	let route = require("express").Router();
	
	route.post("/register", login.register);
	route.post("/signup", login.signup);
	route.get("/", checkJwt , login.get);
	
	app.use("/login", route);
};