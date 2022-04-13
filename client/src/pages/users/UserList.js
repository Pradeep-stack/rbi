import React from "react";
import { Routes } from "../../routes";
import { Link } from "react-router-dom";
import "../pagin.css"
import axios from "axios"
import UpdateUser from "./UpdateUser";
import { Table } from 'react-bootstrap';
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCog, faHome,faTrashAlt, faPen, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Form, Button, ButtonGroup, Breadcrumb, InputGroup, Dropdown } from '@themesberg/react-bootstrap';

import { TransactionsTable } from "../../components/Tables";

import { useSelector, useDispatch } from 'react-redux';
import { deleteUser, loadUsers} from '../../actions'

export default () => {

  // const [posts, setPosts] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  // const getData = () => {
  //   console.log("axios dataa");
  //   axios.get('http://localhost:6001/users')
  //     .then((Response) => {
  //       const myData = Response.data;
  //       setPosts(myData)
  //     });
  // };

  // useEffect(() => getData(), []);

  let dispatch = useDispatch();
  // let history = useHistory();
  const { users } = useSelector(state => state.data)
  
  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure vwant to delete user ?")) {
      dispatch(deleteUser(id))
    }
  }
  const usersPerPage = 8
  const pagesVisited = pageNumber * usersPerPage
  const displayUsers = users.slice(pagesVisited, pagesVisited + usersPerPage)
    .map((post) => {
      return (
        <tr key={post._id} style={{ marginBottom: '20px' }}>
          <td>{post._id}</td>
          <td>{post.name}</td>
          <td>{post.email}</td>
          <td>{post.phone}</td>
          <td>{post.work}</td>
          <td>  <Link onClick={()=>handleDelete(post._id)} > </Link>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to={`/user/${post._id}`}><FontAwesomeIcon icon={faPen} /></Link>
          </td>
        </tr>
      )
    })

  const pageCount = Math.ceil(users.length / usersPerPage);

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
            <Breadcrumb.Item active>User List</Breadcrumb.Item>
          </Breadcrumb>
          <h4>Users List</h4>
         
          <p className="mb-0">Here are the user list.</p>
        </div>
        <div className="d-lg-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">

          <div className="btn-toolbar mb-2 mb-md-0">
            <Link to={Routes.AddUser.path}>
              <Button variant="primary" size="sm">
                <FontAwesomeIcon icon={faPlus} className="me-2" /> Add New User
              </Button></Link>
          </div>
        </div>
      </div>
      <div className='container-md'>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Role</th>
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
