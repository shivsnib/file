//import express module
const express=require('express')
const app=express()

app.use(express.json())

let users=[
    {id:1, name:"anu", email:"abc@gmil.com"}, 
    
    {id:2, name:"saru", email:"abc@gmil.com"}
]

//get all users
app.get('/users',(req,res)=>{
res.join(users)})
//post
app.post('/users',(req,res)=>{
    const newUser={id:users.length+1,...req.body}
     newUser.push(newUser)

})

//UPADATE--PUT
app.put('/users/:id',(req,res)=>{
    const user=users.find(u=>u.id===ParseInt(req.params.id))
    if(!user)return res.status(404).json({message:"user not found"})
        user.name=req.body.name || req.name
    user.email =req.bady.email || req.email
    res.join(user) 
})
//DELETE
app.delete('/users/:id',(req,res)=>{
    users=users.filter(user=>user.id !==parseInt(req,params.id))
    res.join({message:'user Deleted'})
})
app.listen(8000,()=>console.log('server is running in port 8000'))

