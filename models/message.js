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

// now we need to create a Collection here: student is Collection name 
const collegeMessage = new mongoose.model("collegeMessage", ClientsSchema);

module.exports = collegeMessage;