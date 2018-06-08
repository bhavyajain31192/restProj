/**
 * Created by Bhavya
 */


var mongoose = require('mongoose'),
    schema = mongoose.Schema;

require('mongoose-assert')(mongoose);


var workerSchema = new schema({
    name: { type: String },
    employeeId: {type: String},
    projectId : {type: String},
}, { collection: 'worker' });
;

mongoose.model('worker', workerSchema);