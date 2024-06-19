const express = require('express');
const productController = require('../controler/productcontroler');

module.exports = app => {
  let route = require("express").Router();

  route.get("/", productController.get);
  
  app.use("/product", route);
};