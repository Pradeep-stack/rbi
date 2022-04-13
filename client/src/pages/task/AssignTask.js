import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxOpen,
  faCartArrowDown,
  faChartPie,
  faHome,
  faChevronDown,
  faClipboard,
  faCommentDots,
  faFileAlt,
  faPlus,
  faRocket,
  faStore,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useEffect } from "react";
import {
  Col,
  Row,
  Card,
  Button,
  Breadcrumb,
  Form,
  Dropdown,
} from "@themesberg/react-bootstrap";

import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import formData from "../bank_forms/index";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser, loadUsers } from "../../actions";
export default () => {
  const [posts, setPosts] = useState([]);
  const [forms, setForms] = useState([]);
  const history = useHistory();
  const [task, setTask] = useState({
    task_name: "",
    form_id: "",
    user_id: "",
    task_date: "",
  });
  let name, value;
  const handleInputes = (e) => {
    // console.log(e);
    name = e.target.name;
    value = e.target.value;
    setTask({ ...task, [name]: value });
  };
  const postData = async (e) => {
    e.preventDefault();
    const { task_name, form_id, user_id, task_date } = task;

    const res = await fetch("/assigntask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        task_name,
        form_id,
        user_id,
        task_date,
      }),
    });
    const data = await res.json();

    if (res.status === 422 || !data) {
      window.alert(" Assign error");
    } else {
      console.log("Assign successfull");
      history.push("/tasklist");
    }
  };
  const getData = () => {
    axios.get("/usersdata").then((Response) => {
      const userData = Response.data;
      setPosts(userData);
    });
  };
  useEffect(() => getData(), []);

  const getForm = () => {
    axios.get("/formslist").then((Response) => {
      const formData = Response.data;
      setForms(formData);
      console.log("formmm   lossbdas", formData);
    });
  };
  useEffect(() => getForm(), []);

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-md-0">
          <Breadcrumb
            className="d-none d-md-inline-block"
            listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}
          >
            <Breadcrumb.Item>
              <FontAwesomeIcon icon={faHome} />
            </Breadcrumb.Item>
            <Breadcrumb.Item>Admin</Breadcrumb.Item>
            <Breadcrumb.Item active>Assign Task</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>

      <Row>
        <Col xs={12} xl={8}>
          {/* ################################Addd User Form Here ##################################*/}
          <Card border="light" className="bg-white shadow-sm mb-4">
            <Card.Body>
              <h5 className="mb-4">Assign Task</h5>
              <Form method="POST">
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>Task Name</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="task_name"
                        value={task.task_name}
                        onChange={handleInputes}
                        placeholder="Task name"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="lastName">
                      <Form.Label>Task Form</Form.Label>
                      <Form.Select
                        name="form_id"
                        value={task.form_id}
                        onChange={handleInputes}
                      >
                         <option>Select Here</option>
                        {forms.map((form) => {
                          return (
                            <option key={form} value={form.id}>
                              {form.name}
                            </option>
                          );
                        })}
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>User Name </Form.Label>
                      <Form.Select
                        name="user_id"
                        value={task.user_id}
                        onChange={handleInputes}
                      >
                        <option>Select Here</option>
                        {posts.map((data) => {
                          return (
                            
                            <option key={data} value={data._id}>
                             
                              {data.name}
                            </option>
                          );
                        })}
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>Assign Date</Form.Label>
                      <Form.Control
                        required
                        type="date"
                        name="task_date"
                        value={task.task_date}
                        onChange={handleInputes}
                        placeholder="Assign Date"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <div className="mt-3">
                  <Button variant="primary" onClick={postData} type="submit">
                    AssignTask
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};
