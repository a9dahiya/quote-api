var express = require('express');
var router = express.Router();
const mysql = require('mysql2');

// GET 
router.get('/', function(req, res) {

    const dbconfig = require('../dbconfig');
    const db = mysql.createConnection(dbconfig);

    db.connect((err) => {
        if (err) throw err;
        console.log("connected");
        
    });

    const query = 'SELECT * FROM quotes ORDER BY RAND() LIMIT 1';

    db.query(query, function(err, result) {
        if (err) throw err;
        const val = JSON.stringify(result[0]);
        console.log(typeof(val));

         res.json(result[0]);
         db.end();

    });

});

module.exports = router;
