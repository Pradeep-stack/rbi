import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen, faCartArrowDown, faChartPie, faHome, faChevronDown, faClipboard, faCommentDots, faFileAlt, faPlus, faRocket, faStore } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Button, Dropdown, Breadcrumb } from '@themesberg/react-bootstrap';
import { ChoosePhotoWidget, ProfileCardWidget } from "../../components/Widgets";
import { GeneralInfoForm } from "../../components/Forms";
// import Profile3 from "../assets/img/team/profile-picture-3.jpg";
export default () => {
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
          <div className="d-block mb-4 mb-md-0">
            <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
              <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
              <Breadcrumb.Item>Admin</Breadcrumb.Item>
              <Breadcrumb.Item active>Add Users</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
        <div className="d-flex">
        </div>
      </div>

      <Row>
        <Col xs={12} xl={12}>
          {/* ################################Addd User Form Here ##################################*/}
          <GeneralInfoForm />
        </Col>
      </Row>
    </>
  );
};
