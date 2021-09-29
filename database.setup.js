const Sequelize = require('sequelize')
const dotenv = require('dotenv')
dotenv.config()

var host = 'database'
var user = process.env.MYSQL_USERNAME
var password = process.env.MYSQL_PASSWORD
var database = process.env.MYSQL_DB_NAME
var dbPort = '3306'

const db = new Sequelize(database, user, password, {
    host: host,
    logging: false,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    port: dbPort,
});

// test database connection
db.authenticate()
    .then(() => {
        console.log('Connection Established');
    })
    .catch(err => {
        console.error('Error: ', err);
    });

// sync the database
try {
    db.sync({ alter: true }).then(() => {
        console.log('resync db')
    });	
} catch (err) {
    console.log('Error in sync!', err);
}

// create table employees
const Employees = db.define("employees",{
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      firstname: Sequelize.STRING,
      lastname: Sequelize.STRING,
      fullname: Sequelize.STRING,
      email: {
          type: Sequelize.STRING,
          allowNull: false, 
          unique: true
      },
      age: Sequelize.INTEGER,
      city: Sequelize.STRING
});

module.exports = { Employees }