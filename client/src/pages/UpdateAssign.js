
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen, faCartArrowDown, faChartPie, faHome, faChevronDown, faClipboard, faCommentDots, faFileAlt, faPlus, faRocket, faStore } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card, Button, Breadcrumb, Form, Dropdown } from '@themesberg/react-bootstrap';
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'



export default () => {
    const history = useHistory();
    const { id } = useParams();


    const [task, setTask] = useState({
        name: "", form_id: "", user_id: "", date: "",
    })

    let name, value;
    const handleInputes = (e) => {
        // console.log(e);
        name = e.target.name;
        value = e.target.value;
        setTask({ ...task, [name]: value });
    }

    const getData = () => {
        axios.get(`/task/${id}`)
            .then((Response) => {
                const myData = Response.data;
                setTask(myData)
            });
    };

    useEffect(() => getData(), []);

    const postData = async (e) => {
        e.preventDefault();
        const { task_name, form_id, user_id, date } = task;

        const res = await fetch(`/task/update/${id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                task_name, form_id, user_id, date,
            })
        });
        const data = await res.json();

        if (res.status === 422 || !data) {
            window.alert(" Assign error");

        } else {
            console.log("Assign successfull");
            history.push("/tasklist")

        }

    }

    return (
        <>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
                <div className="d-block mb-4 mb-md-0">
                    <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
                        <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
                        <Breadcrumb.Item>UPDATE</Breadcrumb.Item>
                        <Breadcrumb.Item active>Assign Task</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>

            <Row>
                <Col xs={12} xl={8}>
                    {/* ################################Addd User Form Here ##################################*/}
                    <Card border="light" className="bg-white shadow-sm mb-4">
                        <Card.Body>
                            <h5 className="mb-4">Update Assign</h5>
                            <Form method="POST" >
                                <Row>
                                    <Col md={6} className="mb-3">
                                        <Form.Group id="firstName">
                                            <Form.Label>Task Name</Form.Label>
                                            <Form.Control required type="text" name="task_name" value={task.task_name}
                                                onChange={handleInputes} placeholder="Task name" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6} className="mb-3">
                                        <Form.Group id="lastName">
                                            <Form.Label>Task Id</Form.Label>
                                            <Form.Control required type="text" name="form_id" value={task.form_id}
                                                onChange={handleInputes} placeholder="Form id" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6} className="mb-3">
                                        <Form.Group id="firstName">
                                            <Form.Label>User Id </Form.Label>
                                            <Form.Control required type="text" name="user_id" value={task.user_id}
                                                onChange={handleInputes} placeholder="User Id" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6} className="mb-3">
                                        <Form.Group id="firstName">
                                            <Form.Label>Task Name</Form.Label>
                                            <Form.Control required type="date" name="date" value={task.date}
                                                onChange={handleInputes} placeholder="Assign Date" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <div className="mt-3">
                                    <Button variant="primary" onClick={postData} type="submit">Upadate Assign</Button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>

                </Col>
            </Row>
        </>
    );
};
