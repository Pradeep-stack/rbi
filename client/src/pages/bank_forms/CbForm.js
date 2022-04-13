import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Routes } from "../../routes";
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
import {
  Col,
  Row,
  Card,
  Button,
  Breadcrumb,
  Form,
  Dropdown,
  FormLabel,
} from "@themesberg/react-bootstrap";

import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import html2pdf from "html2pdf.js";
import Alerts from "../components/Alerts";
import { alphaNumerate } from "chartist";

export default () => {
  // const history = useHistory();
  //  const handlepdf = (e) => {
  //

  //    else{
  //     alert("Please Fill The All Fields");
  //    }
  const handlepdf = (e) => {
    e.preventDefault();
    let element = document.getElementById("form-data");
    var opt = {
      margin: 0,
      filename: "pnbform.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
    const frompdf = html2pdf(element, opt);
    localStorage.setItem("CBFORMS", frompdf);
  };

  // function formHandle(e) {
  //   e.preventDefauld()
  //   handlepdf()
  // }

  function userHandler(e) {
    let item = e.target.value.length;
    if (item < 2) {
      console.log("invlid");
    } else {
    }
  }

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
            <Breadcrumb.Item>CANARA BANK</Breadcrumb.Item>
            <Breadcrumb.Item active>Form</Breadcrumb.Item>
          </Breadcrumb>
         
        </div>
      </div>

      <Row>
        <Col xs={12} xl={12}>
          {/* ################################Addd User Form Here ##################################*/}
          <Card border="light" className="bg-white shadow-sm mb-4">
            <Card.Body>
              <div className="text-right">
                <h5>
                  <pre>REGISTERED CHARTERED VALUER REGISTRATION</pre>
                  <pre> NO. APPROVED BY MINISRTY OF FINANCE</pre>
                  <pre> GOVT. OF INDIA, CBDT REG.NO-</pre>
                </h5>
              </div>
              <div className="">
                <pre>To,</pre>
                <pre>Branch Manager</pre>
                <pre>Canara Bank</pre>
                <pre>Branch: </pre>
              </div>
              <div className="text-center">
                <h5>
                  <pre>PART A- BASIC DATA</pre>
                </h5>
              </div>
              <hr></hr>
              <Form method="POST" id="form-data">
                <Row className="text-center">
                  <Form.Label>
                    <h5>I- GENERAL</h5>
                  </Form.Label>
                </Row>
                <hr></hr>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>1- Purpose of valuation</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="purpose"
                        placeholder="Name of Valuer"
                        onChange={userHandler}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="lastName">
                      <Form.Label>2- a) Date of inspection </Form.Label>
                      <Form.Control
                        required
                        type="date"
                        name="idate"
                        placeholder="date"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>
                        b) Date on which the valuation is made
                      </Form.Label>
                      <Form.Control
                        required
                        type="date"
                        name="valuation_date"
                        placeholder="date of valuation"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>
                        3- . Name of the owner(s) and his / their address With
                        Phone no. (details of share of each Owner in case of
                        joint ownership)
                      </Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="owner_name"
                        placeholder=" Purpose of Valuation"
                        required="true"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>
                        4- List of documents produced for perusal
                        <pre>Legal Doc's</pre>
                      </Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="list_doc"
                        placeholder="(As per Photo Copy of Sale deed)
                        "
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>
                        5-Brief description of the property taken for valuation
                      </Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name=""
                        placeholder=" "
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>6-Scope of valuation </Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name=""
                        placeholder=" market Value "
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>
                        7- 7. If this report is to be used for any bank purpose,
                        state the name of the bank and branch, if known
                      </Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name=""
                        placeholder=" occupied by"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <hr></hr>
                <Row className="text-center">
                  <Form.Label>
                    <h5>II- DESCRIPTION OF THE PROPERTY</h5>
                  </Form.Label>
                </Row>
                <hr></hr>
                <Row>
                  <Col md={12} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>
                        1- Postal address of the property with Pin code
                      </Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        name="user_id"
                        placeholder="address"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>2- City / Town</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="city"
                        placeholder=" city"
                        required="required"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>Residential Area </Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="Area"
                        placeholder=" Area"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>Commercial Area </Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="Area"
                        placeholder=" Commercial"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>Industrial Area </Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="Area"
                        placeholder="Industrial"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>3- Classification of the area</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" Classification of the area"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>
                        4- Coming under Corporation Limit/Village
                        Panchayat/Municipality
                      </Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" level of area"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>
                        5- CWhether covered under any State/Central Govt.
                        enactments (e.g.Urban Land Ceiling Act) or notified
                        under agency area/scheduled area/ cantonment area
                      </Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" coming under"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>
                        6- In case it is an agricultural land, any conversion to
                        house site plots is contemplated
                      </Form.Label>
                      <Form.Control
                        required
                        as="textarea"
                        rows={3}
                        name="date"
                        placeholder=" potal address"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>
                        7- Location of the property Plot No. / Nagar S.F. No. /
                        T.S. No. / R.S. No. Village / Block Taluk / Ward /
                        District Municipality/Corporation
                      </Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" dicreibe here"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>8- Boundaries of the property </Form.Label>
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>As Per Deed </Form.Label>
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>As Per Site</Form.Label>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>East : </Form.Label>
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Control required type="text" name="date" />
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Control required type="text" name="date" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>West :</Form.Label>
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Control required type="text" name="date" />
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Control required type="text" name="date" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>North :</Form.Label>
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Control required type="text" name="date" />
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Control required type="text" name="date" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label className="text-center">South :</Form.Label>
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Control required type="text" name="date" />
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Control required type="text" name="date" />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>
                        9- Latitude, Longitude and coordinates of the Site
                      </Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" Latitude"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>
                        10- Property tax receipt referred Assessment number Tax
                        amount Receipt in the name of{" "}
                      </Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" property"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>
                        11- Electricity service connection consumer number In
                        the name of other details, if any
                      </Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" roads"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>
                        12- Property is presently occupied by
                      </Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" write here"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>
                        13- If tenanted fully, What is the gross monthly rent?
                      </Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" write here"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>
                        14- If occupied by both By assuming the entire building
                        is let out, (i) What is the probable monthly rent? (ii)
                        What is the advance amount?
                      </Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" write here"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <hr></hr>
                <Row className="text-center">
                  <Form.Label>
                    <h5>III- PROCEDURE OF VALUATION</h5>
                  </Form.Label>
                </Row>
                <hr></hr>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>1-VALUATION DETAILS </Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" write here"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>
                        2-Discussed in part B, C, D, E & F
                      </Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" write here"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <hr></hr>
                <Row className="text-center">
                  <Form.Label>
                    <h5>PART B- LAND</h5>
                  </Form.Label>
                </Row>
                <hr></hr>
                <Row>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>1- DIMENSION OF SITE </Form.Label>
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>AS PER TITLE DEED(A)</Form.Label>
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>AS PER ACTUAL (B)</Form.Label>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>East : </Form.Label>
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Control required type="text" name="date" />
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Control required type="text" name="date" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>West : </Form.Label>
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Control required type="text" name="date" />
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Control required type="text" name="date" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>North : </Form.Label>
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Control required type="text" name="date" />
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Control required type="text" name="date" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>South : </Form.Label>
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Control required type="text" name="date" />
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Control required type="text" name="date" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>
                        2- Extent of site (least of 1A & 1B){" "}
                      </Form.Label>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>Size of the Plot </Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" write here"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>East & West</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" write here"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>North & South </Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" write here"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>Total Extent of the Plot</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" write here"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>3- Characteristics of the site </Form.Label>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>
                        What is the character of the locality?{" "}
                      </Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" write here"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>
                        What is the classification of the locality?
                      </Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" write here"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>
                        Development of surrounding areas Possibility of frequent
                        flooding/sub merging Feasibility to the Civic amenities
                        like school, hospital, bus stop, market etc.
                      </Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" write here"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>
                        Level of land with topographical conditions
                      </Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" write here"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>Shape of land</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" write here"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>
                        Type of use to which it can be put
                      </Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" write here"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>Any usage restriction </Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" write here"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>
                        Is plot in town planning approved layout?{" "}
                      </Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" write here"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>
                        Corner Plot or Intermittent Plot?{" "}
                      </Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" write here"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>
                        Type of road available at present Road facilities are
                        available?{" "}
                      </Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" write here"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>
                        Is it a land – locked land? Water Potentiality{" "}
                      </Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" write here"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>
                        What is the width of the Road? Width of road – is it
                        below 20ft or more than 20 ft.
                      </Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" write here"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>
                        Underground sewerage system Is power supply available at
                        the site?
                      </Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" write here"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>Advantages of the site</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" write here"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>
                        1-t is a Corner Property developed by MDA
                      </Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" write here"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>
                        2-. Construction of the building is good
                        <pre>
                          Special remarks, if any, like threat of acquisition of
                          land for public service purposes, road widening or
                          applicability of CRZ provisions etc. (Distance from
                          seacoast/tidal level must be incorporated) *Any
                          factors which affect the marketability of the land? *
                          Type of the land? * Accessibility
                        </pre>
                      </Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" write here"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>
                        4- Value on adopting GLR (Guideline Rate)
                        <pre>
                          i) Guideline rate as obtained from the Registrar’s
                          office
                        </pre>
                        <pre>ii) Value of land by adopting GLR</pre>
                      </Form.Label>
                      <Form.Control
                        required
                        as="textarea"
                        rows={3}
                        name="date"
                        placeholder=" write here"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>
                        5-alue by adopting PMR (Prevailing Market Rate)
                        Prevailing market rate (Along with details/referen of
                        atleast two latest deals/ transactions with respect to
                        adjacent properties in the areas) Unit rate adopted in
                        this valuation after considering the characteristics of
                        the subject plot Value of land by adopting PMR
                      </Form.Label>
                      <Form.Control
                        required
                        as="textarea"
                        rows={3}
                        name="date"
                        placeholder=" write here"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <hr></hr>
                <Row className="text-center">
                  <Form.Label>
                    <h5> PART C BUILDINGS</h5>
                  </Form.Label>
                </Row>
                <hr></hr>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>Type of Building</Form.Label>
                      <Row>
                        <Form.Label>1. Type of construction</Form.Label>
                      </Row>
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>
                        Double Storied Residential Building
                      </Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" write here"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>2-. Quality of construction</Form.Label>
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" write here"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>3- Appearance of Building</Form.Label>
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" write here"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>4- Maintenance of Building</Form.Label>
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" write here"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>5- Plinth Area</Form.Label>
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" write here"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  6. Number of floors and height of each floor including
                  basement, if any
                </Row>
                <Row>
                  <Col md={2} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>Floor</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" write here"
                      />
                      <br></br>
                      <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" write here"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={2} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>Year of construction</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" write here"
                      />
                      <br></br>
                      <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" write here"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={2} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>Roof</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" write here"
                      />
                      <br></br>
                      <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" write here"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={2} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>main Portion A Sqm</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" write here"
                      />
                      <br></br>
                      <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" write here"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={2} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>Cantilevered Portion(B) Sqm</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" write here"
                      />
                      <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" write here"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={2} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>Toatal(A+50% of B) Sqm</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" write here"
                      />
                      <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" write here"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={12} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>7-Drawing approval</Form.Label>
                      <br></br>
                      <Form.Label>
                        a- Date of issue and validity of layout of approved
                        map/plan:
                      </Form.Label>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={12} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>
                        b- Approved map/plan issuing authority:-M.D.A.
                      </Form.Label>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={12} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>
                        c-Whether genuineness or authentic of approved
                        map/planis verified? :-No
                      </Form.Label>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={12} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>
                        d-Any other comments by our empanelled valuers on
                        authentic of approved plan? :-No.:
                      </Form.Label>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={12} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>
                        e- (Discuss on the building approval, reference,
                        violations observed, consequences of violation etc.):-
                        No
                      </Form.Label>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={12} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>
                        8. Value of building is estimated by adopting suitable
                        unit plinth area rate depending upon the specifications
                        .Depreciation is calculated by straight-line method
                        assuming a salvage value of 0.0%.
                      </Form.Label>
                    </Form.Group>
                  </Col>
                </Row>
                <hr></hr>
                <Row className="text-center">
                  <Form.Label>
                    <h5>1. VALUATION OF BUILDING</h5>
                  </Form.Label>
                </Row>
                <hr></hr>
                <Row>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>
                        <h5>DESCRIPTION </h5>
                      </Form.Label>
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>
                        <h5>GROUND FLOOR </h5>
                      </Form.Label>
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>
                        <h5>FIRST FLOOR</h5>
                      </Form.Label>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>
                        1- Specification
                        <pre>Floor finish Superstructure Roof</pre>
                        <pre>Doors Windows Weathering course</pre>
                      </Form.Label>
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Control
                        required
                        as="textarea"
                        rows={3}
                        name="date"
                        placeholder=" write here"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Control
                        required
                        as="textarea"
                        rows={3}
                        name="date"
                        placeholder=" write here"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>2- Plinth area</Form.Label>
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" write here"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" write here"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>
                        Year of construction{" "}
                        <pre>(as reported /as observed /as per the deed)</pre>
                      </Form.Label>
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" write here"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" write here"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>Age of the building</Form.Label>
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" write here"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" write here"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>
                        If the age is not exactly known, further life expected
                      </Form.Label>
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" write here"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" write here"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>
                        Total life of the building estimated
                      </Form.Label>
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" write here"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" write here"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>Depreciation percentage</Form.Label>
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" write here"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" write here"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>
                        Replacement rate of construction with the<br></br>
                        existing conditions and specifications
                      </Form.Label>
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" write here"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" write here"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>Replacement Value</Form.Label>
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" write here"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" write here"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>
                        Depreciation Value at the rate of ………%
                      </Form.Label>
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" write here"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" write here"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>Present value of the building</Form.Label>
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" write here"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" write here"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>
                        Total value of the building (GF+ FF +other floors if any
                      </Form.Label>
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" write here"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" write here"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <hr></hr>
                <Row className="text-center">
                  <Form.Label>
                    <h5>VII-Functional and Utilitarian aspects</h5>
                  </Form.Label>
                </Row>
                <hr></hr>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Label>
                      Description of the functionality and utility of the assets
                      in terms of:
                    </Form.Label>
                    <Form.Group id="firstName">
                      <Form.Label>1-Space allocation</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" write here"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>2-Storage spaces</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" write here"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>
                        3-Utility of spaces provided within the building
                      </Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" write here"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>4-Any other aspect</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" write here"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <hr></hr>
                <Row className="text-center">
                  <Form.Label>
                    <h5>VIII-Infrastructure Availability </h5>
                  </Form.Label>
                </Row>
                <hr></hr>
                <Row>
                  <Form.Label>
                    a) Description of aqua infrastructure availability in terms
                    of
                  </Form.Label>
                </Row>
                <Row>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>1) Water supply</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" write here"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>2) Sewerage/ sanitation</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" write here"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>3) Storm Water Drainage</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" write here"
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Form>
              <Row>
                <Col md={6} className="mt-5 text-right">
                  <Button variant="primary" onClick={handlepdf()} type="submit">
                    Submit
                  </Button>
                </Col>
<<<<<<< HEAD
                <Col md={6} className="mt-5 text-left">
                  <Button variant="primary" type="submit">
                    Preview
                  </Button>
                </Col>
=======
               
>>>>>>> c0ed760 (make it)
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};
