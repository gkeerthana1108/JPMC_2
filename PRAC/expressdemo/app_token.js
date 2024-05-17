const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

app.post('/login', (req, res) => {
    const user = {
        uname: "cvr",
        pass: "jpmc"
    };

    jwt.sign({ user }, "secret key", { expiresIn: "20s" }, (err, token) => {
        // if (err) {
        //     // Handle error
        //     console.error(err);
        //     res.status(500).json({ error: 'Failed to generate token' });
        // } 
            res.status(200).json({ token });
    
    });
});
// function verifyToken(req,res,next){
//     next()
// }
// app.post('/profile',verifyToken,(req,res)=>{
//     res.status(200).json({message:"Profile Accepted"})
// })

// app.post('/profile',(req,res)=>{
//     res.status(200).json({message:"Profile Accepted"})
// })

function verifyToken(req,res,next){
    token=req.headers.authorization.split(' ')[1]
    req.token=token
    next()
}
app.post('/profile',verifyToken,(req,res)=>{
    console.log(req.token);
    jwt.verify(req.token,"secret key",(err,data)=>{
        if(!err){
            res.status(200).json({message:"Profile Accepted"})
        }
        res.status(300).send("Token mismatched")
    })
})
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

