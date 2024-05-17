const express=require('express')
const app=express()
app.use(express.json())
function middleware(req,res,next){
    next()
}
app.get('/',(req,res)=>{
    res.send("HOME PAGE")
})
students=[
    {
        id:1,name:"keerss",branch:"CSE"
    },
    {
        id:2,name:"geetha",branch:"IT"
    }
]
app.get('/api/students',(req,res)=>{
    res.status(200).json(students)
})

app.get('/api/students/:id',(req,res)=>{
    const student=students.find((student)=>
        student.id==parseInt(req.params.id))
    if(!student){
        res.status(404).send(`Student with given id ${req.params.id} doesnt exists`)
    }
    res.status(200).json(student)
})


app.post('/api/students',middleware,(req,res)=>{
    const student={
        id:students.length+1,
        name:req.body.name,
        branch:req.body.branch

    }
    students.push(student)
    res.status(200).json(student)
})
app.put('/api/students/:id',(req,res)=>{
    const student=students.find((student)=>
        student.id==parseInt(req.params.id))
    if(!student){
        res.status(404).send(`Student with given id ${req.params.id} doesnt exists`)
    }
    student.id=req.params.id
    student.name=req.body.name
    student.branch=req.body.branch
    res.status(200).json(student)
})
app.patch('/api/students/:id',(req,res)=>{
    const student=students.find((student)=>
        student.id==parseInt(req.params.id))
    if(!student){
        res.status(404).send(`Student with given id ${req.params} doesnt exists`)
    }
    student.id=req.params.id
    student.name=req.body.name
    res.status(200).json(student)
})
app.delete('/api/students/:id',(req,res)=>{
    const student=students.find((student)=>
        student.id==parseInt(req.params.id))
    if(!student){
        res.status(404).send(`Student with given id ${req.params} doesnt exists`)
    }
    const index=students.indexOf(student)
    students.splice(index,1)
    res.status(200).json(student)
})

app.listen(3000,()=>console.log("server listening at port 3000"))