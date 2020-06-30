const express = require('express'); 
const exphbs = require('express-handlebars'); 
const db = require('./model/dataDB');
const app = express(); 
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('public'));
app.engine('handlebars', exphbs()); 
app.set('view engine', 'handlebars'); 

app.get("/", (req,res)=>{

    res.render("home", {
        title: "Home Page", 
        topMeals: db.topMealsDB,
        hero: "Meals and grocery delivered."
    });
});
app.get("/AllPackages", (req,res)=>{

    res.render("page", {
        title: "All Packages",
        mealPackages: db.mealPackagesDB,
        hero: "Our meal packages"
    });
});
app.listen(3000, ()=>{
    console.log("Web Server is up and running");
});
app.get("/login", (req,res)=>{
    res.render("login", {
        title: "Login",
        hero: "Meals and grocery delivered."
    })
})
app.get("/signup", (req,res)=>{
    res.render("signup", {
        title: "signup",
        hero: "Meals and grocery delivered."
    })
})
app.post("")
