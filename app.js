var express = require('express'); // Web Framework
var app = express();
var sql = require('mssql'); // MS Sql Server client
const http = require('http');

// Connection string parameters.
var sqlConfig = {
    server: 'frizard-db.database.windows.net',
    user: 'frizard-admin',
    password: 'TheFriz#', 
    database: 'Product_test',
    options: {
    encrypt: true // Use this if you're on Windows Azure
    }
}

// Start server and listen on http://localhost:8081/
var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("app listening at http://%s:%s", host, port)
});

app.get('/getFridges', function (req, res) {

    // sql.connect(sqlConfig).then(pool => {
    //     // Query
        
    //     return pool.request()
    //         .query('select * from products')
    // }).then(result => {
    //     console.dir(result)
    // }).catch(err => {
    //   console.log(err)
    // });

    sql.connect(sqlConfig, function() {
        var request = new sql.Request();
        var price = req.params.price
        request.query('select * from products', function(err, recordset) {
            if(err) console.log(err);
            res.end(JSON.stringify(recordset)); // Result in JSON format
            // console.dir(recordset)
        });
    });

})

app.get('/getFridges/:price', function (req, res) {


    sql.connect(sqlConfig, function() {
        var request = new sql.Request();
        var price = req.params.price
        request.query('select * from products where price = ' + price, function(err, recordset) {
            if(err) console.log(err);
            res.end(JSON.stringify(recordset)); // Result in JSON format
            // console.dir(recordset)
        });
    });
})

app.get('/getFridges/:price/:colorfinish', function (req, res) {


    sql.connect(sqlConfig, function() {
        var request = new sql.Request();
        var price = req.params.price
        var colorFinish = req.params.colorfinish
        request.query('select * from products where price = ' + price + ' and appliancecolorfinish = ' + colorFinish, function(err, recordset) {
            if(err) console.log(err);
            res.end(JSON.stringify(recordset)); // Result in JSON format
            // console.dir(recordset)
        });
    });
})

app.get('/getFridges/:price/:colorfinish/:icemaker', function (req, res) {


    sql.connect(sqlConfig, function() {
        var request = new sql.Request();
        var price = req.params.price
        var colorFinish = req.params.colorfinish
        var iceMaker = req.params.icemaker
        request.query('select * from products where price = ' + price + 
                        ' and appliancecolorfinish = ' + colorFinish + 
                        ' and icemaker = ' + iceMaker , function(err, recordset) {
            if(err) console.log(err);
            res.end(JSON.stringify(recordset)); // Result in JSON format
            // console.dir(recordset)
        });
    });
})
app.get('/getFridges/:price/:colorfinish/:icemaker/:energystar', function (req, res) {


    sql.connect(sqlConfig, function() {
        var request = new sql.Request();
        var price = req.params.price
        var colorFinish = req.params.colorfinish
        var iceMaker = req.params.icemaker
        var energyStar = req.params.energystar
        request.query('select * from products where price = ' + price + 
                        ' and appliancecolorfinish = ' + colorFinish + 
                        ' and icemaker = ' + iceMaker +
                        ' and energystarcertified = ' + energyStar , function(err, recordset) {
            if(err) console.log(err);
            res.end(JSON.stringify(recordset)); // Result in JSON format
            // console.dir(recordset)
        });
    });
})


