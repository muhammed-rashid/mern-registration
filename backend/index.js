const express = require('express');
const mongoose = require('mongoose');
const User = require('./model/user');
const {MONGOURI} = require('./keys');
const cors = require('cors');

//initialize app

const app = express();

//midle wares

app.use(express.json());
app.use(cors());

//db connection
mongoose.connect(MONGOURI,{ useNewUrlParser: true , useUnifiedTopology: true }).then(()=>{
    console.log('connected');
}).catch((err)=>{
    console.log('error to connect db');
});


//routes
app.get('/',(req,res)=>{
    res.send('hello world')
});

app.post('/add',async(req,res)=>{
    const {username,password,email} = req.body;
    if(!username || !password || !email){
       return(res.send(' all field required'));
    }
    if(password.length < 6){
           return(res.send('password must contain atleast 6 charecters'));
    }
       
    email_exist =await  User.findOne({email:req.body.email});
       if(email_exist){
        return(res.send(' email is already exist'));
       }
       
     
       
          const data = new User({
              username,
              email,
              password
          })
          data.save().then(()=>{
              return(res.send('new user added'));
          }).catch((err)=>{
              res.json({error:"an error ocure to save database"})
          })

       
        

    

    

})

app.listen(4000,()=>{
    console.log('server is running');
})