const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.json());

// Function to read students data from the JSON file
const readStudentsData = () => {
    const studentsData = fs.readFileSync(__dirname + '/students.json', 'utf8');
    return JSON.parse(studentsData);
};

// Function to write students data to the JSON file
const writeStudentsData = (studentsData) => {
    fs.writeFileSync(__dirname + '/students.json', JSON.stringify(studentsData));
};

// Route to get all students
app.get('/api/students', (req, res) => {
    const students = readStudentsData();
    res.status(200).json(students);
});

// Route to get a specific student by ID
app.get('/api/students/:id', (req, res) => {
    const students = readStudentsData();
    const student = students.find(student => student.id === parseInt(req.params.id));
    if (!student) {
        return res.status(404).send(`Student with given id ${req.params.id} doesn't exist`);
    }
    res.status(200).json(student);
});

// Route to add a new student
app.post('/api/students', (req, res) => {
    const students = readStudentsData();
    const newStudent = {
        id: students.length + 1,
        name: req.body.name,
        branch: req.body.branch
    };
    students.push(newStudent);
    writeStudentsData(students);
    res.status(200).json(newStudent);
});

// Route to update a student by ID
app.put('/api/students/:id', (req, res) => {
    const students = readStudentsData();
    const studentIndex = students.findIndex(student => student.id === parseInt(req.params.id));
    if (studentIndex === -1) {
        return res.status(404).send(`Student with given id ${req.params.id} doesn't exist`);
    }
    const updatedStudent = {
        id: parseInt(req.params.id),
        name: req.body.name,
        branch: req.body.branch
    };
    students[studentIndex] = updatedStudent;
    writeStudentsData(students);
    res.status(200).json(updatedStudent);
});

// Route to delete a student by ID
app.delete('/api/students/:id', (req, res) => {
    const students = readStudentsData();
    const studentIndex = students.findIndex(student => student.id === parseInt(req.params.id));
    if (studentIndex === -1) {
        return res.status(404).send(`Student with given id ${req.params.id} doesn't exist`);
    }
    const deletedStudent = students.splice(studentIndex, 1)[0];
    writeStudentsData(students);
    res.status(200).json(deletedStudent);
});

app.listen(3000, () => console.log("server listening at port 3000"));
