//The start file
require("dotenv").config()
const express = require("express")


const app = express()
//port is equal to the PORT_MAIN from the .env file. (3000)
const port = process.env.PORT_MAIN;


app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));

//here we use the port variabl to listen if somewon goes to the our site.
app.listen(port);

app.set("view engine", "ejs");

// routes
// This route is here to pretend like we are a bigger company and thet there is more then one moth. so isted of going to a all yer calender at root you get sendt to the november as a test.
app.get('/', (req, res) => {
  res.redirect('/november');
});

// this route is resposible for geting the main page november calender.
app.get("/november", (req, res) => {
  res.render("index");
})

// this is ome logic needen for the arrow and swipe functions. Since we use a counting system wen it retches 0 we get sendt to the home page.
app.get("/november/0", (req, res) => {
  res.redirect('/november');
})

// this is some logic needed for the arrow and swipe functions. Wen we go from the main page to the 1. we go from a NaN value to a 1.
app.get("/november/NaN", (req, res) => {
  res.redirect('/november/1');
})

// this is the route that ither sends you to the responding day or the 404 page.
app.get(`/november/:day`, (req, res) => {
  const day = parseInt(req.params.day);
  console.log(day);

  if (isNaN(day)) {
    // If day is not a number (i.e., it's NaN), render the 404 page
    res.render("404");
  } else {
    // If day is a number, proceed with rendering the content
    res.sendFile("content.html", { root: `public/2023/November/${day}` });
  }
});


// 404 page
app.use((req, res) => {
  res.status(404).render("404", {title: "404"});
});
