const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const handlelogin = require('./handlelogin');
const handleregister = require('./handleregister');
const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const port = 8000;

let db = mysql.createConnection({
  host: 'localhost',
  port:3306,
  user: 'root',
  password: 'Rohith@2003',
  database:'mydb',
  insecureAuth:true
});

db.connect((err)=>{
  if(!err){
    console.log('connected');
  }else{
    console.log(err.message);
  }
})

app.post('/login',(req,res)=>{
  handlelogin.handlelogin(req,res,db);
})

app.post('/register',(req,res)=>{
  handleregister.register(req,res,db);
})


app.listen(port, ()=>console.log("Listening on port "+port));
