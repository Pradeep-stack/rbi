import React from "react";
import { Routes } from "../../routes";
import { Link } from "react-router-dom";
import "../pagin.css"
import axios from "axios"
import { Table } from 'react-bootstrap';
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCog, faHome, faPlus,faPen,faTrashAlt,faFileAlt, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Form, Button, ButtonGroup, Breadcrumb, InputGroup, Dropdown } from '@themesberg/react-bootstrap';
import { TransactionsTable } from "../../components/Tables";
export default () => {

  const [posts, setPosts] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const getData = () => {
    axios.get('/tasklist')
      .then((Response) => {
        const myData = Response.data;
        setPosts(myData)
      });
  }; 
  useEffect(() => getData(), []);
  
  function userDeleted(id) {
    console.log(id)
    axios.delete(`/task/delete/${id}`)
      .then((resp) => {
        console.warn(resp);
        getData()
      })
  }
  const usersPerPage = 4
  const pagesVisited = pageNumber * usersPerPage

  const displayUsers = posts.slice(pagesVisited, pagesVisited + usersPerPage)
    .map((post) => {
      return (
        <tr key={post._id} style={{ marginBottom: '20px' }}>
          <td>{post.task_name}</td>
          <td>{post.form_id}</td>
          <td>{post.user_id}</td>
          <td>{post.task_date}</td>
          <td><Link onClick={()=>userDeleted(post._id)} > <FontAwesomeIcon icon={faTrashAlt} /></Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to={`/task/${post._id}`}><FontAwesomeIcon icon={faPen} /></Link></td>
        </tr>
      )
    })
  const pageCount = Math.ceil(posts.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected)
  };
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-md-0">
          <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
            <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
            <Breadcrumb.Item>Admin</Breadcrumb.Item>
            <Breadcrumb.Item active>Task</Breadcrumb.Item>
          </Breadcrumb>
          <h4>Task List</h4>
          <p className="mb-0">Here are the task list</p>
        </div>
        <div className="d-lg-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">

          <div className="btn-toolbar mb-2 mb-md-0">
            <Link to={Routes.AddTask.path}>
              <Button variant="primary" size="sm">
                <FontAwesomeIcon icon={faPlus} className="me-2" />Task Form
              </Button></Link>
              <div className="ms-3"> <Link to={Routes.AssignTask.path}>
              <Button variant="primary" size="sm">
                <FontAwesomeIcon icon={faPlus} className="me-2" /> Assign Task
              </Button></Link></div>
          </div>
        </div>
      </div>
      <div className="table-settings mb-4">
        <Row className="justify-content-between align-items-center">
        </Row>
      </div>
      <div className='container-md'>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Task Name</th>
              <th>Form Id</th>
              <th>Assign To</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {displayUsers}
          </tbody>
        </Table>
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previusBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"} />
      </div>
      {/* <TransactionsTable /> */}
    </>
  );
};
