require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const hbs = require('hbs');

// for view engine 
const viewsPath = path.join(__dirname, '../source/views');
app.set('view engine', 'hbs');
app.set("views", viewsPath);

// for css
const cssPath = path.join(__dirname, "../public");
app.use(express.static(cssPath));

// connection to mongoDb
require('../connection/conn');

// importing schema
const viewersfeedback = require('../models/contact');
const viewersmessage = require('../models/message');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routing 
app.get("/", (req, res) => {
    res.render('index.hbs');
});
app.get("/activity", (req, res) => {
    res.render('activity.hbs');
});
app.get("/course", (req, res) => {
    res.render('course.hbs');
});
app.get("/blog", (req, res) => {
    res.render('blog.hbs');
});
app.get("/contact", (req, res) => {
    res.render('contact.hbs');
});


app.post("/contact-form", async (req, res) => {
    try {
        const newClient = new viewersfeedback({
            name: req.body.name,
            email: req.body.email,
            mobile: req.body.mobile,
            message: req.body.message,
        })
        const result = await newClient.save();        
        res.render("index");
    } catch (error) {
        res.send(error);
    }
});
app.post("/message", async (req, res) => {
    try {
        const newMessage = new viewersmessage({
            email: req.body.email,
            message: req.body.message,
        })
        const result = await newMessage.save();                
        res.render("index");
    } catch (error) {
        res.send(error);
    }
});


app.listen(port, () => {
    console.log(`running on the port ${port}`);
});