
import React, { useState } from "react";
import { useHistory } from 'react-router-dom'
import moment from "moment-timezone";
import Datetime from "react-datetime";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card, Form, Button, InputGroup } from '@themesberg/react-bootstrap';


export const GeneralInfoForm = () => {
  const history = useHistory();
  const [user, setUser]= useState({
    name:"", email:"", phone:"", work:"", password:"", cpassword:""
  })

  let name, value;
  const handleInputes= (e)=>{
    // console.log(e);
    name= e.target.name;
    value= e.target.value;
    setUser({...user,[name]:value});
  }
const postData = async(e)=>{
e.preventDefault();
const { name, titale, body}= user;

const res= await fetch("/addtask",{
  method:"POST",
  headers:{
    "Content-Type": "application/json",
    'accept': 'application/json'
  },
  body: JSON.stringify({
    name, titale, body
  })
});
const data= await res.json();

if(res.status ===422 || !data){
  window.alert("Invalid Registration");
  console.log("Invalid Registration");
}else{
  // window.alert("Registration successfull");
  console.log("Registration successfull");
  history.push("/tasklist")
}

}
  return (
    <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">Task information</h5>
        <Form method="POST" >
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Title</Form.Label>
                <Form.Control required type="text" name="name" value={user.name}
      onChange={handleInputes} placeholder="Task name" />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="lastName">
                <Form.Label>Descrption</Form.Label>
                <Form.Control required type="text"  name="titale"  value={user.titale}
      onChange={handleInputes} placeholder="Task tital" />
              </Form.Group>
            </Col>
          </Row>
         
             <Row>
            <Col md={12} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Form ID</Form.Label>
                <Form.Control required type="text" name="body" value={user.body}
      onChange={handleInputes} placeholder="Enter Task Form Id" />
              </Form.Group>
            </Col>
            </Row>
          <div className="mt-3">
            <Button variant="primary" onClick={postData} type="submit">Add Task</Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};