/**
 * Created by zedan on 1/11/2017.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var positionModel = new Schema({

    "name":{
        type:String,
    }

});
module.exports= mongoose.model('position', positionModel);