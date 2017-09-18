module.exports = connection;
var mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        root: 3000,
        host: 'wftuqljwesiffol6.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'h7z9eh8fqttsarkp',
        password: 'sad6oskzzdq7yy05',
        database: 'tpxvm0363wr17ij7', 
    });
};

connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});



module.exports = connection;


