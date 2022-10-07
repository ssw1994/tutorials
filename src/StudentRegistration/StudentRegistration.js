import React, { useState } from "react";
import "./student.css";
const subjects = [
  {
    id: 1,
    subject: "Marathi",
  },
  {
    id: 2,
    subject: "English",
  },
  {
    id: 3,
    subject: "Hindi",
  },
];

class PersonName {
  firstName;
  lastName;
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = firstName;
  }
}

class Student extends PersonName {
  static count = 0;
  id;
  standard;
  division;
  subjects;

  constructor(firstName, lastname, standard, division, subjects) {
    super(firstName, lastname);
    Student.count += 1;
    this.id = Student.count;
    this.standard = standard;
    this.division = division;
    this.subjects = subjects;
  }
}

export function StudentForm() {
  const standards = [10, 11, 12];
  const [student, updateStudent] = useState(new Student());

  const updateForm = () => {};

  const name = (
    <div className="student-name">
      <div>
        <input placeholder="First name" />
      </div>
      <div>
        <input placeholder="Last name" />
      </div>
    </div>
  );

  const standard = (
    <div>
      <select placeholder="standard">
        {standards.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );

  const division = (
    <div className="division">
      <label>Division</label>
      <div>
        <input type="radio" id="divisionA" name="division" />
        <label htmlFor="divisionA">division A</label>
      </div>
      <div>
        <input type="radio" id="divisionB" name="division" />
        <label htmlFor="divisionB">division B</label>
      </div>
    </div>
  );

  const subs = (
    <div className="division">
      {subjects.map((subject) => (
        <div>
          <input type="checkbox" id={subject.id} />
          <label htmlFor={subject.id}>{subject.subject}</label>
        </div>
      ))}
    </div>
  );

  const register = (event) => {
    event.preventDefault();
    console.log(student);
  };

  return (
    <div className="center-box student-form">
      <form onSubmit={register}>
        {name}
        {standard}
        {division}
        {subs}
        <div>
          <button>Register</button>
        </div>
      </form>
    </div>
  );
}

export function StudentList() {
  return (
    <div>
      <table></table>
    </div>
  );
}

export default function StudentRegistrations() {
  return (
    <>
      <StudentForm />
      <StudentList />
    </>
  );
}
