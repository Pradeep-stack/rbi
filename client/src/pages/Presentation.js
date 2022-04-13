import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faExternalLinkAlt,
  faTimesCircle,
  faCheckCircle,
  faCalendarAlt,
  faCodeBranch,
  faShoppingCart,
  faFolder,
  faMapMarkedAlt,
  faPager,
  faFileCode,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import {
  faBootstrap,
  faGithub,
  faJs,
  faReact,
  faSass,
} from "@fortawesome/free-brands-svg-icons";
import {
  Col,
  Row,
  Card,
  Image,
  Button,
  Container,
  ListGroup,
  Tooltip,
  OverlayTrigger,
  Form,
  Navbar,
  Nav,
  Badge,
} from "@themesberg/react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Code from "../components/CodeEditor";
import GitHubButton from "react-github-btn";

import { Routes } from "../routes";
import ThemesbergLogoIcon from "../assets/img/themesberg.svg";
import ThemesbergLogo from "../assets/img/themesberg-logo.svg";
import MockupPresentation from "../assets/img/mockup-presentation.png";
import ReactHero from "../assets/img/technologies/react-hero-logo.svg";
import MapboxImg from "../assets/img/mockup-map-presentation.png";
import CalendarImg from "../assets/img/mockup-calendar-presentation.png";
import ReactMockupImg from "../assets/img/react-mockup.png";
import BS5IllustrationsImg from "../assets/img/illustrations/bs5-illustrations.svg";
import BS5Logo from "../assets/img/technologies/bootstrap-5-logo.svg";
import ReactLogo from "../assets/img/technologies/react-logo.svg";

import pages from "../data/pages";
import features from "../data/features";

export default () => {
  const history = useHistory();

  // for the redirect of login user
  useEffect(() => {
    if (localStorage.getItem("myData")) {
      history.push("/dashboard/overview");
    }
  }, []);
  const PagePreview = (props) => {
    const { name, image, link } = props;

    return (
      <Col xs={6} className="mb-5">
        <Card.Link
          as={Link}
          to={link}
          className="page-preview page-preview-lg scale-up-hover-2"
        >
          <Image
            src={image}
            className="shadow-lg rounded scale"
            alt="Dashboard page preview"
          />

          <div className="text-center show-on-hover">
            <h6 className="m-0 text-center text-white">
              {name}{" "}
              <FontAwesomeIcon icon={faExternalLinkAlt} className="ms-2" />
            </h6>
          </div>
        </Card.Link>
      </Col>
    );
  };

  const FolderItem = (props) => {
    const { name, icon, tooltip, iconColor } = props;
    const color = iconColor ? `text-${iconColor}` : "";

    return (
      <OverlayTrigger
        trigger={["hover", "focus"]}
        placement="left"
        overlay={<Tooltip>{tooltip}</Tooltip>}
      >
        <li
          data-toggle="tooltip"
          data-placement="left"
          title="Main folder that you will be working with"
        >
          <FontAwesomeIcon
            icon={icon ? icon : faFolder}
            className={`${color} me-2`}
          />{" "}
          {name}
        </li>
      </OverlayTrigger>
    );
  };

  return (
    <>
      <Navbar
        variant="dark"
        expand="lg"
        bg="dark"
        className="navbar-transparent navbar-theme-primary sticky-top"
      >
        <Container className="position-relative justify-content-between px-3">
          <Navbar.Brand
            as={HashLink}
            to="#home"
            className="me-lg-3 d-flex align-items-center"
          >
            <Image src={ReactHero} />
            <span className="ms-2 brand-text d-none d-md-inline">
              Volt React
            </span>
          </Navbar.Brand>

          <div className="d-flex align-items-center">
            <Navbar.Collapse id="navbar-default-primary">
              <Nav className="navbar-nav-hover align-items-lg-center">
                <Nav.Link as={HashLink} to="#home">
                  Home
                </Nav.Link>
                <Nav.Link as={HashLink} to="#about">
                  About
                </Nav.Link>
                <Nav.Link
                  as={HashLink}
                  to="#services"
                  className="d-sm-none d-xl-inline"
                >
                  Services
                </Nav.Link>
                <Nav.Link as={HashLink} to="#contact">
                  Contect
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <Button as={HashLink} to="/examples/sign-in" className="ms-3">
              <FontAwesomeIcon icon={faDownload} className="me-1" /> Login
            </Button>
          </div>
        </Container>
      </Navbar>
      <section
        className="section-header overflow-hidden pt-5 pt-lg-6 pb-9 pb-lg-12 bg-primary text-white"
        id="home"
      >
        <Container>
          <Row>
            <Col xs={12} className="text-center">
              <div className="react-big-icon d-none d-lg-block">
                <span className="fab fa-react"></span>
              </div>
              <h1 className="fw-bolder text-secondary">Volt React Dashboard</h1>
              <p className="text-muted fw-light mb-5 h5">
                Open source powered by React.js and Bootstrap 5
              </p>
              <div className="d-flex align-items-center justify-content-center">
                <Button
                  variant="secondary"
                  as={Link}
                  to={Routes.DashboardOverview.path}
                  className="text-dark me-3"
                >
                  Explore dashboard{" "}
                  <FontAwesomeIcon
                    icon={faExternalLinkAlt}
                    className="d-none d-sm-inline ms-1"
                  />
                </Button>
                <GitHubButton
                  className="mt-lg-2"
                  href=""
                  data-size="large"
                  data-show-count="true"
                  aria-label="Star themesberg/volt-react-dashboard on GitHub"
                >
                  Star
                </GitHubButton>
              </div>
              <div className="d-flex justify-content-center flex-column mb-6 mb-lg-5 mt-5">
                <div className="text-center">
                  <a href="" target="_blank"></a>
                </div>
              </div>
            </Col>
          </Row>
          <figure className="position-absolute bottom-0 left-0 w-100 d-none d-md-block mb-n2">
            <svg
              className="fill-soft"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 3000 185.4"
            >
              <path d="M3000,0v185.4H0V0c496.4,115.6,996.4,173.4,1500,173.4S2503.6,115.6,3000,0z" />
            </svg>
          </figure>
        </Container>
      </section>
      <div className="section pt-0">
        <Container className="mt-n10 mt-lg-n12 z-2">
          <Row className="justify-content-center">
            <Col xs={12}>
              <Image src={MockupPresentation} alt="Mockup presentation" />
            </Col>
          </Row>
        </Container>
      </div>

      <footer className="footer py-6 bg-dark text-white" id="contact">
        <Container>
          <Row className="justify-content-center  ">
            <Col xs={12} className="text-center">
              <h2 className="px-lg-5">Footer Section</h2>
              <p className="lead px-lg-8">This is the footer.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};
