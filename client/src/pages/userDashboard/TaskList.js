import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Routes } from "../../routes";
import "../pagin.css";
import { Table } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faCog,
  faHome,
  faPlus,
  faPen,
  faTrashAlt,
  faFileAlt,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { text } from "@fortawesome/fontawesome-svg-core";
const TaskList = () => {
  let userData = localStorage.getItem("myData");
  const [users, setUser] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const getData = () => {
    console.log("axios");
    axios.get("/tasklist").then((Response) => {
      const myData = Response.data;
      setUser(myData);
    });
  };
  useEffect(() => getData(), []);

  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;

  const displayTask = users
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((user) => {
      if (JSON.parse(userData)._id === user.user_id) {
        return (
          <tr key={user.user_id} style={{ marginBottom: "20px" }}>
            <td>{user.task_name}</td>
            <td>{user.form_id}</td>
            <td>{user.task_date}</td>
            <td>
            <Link  > </Link>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Link to={`/bankform/${user.form_id}`}><span style={{fontWeight: 'bold'}}>
               Open</span>
              </Link>
            </td>
          </tr>
        );
      } else return null;
    });

  const pageCount = Math.ceil(users.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

 

  return (
    <>
      <div className="container-md">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Task Name</th>
              <th>Form Id</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{displayTask}</tbody>
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
          activeClassName={"paginationActive"}
        />
      </div>
    </>
  );
};


export default TaskList;
