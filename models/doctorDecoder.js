/**
 * Created by zedan on 1/11/2017.
 */

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var doctorDecoderModel = new Schema({

    "Code":{
        type:String,
    }
    ,"name":{
        type:String,
    }

});
module.exports= mongoose.model('doctorDecoder', doctorDecoderModel);