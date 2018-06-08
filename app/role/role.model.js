/**
 * Created by Bhavya
 */


var mongoose = require('mongoose'),
    schema = mongoose.Schema;

require('mongoose-assert')(mongoose);


var roleSchema = new schema({
    name: { type: String },
    permissions: { type: Array }, // developers, manager
    reg_time : {
        type : Date, default: Date.now
    },
}, { collection: 'roles' });
;

mongoose.model('role', roleSchema);