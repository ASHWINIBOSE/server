var exp=require('express')
var bodyparser=require('body-parser')
const app=exp();
var book_array=[{name:"book1",author:"auth1",price:"111"},{name:"book2",author:"auth2",price:"299"},{name:"book3",author:"auth3",price:"100"}];
app.set("view engine","ejs");
app.set("views","./src/views")
app.use(bodyparser.urlencoded({extented:true}));
app.get("/",function(req,res){
    res.render("login");
});
app.post("/home",function(req,res){
    if(req.body.pass=="123"){
        res.render("home",{user:req.body.uname});
    }
    else{
        res.redirect("/")
    }
   
});
app.get("/books",function(req,res){
    res.render("books",{bookz:book_array})
});

app.listen(8081,function(req,res){
    console.log("server started listening..")
})