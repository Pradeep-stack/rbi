
import React,{useState, useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faEnvelope, faUnlockAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Col, Row, Form, Card, Button, FormCheck, Container, InputGroup } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom'
// import {login} from "../../actions/index"
import {login} from "../../reducers/loginSlice"
import { Routes } from "../../routes";
import BgImage from "../../assets/img/illustrations/signin.svg";
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser, loadUsers } from '../../actions'
import { selectUser } from "../../reducers/loginSlice";

export default () => {
  const history = useHistory();
 

  let dispatch = useDispatch();
  // let history = useHistory();

  // useEffect(() => {
  //   dispatch(loadUsers());
  // }, []);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [work, setWork] = useState('');

  const [state, setState] = useState({
    email: "",
    password: "",
    // work: ""
});

const handleInputeChange =(e) => {
  let {name, value} = e.target;
  setState({...state,[name]:value});
}
  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch('/signin', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password,
        // work
      })
    })  
    const data = await  res.json();

    localStorage.setItem('myData', JSON.stringify(data.user));
    

      dispatch(login({data
       
      }))
    
           

    console.log("signj in chaeckinh",data);

    if (res.status === 400 || !data) {
      window.alert("Invalid Credinatial")
    } else {

      // window.alert("Login Successfull");
      history.push("/dashboard/overview")}
  }
  return (
    <main>
      <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
        <Container>
          <p className="text-center">
            {/* <Card.Link as={Link} to={Routes.DashboardOverview.path} className="text-gray-700">
              <FontAwesomeIcon icon={faAngleLeft} className="me-2" /> Back to homepage
            </Card.Link> */}
          </p>
          <Row className="justify-content-center form-bg-image" style={{ backgroundImage: `url(${BgImage})` }}>
            <Col xs={12} className="d-flex align-items-center justify-content-center">
              <div className="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <div className="text-center text-md-center mb-4 mt-md-0">
                  <h3 className="mb-0">Sign in to our platform</h3>
                </div>
                <Form className="mt-4" method="POST" >
                  <Form.Group id="email" className="mb-4">
                    <Form.Label>Your Email</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faEnvelope} />
                      </InputGroup.Text>
                      <Form.Control type="text" name="email" value={email}
                      onChange={handleInputeChange}
                        onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group>
                    <Form.Group id="password" className="mb-4">
                      <Form.Label>Your Password</Form.Label>
                      <InputGroup>
                        <InputGroup.Text>
                          <FontAwesomeIcon icon={faUnlockAlt} />
                        </InputGroup.Text>
                        <Form.Control type="password" name="password" value={password}
                        onChange={handleInputeChange}
                          onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                      </InputGroup>
                    </Form.Group>
                  </Form.Group>
                  {/* <Form.Group id="email" className="mb-4">
                    <Form.Label>Role</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faEnvelope} />
                      </InputGroup.Text>
                      <Form.Control type="text" name="work" value={work}
                      onChange={handleInputeChange}
       onChange={(e)=>setWork(e.target.value)} 
       placeholder="UserType" />
                    </InputGroup>
                  </Form.Group> */}
                  <Button variant="primary" type="submit" onClick={loginUser} className="w-100">
                    Sign in
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};
