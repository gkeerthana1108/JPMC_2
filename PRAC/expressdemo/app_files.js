const fs = require('fs');
const students =require("C:/Users/CVR/Desktop/JPMCC/PRAC/expressdemo/students.json")
const express = require('express');
const app = express();
app.use(express.json());


app.get('/', (req, res) => {
    res.send("This is Home Page");
});

app.get('/students',(req,res)=>{
    res.status(200).json(students)
})

app.get('/students/:id', (req, res) => {
    const student = students.find(student => student.id === parseInt(req.params.id));
    if (!student) {
        return res.status(404).send('Student with id ' + req.params.id + ' does not exist');
    }
    res.status(200).send(student);
});

app.post('/students',middleware,(req,res)=>
{
    let myWrite = fs.createWriteStream('students.json')
    const student = req.body
    // const student={
    //     id:students.length+1,
    //     name:req.body.name,
    //     branch:req.body.branch

    // }
    students.push(student)
    myWrite.write(JSON.stringify(students))
    res.json(student)
})
app.put('/students/:id', middleware, (req, res) => {
    const student = students.find(student => student.id === req.params.id);
    if (!student) {
        return res.status(404).send('Student with id ' + req.params.id + ' does not exist');
    }

    student.name = req.body.name;
    let myWrite = fs.createWriteStream('students.json');
    myWrite.write(JSON.stringify(students));
    res.json(req.body);
});

app.delete('/students/:id', middleware, (req, res) => {
    const student = students.find(student => student.id === req.params.id);
    if (!student) {
        return res.status(404).send('Student with id ' + req.params.id + ' does not exist');
    }
    const deletedStudentIndex = students.indexOf(student);
    students.splice(deletedStudentIndex, 1);
    let myWrite = fs.createWriteStream('students.json');
    myWrite.write(JSON.stringify(students));
    res.json(student); 
});

function middleware(req,res,next){
    console.log('Received a request:', req.method, req.url);
    next()
} 

app.listen(3000);
