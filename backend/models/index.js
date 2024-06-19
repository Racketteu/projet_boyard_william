'use strict';

const Sequelize = require('sequelize');

//Local
const POSTGRE_KEY =  "postgres://dbwebproduct_user:0rfYowb7JaChAQFrdR7W7f5m3zg4VDA1@dpg-cpph912j1k6c73eitee0-a.frankfurt-postgres.render.com/dbwebproduct"

//Sur Render 
//const POSTGRE_KEY = process.env.POSTGRE_KEY

//Local SQL 
// const sequelize = new Sequelize({
//   dialect: 'sqlite',
//   storage: './database.sqlite',
//   logging: true
// });
const sequelize = new Sequelize(POSTGRE_KEY, {
  dialect: 'postgres',
  protocol: 'postgres',
  dialectOptions: {
      ssl: true,
      native:true
  }
});


module.exports.User = require(`./user.js`)(sequelize, Sequelize);
module.exports.Product = require(`./product.js`)(sequelize, Sequelize);
module.exports.Database = sequelize;

