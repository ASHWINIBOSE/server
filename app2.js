var exp=require('express')
const app=exp();
app.get("/",function(req,res){
    res.sendFile(__dirname+"/src/views/home2.html")
});
app.get("/emp",function(req,res){
    res.sendFile(__dirname+"/src/views/emp.html")
});
app.get("/emp/prep",function(req,res){
    res.sendFile(__dirname+"/src/views/prep.html")
});
app.get("/emp/prep/:id",function(req,res){
    res.send("selected employee is "+req.params.id)
});
app.get("/emp/notprep",function(req,res){
    res.sendFile(__dirname+"/src/views/notprep.html")
});
app.get("/prd",function(req,res){
  res.sendFile(__dirname+"/src/views/prd.html")
});
app.listen(8000,function(req,res){
    console.log("server starts listening....")
})