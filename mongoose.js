/**
 * Created by Bhavya.
 */
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

module.exports = function(){
    var db = mongoose.connect('mongodb://');
    require('../app/employee/employee.model');
    require('../app/role/role.model');
    require('../app/project/project.model');
    require('../app/worker/worker.model')
    return db;
};