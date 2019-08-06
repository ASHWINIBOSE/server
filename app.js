var exp=require('express')
const app=exp();
app.get("/",function(req,res){
    res.sendFile(__dirname+"/src/views/home.html")
});
app.get("/books",function(req,res){
    res.send("book id:")
});
app.get("/books/poems",function(req,res){
    res.send("poems.....")
    res.send("malayalam poems")
});
app.listen(8000,function(req,res){
    console.log("server starts listening....")
})