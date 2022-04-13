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



export default () => {

  const [posts, setPosts] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const getData = () => {
    
    axios.get('/formslist')
      .then((Response) => {
        const myData = Response.data;
        setPosts(myData)
      });
  };

  useEffect(() => getData(), []);

  // function userDeleted(id) {
  //   console.log(id)
  //   axios.delete(`http://localhost:6001/task/delete/${id}`)
  //     .then((resp) => {
  //       console.warn(resp);
  //       getData()
  //     })
  // }

 
  const usersPerPage = 8
  const pagesVisited = pageNumber * usersPerPage

  const displayUsers = posts.slice(pagesVisited, pagesVisited + usersPerPage)
    .map((post) => {
      return (
        <tr key={post._id} style={{ marginBottom: '20px' }}>
          <td>{post.id}</td>
          <td>{post.name}</td>
          <td>{post.title}</td>
          <td>{post.link}</td>
          
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
            <Breadcrumb.Item active>Task Form</Breadcrumb.Item>
          </Breadcrumb>
  
          <Dropdown>
          <Dropdown.Toggle as={Button} variant="secondary" className="text-dark me-2">
            <FontAwesomeIcon icon={faPlus} className="me-2" />
            <span>Forms</span>
          </Dropdown.Toggle>
          <Dropdown.Menu className="dashboard-dropdown dropdown-menu-left mt-2">
            <Dropdown.Item><Link to={Routes.PnbForm.path}>
              <FontAwesomeIcon icon={faFileAlt} className="me-2" /> PNB Form</Link>
            </Dropdown.Item>
            <Dropdown.Item><Link to={Routes.UbiForm.path}>
              <FontAwesomeIcon icon={faFileAlt} className="me-2" /> UBI Form</Link>
            </Dropdown.Item>
            <Dropdown.Item><Link to={Routes.CbForm.path}>
              <FontAwesomeIcon icon={faFileAlt} className="me-2" /> CB Form</Link>
            </Dropdown.Item>
            <Dropdown.Item><Link to={Routes.KarnatakaForm.path}>
              <FontAwesomeIcon icon={faFileAlt} className="me-2" /> Karnataka Form</Link>
            </Dropdown.Item>
            <Dropdown.Item><Link to={Routes.IdbiForm.path}>
              <FontAwesomeIcon icon={faFileAlt} className="me-2" /> IDBI Form</Link>
            </Dropdown.Item>

            <Dropdown.Divider />

            <Dropdown.Item>
              <FontAwesomeIcon icon={faFileAlt} className="text-danger me-2" /> SBI Form
              </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        </div>
        <div className="d-lg-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">

          <div className="btn-toolbar mb-2 mb-md-0">
            
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
              <th># ID</th>
              <th>NAME</th>
              <th>TITLE</th>
              <th>LINK</th>
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
