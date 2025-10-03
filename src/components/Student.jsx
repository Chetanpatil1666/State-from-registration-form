import React, { useState } from "react";
import "./Student.css";

function Student() {
  const [student, setStudent] = useState({
    roll: 0,
    firstName: "",
    lastName: "",
    marks: 0,
  });

  const [studentData, setStudentData] = useState([]);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setStudent((oldStudent) => ({ ...oldStudent, [name]: value }));
  };

  const register = (e) => {
    e.preventDefault();
    setStudentData((oldData) => [...oldData, student]);
    reset();
  };
  const reset = () => {
    setStudent({
      roll: 0,
      firstName: "",
      lastName: "",
      marks: 0,
    });
  };
  return (
    <div className="container">
      <h1>Student Registration</h1>
      <div></div>
      <form onSubmit={register} className="form">
        <label> Roll No</label>
        <input
          type="number"
          name="roll"
          value={student.roll}
          onChange={inputHandler}
        />
        <br />
        <br />
        <label> First Name</label>
        <input
          type="text"
          name="firstName"
          value={student.firstName}
          onChange={inputHandler}
        />
        <br />
        <br />
        <label> Last Name</label>
        <input
          type="text"
          name="lastName"
          value={student.lastName}
          onChange={inputHandler}
        />
        <br />
        <br />
        <label> Marks</label>
        <input
          type="number"
          name="marks"
          value={student.marks}
          onChange={inputHandler}
        />
        <br />
        <br />
        <br />
        <button type="submit">Register</button>
      </form>
      <br />
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Roll</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Marks</th>
          </tr>
        </thead>

        <tbody>
          {studentData.map((std, index) => (
            <tr key={index}>
              <td>{index}</td>
              <td>{std.roll}</td>
              <td>{std.firstName}</td>
              <td>{std.lastName}</td>
              <td>{std.marks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Student;
