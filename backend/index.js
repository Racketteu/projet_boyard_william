const express = require("express");
const cors = require("cors");
const Sequelize = require("sequelize");
const { Database } = require("./models/index.js");
const PORT = 1664;
const seedDatabase = require('./seed.js');


const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite',
  logging: false
});


const app = express ();

const corsOptions = {
  origin: "*",
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  headers: 'Content-Type, Authorization',
  exposedHeaders:'Authorization'
};

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors(corsOptions));


Database
  .sync({force:true})
  .then(async => {
    console.log("connected"); 
    seedDatabase()
  })
  .catch((e) => console.error(e));

require(`./route/login.js`)(app);
require(`./route/product.js`)(app);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
  });
});