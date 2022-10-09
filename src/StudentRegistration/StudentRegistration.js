import React, { useState } from "react";
import "./student.css";
import { Row, Container, Col, Button, Table } from "react-bootstrap";
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
  subjects = {
    marathi: false,
    hindi: false,
    english: false,
  };
  mobile;
  gender = "male";
  constructor(
    firstName = "",
    lastname = "",
    standard = "",
    division = "",
    subjects = {
      marathi: false,
      hindi: false,
      english: false,
    },
    mobile = "",
    gender = "male"
  ) {
    super(firstName, lastname);
    Student.count += 1;
    this.id = Student.count;
    this.standard = standard;
    this.division = division;
    this.subjects = subjects;
    this.mobile = mobile;
    this.gender = gender;
  }
}

const REGEX = {
  textInputsOnly: "[a-zA-Z]+",
  mobileNumber: "[0-9]{10}",
};

export function StudentForm() {
  const standards = [10, 11, 12];
  const [student, updateStudent] = useState(new Student());
  const [studentList, updateList] = useState([]);

  const updateForm = (key, value) => {
    updateStudent({
      ...student,
      [key]: value,
    });
  };

  const updateSubjects = (event) => {
    updateStudent({
      ...student,
      subjects: {
        ...student.subjects,
        [event.target.id]: !student.subjects[event.target.id],
      },
    });
  };

  const register = (event) => {
    event.preventDefault();
    console.log(student);

    updateList([...studentList, student]);

    updateStudent(new Student());
  };

  const hasError = (field, required = false, pattern = null) => {
    if (required) {
      if (!student[field]) {
        return true;
      }
    }

    if (pattern) {
      return !new RegExp(pattern).test(student[field]);
    }

    return false;
  };

  const hasSubjectsSelected = () => {
    return Object.values(student.subjects).some((t) => t === true);
  };

  return (
    <Container style={{ border: "1px solid black" }}>
      <form onSubmit={register}>
        <Row>
          <Col sm={4} xs={6}>
            <label>First Name</label>
          </Col>
          <Col sm={8} xs={6}>
            <input
              placeholder="First name"
              type="text"
              required
              //pattern="[a-z]*"
              pattern={REGEX.textInputsOnly}
              onChange={(e) => updateForm("firstName", e.target.value)}
              value={student.firstName}
              className={
                hasError("firstName", true, REGEX.textInputsOnly)
                  ? "error-input"
                  : ""
              }
            />
          </Col>
        </Row>
        <Row>
          <Col sm={4} xs={4}>
            <label>Last name</label>
          </Col>
          <Col sm={8} xs={8}>
            <input
              placeholder="Last name"
              type="text"
              required
              pattern={REGEX.textInputsOnly}
              onChange={(e) => updateForm("lastName", e.target.value)}
              value={student.lastName}
              className={
                hasError("lastName", true, REGEX.textInputsOnly)
                  ? "error-input"
                  : ""
              }
            />
          </Col>
        </Row>
        <Row>
          <Col sm={4} xs={4}>
            <label>Mobile</label>
          </Col>
          <Col sm={8} xs={8}>
            <input
              placeholder="mobile"
              type="text"
              required
              pattern={REGEX.mobileNumber}
              onChange={(e) => updateForm("mobile", e.target.value)}
              value={student.mobile}
              className={
                hasError("mobile", true, REGEX.mobileNumber)
                  ? "error-input"
                  : ""
              }
            />
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
            <Row>
              <Col sm={12} xs={12}>
                <label>Subjects</label>
              </Col>
            </Row>
          </Col>
          <Col sm={8}>
            <Row>
              <Col sm={4} xs={12}>
                <input
                  type="checkbox"
                  id="marathi"
                  onChange={updateSubjects}
                  value={student.subjects.marathi}
                />
                <label htmlFor="marathi">Marathi</label>
              </Col>
              <Col sm={4} xs={12}>
                <input
                  type="checkbox"
                  id="hindi"
                  onChange={updateSubjects}
                  value={student.subjects.hindi}
                />
                <label htmlFor="hindi">Hindi</label>
              </Col>
              <Col sm={4} xs={12}>
                <input
                  type="checkbox"
                  id="english"
                  onChange={updateSubjects}
                  value={student.subjects.english}
                />
                <label htmlFor="enlish">English</label>
              </Col>
            </Row>
            {!hasSubjectsSelected() && (
              <Row>
                <Col>
                  <span className="error-input">
                    Please select at least one subject
                  </span>
                </Col>
              </Row>
            )}
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
            <Row>
              <Col sm={12} xs={12}>
                <label>Gender</label>
              </Col>
            </Row>
          </Col>
          <Col sm={8}>
            <Row>
              <Col sm={6} xs={12}>
                <input
                  type="radio"
                  name="gender"
                  id="male-radio"
                  value="male"
                  required
                  onChange={(e) => updateForm("gender", e.target.value)}
                />
                <label htmlFor="male-radio">Male</label>
              </Col>
              <Col sm={6} xx={12}>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  required
                  id="female-radio"
                  onChange={(e) => updateForm("gender", e.target.value)}
                />
                <label htmlFor="female-radio">Female</label>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="btn-container">
          <Col>
            <Button type="submit">Register</Button>
          </Col>
        </Row>
      </form>
      <StudentList list={studentList} />
    </Container>
  );
}

export function StudentList({ list }) {
  const subjects = (subject) => {
    return (
      <div>
        {Object.entries(subject).map(([key, value]) => {
          return (
            <div>
              <input type="checkbox" readOnly checked={value} />
              <label>{key}</label>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>First name</th>
            <th>Last name</th>
            <th>Mobile number</th>
            <th>Subjects</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {list.map((student) => {
            return (
              <tr>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.mobile}</td>
                <td>{subjects(student.subjects)}</td>
                <td>{student.gender}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default function StudentRegistrations() {
  return (
    <>
      <StudentForm />
    </>
  );
}
