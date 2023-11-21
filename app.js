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
  res.redirect('/november');
});

app.get("/november", (req, res) => {
  res.render("index");
})

app.get("/november/0", (req, res) => {
  res.redirect('/november');
})

app.get("/november/NaN", (req, res) => {
  res.redirect('/november/1');
})

app.get(`/november/:day`, (req, res) => {
  const day = parseInt(req.params.day);
  console.log(day);
  res.sendFile("content.html", {root: `public/2023/November/${day}.` })

})

// 404 page
app.use((req, res) => {
  res.status(404).render("404", {title: "404"});
});

