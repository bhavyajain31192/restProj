/**
 * Created by Bhavya.
 */


var mongoose = require('mongoose'),
    schema = mongoose.Schema;

require('mongoose-assert')(mongoose);

var EmpSchema = new schema({
    name: { type: String },
    email: { type: String },
    roles: { type: Array }
}, { collection: 'employee' });

RegSchema.on('error',function(err,data){
    next(err);
    return;
})
mongoose.model('employee', EmpSchema);