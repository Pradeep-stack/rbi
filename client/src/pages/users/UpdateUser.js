import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen, faCartArrowDown, faChartPie, faChevronDown, faClipboard, faCommentDots, faFileAlt, faPlus, faRocket, faStore } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Button, Dropdown, Card, Form, InputGroup } from '@themesberg/react-bootstrap';
import { ChoosePhotoWidget, ProfileCardWidget } from "../../components/Widgets";

export default () => {
  const history = useHistory();
  const { id } = useParams();
  // alert(_id);
  const [user, setUser] = useState({
    name: "", email: "", phone: "", work: "", password: "", cpassword: ""
  })


 const getData = () => {
    console.log("axios dataa");
    axios.get(`/user/${id}`)
      .then((Response) => {
        const myData = Response.data;
        setUser(myData)
      });
  };

  useEffect(() => getData(), []);

  let name, value;
  const handleInputes = (e) => {
    // console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  }


  const postData = async (e) => {
    e.preventDefault();
    const { name, email, phone, work, password, cpassword } = user;

    const res = await fetch(`/update/${id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name, email, phone, work, password, cpassword
      })
    });
    const data = await res.json();
    if (res.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      // window.alert("Registration successfull");
      console.log("Registration successfull");
      history.push("/transactions")
    }
  }
  return (
    <>
   

      <Row>
        <Col xs={12} xl={8}>
          {/* ################################Addd User Form Here ##################################*/}
          <Form method="POST" >
            <Form.Group as={Row} className="mb-3 " controlId="formBasicDetails">
              <Form.Label column sm="4">
                Name :
              </Form.Label>
              <Col sm="4">
                <Form.Control type="text" name="name" value={user.name}
                  onChange={handleInputes} placeholder="Enter here your name" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
              <Form.Label column sm="4">
                Email :
              </Form.Label>
              <Col sm="4">
                <Form.Control type="email" name="email" value={user.email}
                  onChange={handleInputes} placeholder="Eneter your email here" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
              <Form.Label column sm="4">
                Phone :
              </Form.Label>
              <Col sm="4">
                <Form.Control type="number" name="phone" value={user.phone}
                  onChange={handleInputes} placeholder="enter your phone here " />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
              <Form.Label column sm="4">
                Role :
              </Form.Label>
              <Col sm="4">

                <Form.Select name="work" value={user.work}
                  onChange={handleInputes}>
                  <option >Select User Type</option>
                  <option value="Bank">Bank</option>
                  <option value="User">User</option>
                </Form.Select>
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formBasicDetails">
              <Form.Label column sm="4">
                Password :
              </Form.Label>

              <Col sm="4">
                <Form.Control type="password" name="password" value={user.password}
                  onChange={handleInputes} placeholder="Password" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
              <Form.Label column sm="4">
                Confirm  Password :
              </Form.Label>
              <Col sm="4">
                <Form.Control type="password" name="cpassword" value={user.cpassword}
                  onChange={handleInputes} placeholder="Confirm Password" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Col sm={{ span: 10, offset: 4 }}>
                <Button type="submit" name="login" onClick={postData} value="login">Update User</Button>
              </Col>
            </Form.Group>

          </Form>
        </Col>
      </Row>
    </>
  );
};
