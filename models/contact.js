const mongoose = require('mongoose');

const ClientsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        uppercase: true, // it will store the data in capital letter even if we insert in small letter         
    },
    email: {
        type:String,
        required: true
    },    
    mobile: {
        type: Number,
        required: true,        
    },    
    message: {
        type: String,
        required: true,        
    },
});

// now we need to create a Collection here: student is Collection name 
const collegeClients = new mongoose.model("collegeClients", ClientsSchema);

module.exports = collegeClients;