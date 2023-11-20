require("dotenv").config()
const express = require("express")



const app = express()
const port = process.env.PORT_MAIN;



app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));

app.listen(port);

app.set("view engine", "ejs");

// routes
app.get('/', (req, res) => {
    res.redirect('/february');
  });

app.get("/february", (req, res) => {
  res.render("index");
  })
  
app.get(`/february/:day`, (req, res) => {
  const day = parseInt(req.params.day);
  console.log(day);
  res.sendFile("content.html", {root: `2025/February/${day}.` })
})

// 404 page
app.use((req, res) => {
    res.status(404).render("404", {title: "404"});
});
