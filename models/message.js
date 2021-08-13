const mongoose = require('mongoose');

const ClientsSchema = new mongoose.Schema({    
    email: {
        type:String,
        required: true
    },        
    message: {
        type: String,
        required: true,        
    },
});


const viewersmessage = new mongoose.model("viewersmessage", ClientsSchema);

module.exports = viewersmessage;