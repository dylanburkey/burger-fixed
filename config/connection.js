let mysql = require('mysql');
let connection;

//const mysql = require('mysql2');
// create the connection to database
/*const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'root',
	database: 'burgers_db',
	socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
});*/

if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
		database: 'burgers_db',
		socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
  });
};

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
