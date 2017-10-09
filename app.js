let express = require("express");
let app = express();
let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.set("port", 5000);

let campgrounds = [  
  {
    name: "Salmon Creek", 
    img: "https://tinyurl.com/yae5xn8j"
  },{
    name: "Black Mountain", 
    img: "https://tinyurl.com/y72fem6d"
  },{
    name: "Red Piny", 
    img: "https://tinyurl.com/y8cujm2z"
  },
];

app.get("/", function(req, res){
  res.render("landing")
});

app.get("/campgrounds", function(req, res){

  res.render("campgrounds", {campgrounds: campgrounds});
});
app.get("/campgrounds/new", function(req, res){
  res.render("new.ejs");
});
app.post("/campgrounds/", function(req, res) {
  let name = req.body.name;
  let img = req.body.name;
  let campground = {
    name: name,
    img: img
  };
  campgrounds.push(campground);
  res.redirect("/campgrounds");
});
 

app.put("/campground/:id", function(req, res) {
  
  });

app.listen(app.get("port"), function(){
  console.log("app listening on port", app.get("port"));
});