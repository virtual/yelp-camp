let express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  mongoose = require('mongoose');
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.set("port", 5000);

mongoose.connect('mongodb://localhost:27017/yelp-camp');

var campgroundSchema = new mongoose.Schema({
  name: String,
  img: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create({ 
//   name: "Salmon Creek", 
//   img: "https://tinyurl.com/yae5xn8j"}
//   , function(err, campground){
//   if (err) console.log(err);
//   else console.log(campground);
// });

app.get("/", function(req, res){
  res.render("landing")
});

app.get("/campgrounds", function(req, res){
  // Get all the campgrounds from DB
  Campground.find({}, function(err, allCampgrounds){
    if (err) { console.log(err);}
    else { 
      res.render("campgrounds", {campgrounds: allCampgrounds})
    }
  });
});

app.get("/campgrounds/new", function(req, res){
  res.render("new.ejs");
});
app.post("/campgrounds/", function(req, res) {
  let name = req.body.name;
  let img = req.body.img;
  let campground = {
    name: name,
    img: img
  };
  // Create a new campground and save to DB
  Campground.create(campground, function(err, newlyCreated){
    if (err) { console.log(err);}
    else { 
      // it worked, go back to campgrounds
      res.redirect("/campgrounds");
    }
  })
});
 

app.put("/campground/:id", function(req, res) {
  
  });

app.listen(app.get("port"), function(){
  console.log("app listening on port", app.get("port"));
});