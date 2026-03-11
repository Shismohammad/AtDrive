const mongoose = require('mongoose');
const mysql = require('mysql2');
const { DB_NAME, MONGODB_URI } = require('../constants');

const MongoDB = async () => {
  try {
    const mongoConnection = await mongoose.connect(`${MONGODB_URI}/${DB_NAME}`);

    console.log(
      `Connection to MongoDB Database is Successful !\nDB Host : ${mongoConnection.connection.host}`,
    );
  } catch (error) {
    console.log('Connection to MongoDB Database is Failure !\n', error);
    process.exit(1);
  }
};

const MySQLDB = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'atdrive',
});

module.exports = { MongoDB, MySQLDB };
