const mongoose = require('mongoose');
require('dotenv').config();
                                            // \|/ this regestration is name of data-base in mongod
// mongoose.connect("mongodb://localhost:27017/regestration",{
mongoose.connect(process.env.DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}).then(()=>{
    console.log(`connection succesfull`);
}).catch((err)=>{
    console.log(`no connection`);
});