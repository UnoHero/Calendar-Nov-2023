const express = require("express")
const siteRoutes = require("./routes/siteRoutes");

const app = express()

app.listen(3000)

app.set("view engine", "ejs");

// routes
app.get('/', (req, res) => {
    res.redirect('/February');
    res.render("index")
  });


// 404 page
app.use((req, res) => {
    res.status(404).render("404", {title: "404"});
});