//console.log("Hello")
//importing express
var express=require('express')
//Extract entire body portion of incoming request stream and exposes on body stream && used in POST && JSON parsing form
var bodyParser=require('body-parser')
//Provides path for working directory
var path=require('path')
//Instance of Require app
var app=express();
//to configure middleware routes 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname,'private')))

app.get('/hello',function(req,res){
    res.sendFile(path.join(__dirname,'/public','index.html'))
    //app.use(express.static(path.join(__dirname,'public')))

})

app.listen(4000,function(){
    console.log("Server started on 4000..")
})
