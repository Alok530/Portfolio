const mongoose = require('mongoose');
const DB = process.env.DB;
mongoose.connect(DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
}).then(()=>{
    console.log(`connection succesfull`);
}).catch((err)=>{
    console.log(`no connection`);
});

