let express = require("express");
let app = express();
let bodyParser = require("express");
app.set("view engine", "ejs");
app.set("port", 5000);

app.get("/", function(req, res){
  res.render("landing")
});

app.get("/campgrounds", function(req, res){

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
  res.render("campgrounds", {campgrounds: campgrounds});
})

app.listen(app.get("port"), function(){
  console.log("app listening on port", app.get("port"));
});