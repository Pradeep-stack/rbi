import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Routes } from "../routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCog,
  faEnvelopeOpen,
  faSearch,
  faSignOutAlt,
  faUserShield,
} from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import {
  Row,
  Col,
  Nav,
  Form,
  Image,
  Navbar,
  Dropdown,
  Container,
  ListGroup,
  InputGroup,
} from "@themesberg/react-bootstrap";
import { useHistory } from "react-router";
import NOTIFICATIONS_DATA from "../data/notifications";
import Profile3 from "../assets/img/team/profile-picture-3.jpg";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser, userSlice } from "../reducers/loginSlice";

export default (props) => {
  const [notifications, setNotifications] = useState(NOTIFICATIONS_DATA);
  const areNotificationsRead = notifications.reduce(
    (acc, notif) => acc && notif.read,
    true
  );

  const markNotificationsAsRead = () => {
    setTimeout(() => {
      setNotifications(notifications.map((n) => ({ ...n, read: true })));
    }, 300);
  };

  const Notification = (props) => {
    const { link, sender, image, time, message, read = false } = props;
    const readClassName = read ? "" : "text-danger";

    return (
      <ListGroup.Item action href={link} className="border-bottom border-light">
        <Row className="align-items-center">
          <Col className="col-auto">
            <Image
              src={image}
              className="user-avatar lg-avatar rounded-circle"
            />
          </Col>
          <Col className="ps-0 ms--2">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h4 className="h6 mb-0 text-small">{sender}</h4>
              </div>
              <div className="text-end">
                <small className={readClassName}>{time}</small>
              </div>
            </div>
            <p className="font-small mt-1 mb-0">{message}</p>
          </Col>
        </Row>
      </ListGroup.Item>
    );
  };

  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const hLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };
  let userData = localStorage.getItem("myData");
  const history = useHistory();
  function logoutU() {
    localStorage.clear();
    history.push("/");
  }

  return (
    <Navbar variant="dark" expanded className="ps-0 pe-2 pb-0">
      <Container fluid className="px-0">
        <div className="d-flex justify-content-between w-100">
          <div className="d-flex align-items-center"></div>
          <Nav className="align-items-center">
            <Dropdown as={Nav.Item}>
              <Dropdown.Toggle as={Nav.Link} className="pt-1 px-0">
                <div className="media d-flex align-items-center">
                  {/* <Image src={Profile3} className="user-avatar md-avatar rounded-circle" /> */}
                  <div className="media-body ms-2 text-dark align-items-center d-none d-lg-block">
                    <span className="mb-0 font-xl fw-bold">
                      {userData && JSON.parse(userData).name}
                    </span>
                  </div>
                </div>
              </Dropdown.Toggle>
              <Dropdown.Menu className="user-dropdown dropdown-menu-right mt-2">
                <Dropdown.Item className="fw-bold">
                  <FontAwesomeIcon icon={faUserCircle} className="me-2" /> _
                </Dropdown.Item>

                <Dropdown.Divider />

                <Dropdown.Item className="fw-bold">
                  {/* <FontAwesomeIcon icon={faSignOutAlt}  className="text-danger me-2" />
                   Logout */}
                  <Button
                    as={Link}
                    variant="secondary"
                    size="xs"
                    to={Routes.Logout.path}
                    onClick={logoutU}
                    className="text-dark"
                  >
                    <FontAwesomeIcon icon={faSignOutAlt} className="me-2" />{" "}
                    Sign Out
                  </Button>
                  {/* <Button to="/settings"><FontAwesomeIcon icon={faSignOutAlt} className="me-1" /> Logout</Button> */}
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
};
