import './App.css';
import React from 'react'
function App1(props) {
  return (
    <h1 className="display-4 text-primary fw-bold">HII {props.name} {props.branch}</h1>

  );
}

function App() {
  return (
    <div className="container">
      <App1 name="keers" branch="IT" />
    </div>
  );
}
export default App;
// function App() {
//   return (
//     <>
//       <App1 name="keers"  branch="IT"/>
//     </>
//   );
// }
// class App extends React.Component{
//   constructor(){
//     super()
//     this.state={
//       cnt:0
//     }
//     this.add=this.add.bind(this)
//   }
//   async add(){
//    // this.cnt=this.cnt+1
//    await this.setState({cnt:this.state.cnt+1})
//    console.log(this.state.cnt)

//   }
//   render(){
//     return(
//       <>
//       <p>Count: {this.state.cnt}</p>
//       <button onClick={this.add}>CLICK MEHH</button>
//       </>

//     )
//   }

// }

// import React from 'react';
// import axios from 'axios';

// class App extends React.Component {
//   state = {
//     students: [],
//     newStudent: { name: '', branch: '' }
//   };

//   async componentDidMount() {
//     try {
//       const response = await axios.get('http://localhost:8000/students.json');
//       console.log(response.data); // Log the response data
//       this.setState({ students: response.data });
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   }
  

//   handleInputChange = (e) => {
//     const { name, value } = e.target;
//     this.setState((prevState) => ({
//       newStudent: { ...prevState.newStudent, [name]: value }
//     }));
//   };

//   addStudent = () => {
//     this.setState((prevState) => ({
//       students: [...prevState.students, this.state.newStudent],
//       newStudent: { name: '', branch: '' }
//     }));
//   };

//   deleteStudent = (index) => {
//     const students = [...this.state.students];
//     students.splice(index, 1);
//     this.setState({ students });
//   };

//   render() {
//     const { students, newStudent } = this.state;

//     return (
//       <div>
//         <h1>Students List</h1>
//         <table>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Branch</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {students.map((student, index) => (
//               <tr key={index}>
//                 <td>{student.name}</td>
//                 <td>{student.branch}</td>
//                 <td>
//                   <button onClick={() => this.deleteStudent(index)}>Delete</button>
//                   <button onClick={() => console.log('Update student:', student)}>Update</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <h2>Add Student</h2>
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={newStudent.name}
//           onChange={this.handleInputChange}
//         />
//         <input
//           type="text"
//           name="branch"
//           placeholder="Branch"
//           value={newStudent.branch}
//           onChange={this.handleInputChange}
//         />
//         <button onClick={this.addStudent}>Add Student</button>
//       </div>
//     );
//   }
// }

// export default App;

