const express = require('express');
const bodyParser = require('body-parser');
const z = require('zod');
const cors = require('cors')
const mongoose = require('mongoose')
const {User} = require('./db/db');
const { log } = require('console');

const app = express();
app.use(cors());
app.use(bodyParser.json());



app.post('/signup',async (req,res)=>{

    
    const zodSchema = z.object({
        username:z.string().min(5 ,{msg:"Minimum 5 character"}),
        email:z.string().email({msg:"Invalid email address"}),
        password:z.string().min(8,{msg:"Password must be 8 character long"}),
        conPassword:z.string().min(8,{msg:"Password must be 8 character long"}),
    }).refine((values)=>{
        let match = values.password === values.conPassword ? true : false ;
        if(!match){
            
        }else{
            return match;
        }
    },{
        message:"Password must match",
        path:["confirmPassword"]
    });

    const body = req.body;

    const userExists = await User.findOne({username:body.username,email:body.email,password:body.password})
    if(userExists){
        
        res.json({
            msg:"user already exists please signin"
        })
        return;
    }else{
        const response = zodSchema.safeParse(body);

        if(response.success){
            const user = await User.create({
                username:body.username,
                email:body.email,
                password:body.password
            });
            user.save();
            
            res.json({msg:"User created successfully !"})
        }else{
            res.json({msg:"Invalid Input",response:response.error.issues,body:body})
        }
    }
})

app.post('/signin',(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    
    User.findOne({
        username:username,
        password:password
    })
    .then((response)=>{
        if(response){
            res.json({
                msg:"Signin successfull!",
            })
        }else{
            res.json({
                msg:"Invalid username or password",
            })
        }
    })
})

app.listen(3000,()=>{
    console.log(`Server is runnig on port 3000`);
});

module.exports;

// else if(!data){
//     res.json({
//         msg:"username doesn't exists, please sign up"
//     })
// }