/**
 * Created by Bhavya.
 */


var mongoose = require('mongoose'),
    schema = mongoose.Schema;

require('mongoose-assert')(mongoose);

var ProjSchema = new schema({
    name: { type: String },
    managerEmpId: { type: String },
}, { collection: 'project' });

RegSchema.on('error',function(err,data){
    next(err);
    return;
})
mongoose.model('project', ProjSchema);