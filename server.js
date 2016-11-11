/* Must have codes */
var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var connection = require('express-myconnection');
var basePath = "/employee";

var app = express();

app.use(bodyParser.json()); // to support JSON - encoded bodies
app.use(bodyParser.urlencoded({ // to support URL - encoded bodies
    extended: true
}));


/* Hosting static Files */
app.use(express.static(__dirname + '/'));

app.get('/', function (req, res) {
    res.redirect('/templates/index.html');
});

app.listen(3000, function (req, res) {
    console.log("Listening to port 3000");
});


// Create Sql Connection
app.use(connection(mysql, {
    host: 'localhost',
    user: 'employee',
    password: 'admin',
    database: 'employee'
}, 'request'));

// Post Service Object
var postServiceObj = {
    person: {
        query: "INSERT into employee_info set ?",
        url: basePath + "/info",
        ids: []
    }
}

// Get Service Object
var getServiceObj = {
    person: {
        query: "SELECT * FROM employee_info",
        url: basePath + "/info",
        ids: []
    },
    personUnique: {
        query: "SELECT * FROM employee_info WHERE id=?",
        url: basePath + "/person/:empid",
        ids: ["empid"]
    }
}

// Update Service Object
var putServiceObj = {
    person: {
        query: "UPDATE employee_info SET ? WHERE id = ?",
        url: basePath + "/person/:empid",
        ids: ["empid"]
    }
}

// Delete Service Object
var deleteServiceObj = {
    person: {
        query: "DELETE FROM employee_info WHERE id = ?",
        url: basePath + "/person/:empid",
        ids: ["empid"]
    }
}

// For loop for getService
for (var key in getServiceObj) {
    getServices(getServiceObj[key].url, getServiceObj[key].ids, getServiceObj[key].query);
}

// For loop for postService
for (var key in postServiceObj) {
    postServices(postServiceObj[key].url, postServiceObj[key].ids, postServiceObj[key].query);
}

// For loop for updateService
for (var key in putServiceObj) {
    putServices(putServiceObj[key].url, putServiceObj[key].ids, putServiceObj[key].query);
}

// For loop for deleteService
for (var key in deleteServiceObj) {
    deleteServices(deleteServiceObj[key].url, deleteServiceObj[key].ids, deleteServiceObj[key].query);
}

// Get Service
function getServices(url, ids, query) {
    app.get(url, function (req, res, next) {
        var id = req.params[ids];
        req.getConnection(function (err, connection) {
            if (err) return next(err);

            connection.query(query, id, function (err, results) {
                if (err) {
                    console.log(err);
                    return next("Mysql error, check your query");
                }
                res.json(results);
            });
        });
    });
}

// Post Service
function postServices(url, ids, query) {
    app.post(url, function (req, res, next) {
        var reqObj = req.body;
        req.getConnection(function (err, connection) {
            if (err) return next(err);

            var queryx = connection.query(query, reqObj, function (err, results) {
                if (err) {
                    console.log(err);
                    return next("Mysql error");
                }
                res.json(results);
            });
        });
    });
}

// Update Service
function putServices(url, ids, query) {
    app.put(url, function (req, res, next) {
        var id = req.params[ids];
        var reqObj = req.body;
        req.getConnection(function (err, connection) {
            if (err) return next(err);

            var queryx = connection.query(query, [reqObj, id], function (err, results) {
                if (err) {
                    console.log(err);
                    return next("Error");
                }
                res.json(results);
            });
        });
    });
}

// Delete Service
function deleteServices(url, ids, query) {
    app.delete(url, function (req, res, next) {
        var id = req.params[ids];

        req.getConnection(function (err, connection) {
            if (err) return next(err);

            connection.query(query, id, function (err, results) {
                if (err) {
                    console.log(err);
                    return next("Mysql Error");
                }
                res.json(results);
            });
        });
    });
}

/* -- Note --*/
/*
var url = basePath + "/person/:personid";
var query = "SELECT * FROM personinfo where personid=?";
var ids = ["personid"];

getServices(url, ids, query);
*/
