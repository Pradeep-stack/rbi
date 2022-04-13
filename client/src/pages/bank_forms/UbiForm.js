
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, } from 'react-router-dom';
import { Routes } from '../../routes';
import { faBoxOpen, faCartArrowDown, faChartPie, faHome, faChevronDown, faClipboard, faCommentDots, faFileAlt, faPlus, faRocket, faStore } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card, Button, Breadcrumb, Form, Dropdown, FormLabel } from '@themesberg/react-bootstrap';

import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'



export default () => {
  const history = useHistory();
<<<<<<< HEAD
  const [task, setTask] = useState({
    name: "", form_id: "", user_id: "", date: "",
  })
=======
  const [task, setTask] = useState({})
>>>>>>> c0ed760 (make it)

  let name, value;
  const handleInputes = (e) => {
    // console.log(e);
    name = e.target.name;
    value = e.target.value;
    setTask({ ...task, [name]: value });
  }
  const postData = async (e) => {
    e.preventDefault();
<<<<<<< HEAD
    const { task_name, form_id, user_id, date } = task;

    const res = await fetch("http://localhost:6001/assigntask", {
      method: "POST",
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
      window.alert("Asssign successfull");
=======
    if(!task){
      let element = document.getElementById("form-data");
      var opt = {
        margin: 0,
        filename: "pnbform.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
      };
     const frompdf= html2pdf(element, opt);
     console.log("save pdf",frompdf);
     localStorage.setItem("PNB", frompdf);
    } else {
      window.alert("plese fill the data");
>>>>>>> c0ed760 (make it)
      console.log("Assign successfull");
      history.push("/tasklist")

    }

  }

  return (
    <>
<<<<<<< HEAD
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
=======
    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
>>>>>>> c0ed760 (make it)
        <div className="d-block mb-4 mb-md-0">
          <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
            <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
            <Breadcrumb.Item>Union Bank Of India</Breadcrumb.Item>
            <Breadcrumb.Item active>Form</Breadcrumb.Item>

          </Breadcrumb>
<<<<<<< HEAD
        
=======
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

              <Dropdown.Divider />

              <Dropdown.Item>
                <FontAwesomeIcon icon={faFileAlt} className="text-danger me-2" /> SBI Form
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
>>>>>>> c0ed760 (make it)
        </div>
      </div>

      <Row>
        <Col xs={12} xl={12}>
          {/* ################################Addd User Form Here ##################################*/}
          <Card border="light" className="bg-white shadow-sm mb-4">
            <Card.Body><div className="text-right">
              <h5 ><pre>REGISTERED CHARTERED VALUER
              </pre>
                <pre>  REGISTRATION NO. CAT-I-F-4692</pre>
                <pre> APPROVED BY MINISTRY OF FINANCE</pre>
                <pre>GOVT.OF INDIA, CBDT,REG.NO.-5/50-2016</pre></h5>
            </div>
              <div className="">
                <pre>To,</pre>
                <pre>BRANCH MANAGER
                </pre>
                <pre>UNION BANK OF INDIA</pre>
                <pre>BRANCH: HARTHALA, MORADABAD</pre>

              </div>
              <div className="text-center"><h5><pre>VALUATION REPORT IN RESPECT OF LAND AND BUILDING</pre></h5></div>
              <hr></hr>
              <Form method="POST" >
                <Row className="row"><Form.Label><h5>I- Genral</h5></Form.Label></Row>
                <hr></hr>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>1- Purpose for which the valuation is made</Form.Label>
                      <Form.Control required type="text" name="task_name" value={task.task_name}
                        onChange={handleInputes} placeholder="To Determine the Fair Market Value of the
                        Property" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="lastName">
                      <Form.Label>2- a) Date of inspection</Form.Label>
                      <Form.Control required type="date" name="form_id" value={task.form_id}
                        onChange={handleInputes} placeholder="date" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>b) Date on which the valuation is made</Form.Label>
                      <Form.Control required type="date" name="user_id" value={task.user_id}
                        onChange={handleInputes} placeholder="date of valuation" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>Legal Doc’s</Form.Label>
                      <Form.Control required type="text" name="date" value={task.date}
                        onChange={handleInputes} placeholder=" (As per Photo Copy of Sale deed)
                        Vol. No. 11651, Sl. No. 6679,
                        Dated: 08/08/2018, Area-60.00Sqmt" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>4- Name of the owner(s) and his / their address (es)
                        With Phone no. (details of share of each Owner in
                        case of joint ownership) <pre>
                          (Details of Share of each owner in case of joint & Co-ownership)</pre></Form.Label>
                      <Form.Control required type="text" name=""
                        onChange={handleInputes} placeholder="Shri Rajesh Vishwakarma S/o Shri
                        Ramvriksha & Smt. Manju Vishwakarma
                        w/o Shri Rajesh Vishwakarma
                        Joint Ownership
                        " />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>5- Brief description of the property (including
                        Leasehold/freehold etc.)</Form.Label>
                      <Form.Control required type="text" name=""
                        onChange={handleInputes} placeholder=" Freehold" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>6- Location of property</Form.Label><p></p>
                      <Form.Label>a) Plot No. / Survey No.</Form.Label>
                      <Form.Control required type="text" name=""
                        onChange={handleInputes} placeholder="Ex. House No. -31" />
                      <Form.Label>b) Door No.</Form.Label>
                      <Form.Control required type="text" name=""
                        onChange={handleInputes} placeholder="Harthala Ethmali (Bhasera Nagar sarkari
                          Awas Samiti Ltd. Chandausi), Near Wilsonia
                          Degree College, Ramganga Vihar-IInd,
                          Kanth Road, Moradabad" />
                      <Form.Label>c) c) T. S. No. Village.</Form.Label>
                      <Form.Control required type="text" name=""
                        onChange={handleInputes} placeholder="Ex. House No. -31" />
                      <Form.Label>d) Ward / Taluka</Form.Label>
                      <Form.Control required type="text" name=""
                        onChange={handleInputes} placeholder="Ward No. -34" />
                      <Form.Label>e) Mandal / District</Form.Label>
                      <Form.Control required type="text" name=""
                        onChange={handleInputes} placeholder="Moradabad" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>7- Postal address of the property</Form.Label>
                      <Form.Control required type="text" name=""
                        onChange={handleInputes} placeholder="" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>8-  City / Town </Form.Label>
                      <Form.Control required type="text" name=""
                        onChange={handleInputes} placeholder="Moradabad" />

                      <Form.Label> Residential Area </Form.Label>
                      <Form.Control required type="text" name=""
                        onChange={handleInputes} placeholder="Residential" />
                      <Form.Label>Commercial Area </Form.Label>
                      <Form.Control required type="text" name=""
                        onChange={handleInputes} placeholder="NA" />
                      <Form.Label>Industrial Area </Form.Label>
                      <Form.Control required type="text" name=""
                        onChange={handleInputes} placeholder="NA" />




                      <Form.Group id="firstName">
                        <Form.Label>9- Classification of the area</Form.Label><br></br>
                        <Form.Label>i) High / Middle / Poor</Form.Label>
                        <Form.Control required type="text" name=""
                          onChange={handleInputes} placeholder="Middle" />
                        <Form.Label>ii) Urban / Semi Urban / Rural</Form.Label>
                        <Form.Control required type="text" name=""
                          onChange={handleInputes} placeholder="Urban" />
                      </Form.Group>





                      <Form.Group id="firstName">
                        <Form.Label>10- Coming under Corporation limit / Village Panchayat / Municipality</Form.Label>
                        <Form.Control required type="text" name=""
                          onChange={handleInputes} placeholder="Municipality" />

                      </Form.Group>
                    </Form.Group>
                  </Col>
                </Row>













                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>11- Whether covered under any State / Central Govt. enactments (e.g. Urban Land Ceiling Act) or notified under agency area /Scheduled area / cantonment area</Form.Label>
                      <Form.Control required type="text" name="task_name" value={task.task_name}
                        onChange={handleInputes} placeholder="NA" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>12- In case it is an agricultural land, any conversion to house site plots is contemplated</Form.Label>
                      <Form.Control required type="text" name="task_name" value={task.task_name}
                        onChange={handleInputes} placeholder="NA" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>13 Boundaries of the property </Form.Label>
                      <Form.Control required type="text" name="task_name" value={task.task_name}
                        onChange={handleInputes} placeholder="As Per Deed.../ As Per Site" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>14 Latitude, Longitude and coordinates of the Site </Form.Label>
                      <Form.Control required type="text" name="task_name" value={task.task_name}
                        onChange={handleInputes} placeholder="Latitude - 28.88215, Longitude- 78.774782" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>15 Extent of the site </Form.Label>
                      <Form.Control required type="text" name="task_name" value={task.task_name}
                        onChange={handleInputes} placeholder="60.00 Sqmt" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>16 Extent of the site considered for valuation (least of 14A & 14B) </Form.Label>
                      <Form.Control required type="text" name="task_name" value={task.task_name}
                        onChange={handleInputes} placeholder="60.00 Sqmt" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>17 Whether occupied by the owner / tenant? If
                        occupied by tenant, since how long? Rent received per month. </Form.Label>
                      <Form.Control required type="text" name="task_name" value={task.task_name}
                        onChange={handleInputes} placeholder="Owner Occupied" />
                    </Form.Group>
                  </Col>
                </Row>







                <hr></hr>
                <Row className="text-center"><Form.Label><h5>II.  CHARACTERISTICS OF THE SITE</h5></Form.Label></Row>
                <hr></hr>
                <Row>
                  <Col md={12} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>1- Classification of locality
                      </Form.Label>
                      <Form.Control required type="text-area" name="user_id"
                        onChange={handleInputes} placeholder="Good" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>2- Development of surrounding areas</Form.Label>
                      <Form.Control required type="number" name="date"
                        onChange={handleInputes} placeholder=" Good" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>3- Possibility of frequent flooding / sub-merging</Form.Label>
                      <Form.Control required type="text" name="date"
                        onChange={handleInputes} placeholder=" No" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>4- Feasibility to the civic amenities like school, Hospital, bus stop, market etc.</Form.Label>
                      <Form.Control required type="text" name="date"
                        onChange={handleInputes} placeholder=" Approx. 1.0 Km." />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>5.
                        Level of land with topographical conditions</Form.Label>
                      <Form.Control required type="text" name="date"
                        onChange={handleInputes} placeholder=" Plain" />
                    </Form.Group>

                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>  6.
                        Shape of land</Form.Label>
                      <Form.Control required type="text" name="date"
                        onChange={handleInputes} placeholder=" Rectengular" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>7.
                        Type of use to which it can be put </Form.Label>
                      <Form.Control required type="text-area" name="date" value={task.paddress}
                        onChange={handleInputes} placeholder=" Residential" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>8.
                        Any usage restriction</Form.Label>
                      <Form.Control required type="text" name="date" value={task.latitude}
                        onChange={handleInputes} placeholder="NA" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>9.
                        Is plot in town planning approved layout?</Form.Label>
                      <Form.Control required type="text" name="date" value={task.area}
                        onChange={handleInputes} placeholder="No" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>10
                        Corner plot or intermittent plot?</Form.Label>
                      <Form.Control required type="text" name="date" value={task.laypout}
                        onChange={handleInputes} placeholder=" Intermittent Plot" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>11
                        Road Facilities</Form.Label>
                      <Form.Control required type="text" name="date" value={task.devloper}
                        onChange={handleInputes} placeholder=" Good" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>12
                        Type of road available at present</Form.Label>
                      <Form.Control required type="text" name="date" value={task.dteails}
                        onChange={handleInputes} placeholder="CC Concrete Pavement Road" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>13
                        Width of road – is it below 20 ft. or more than 20 ft.
                      </Form.Label>
                      <Form.Control required type="text" name="date" value={task.whether}
                        onChange={handleInputes} placeholder=" Road is below 20Ft." />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>14
                        Is it land – locked land/</Form.Label>
                      <Form.Control required type="text" name="date" value={task.case}
                        onChange={handleInputes} placeholder="Land (Accessible)" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>15
                        Water potentiality
                      </Form.Label>
                      <Form.Control required type="text" name="date" value={task.boundries}
                        onChange={handleInputes} placeholder=" Yes" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>16
                        Underground sewerage system</Form.Label>
                      <Form.Control required type="text" name="date" value={task.land}
                        onChange={handleInputes} placeholder="No " />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>17
                        Is power supply available at the site?
                      </Form.Label>
                      <Form.Control required type="text" name="date" value={task.aaa}
                        onChange={handleInputes} placeholder="Yes" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>18 Advantages of the site</Form.Label>
                      <Form.Control required type="text-area" name="date" value={task.dsds}
                        onChange={handleInputes} placeholder=" 1- Property is situated near to wilsonia Degree College." />

                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>19
                        Special remarks, if any, like threat of acquisition of land for public service purposes, road widening or applicability of CRZ provisions etc. (Distance from sea-coast / tidal level must be incorporated)
                      </Form.Label>
                      <Form.Control required type="text-area" name="date" value={task.dsds}
                        onChange={handleInputes} placeholder=" NA" />
                      <Form.Label>1- NA</Form.Label>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label><h2>Part- A (Valuation of land) </h2></Form.Label>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>1.
                        Size of plot</Form.Label>
                      <Form.Control required type="text" name="date" value={task.dsfds}
                        onChange={handleInputes} placeholder=" 60.00 Sqmt" />
                    </Form.Group>
                  </Col>
                  <Row>
                    <Col md={6} className="mb-3">
                      <Form.Group id="firstName">
                        <Form.Label>East & West
                        </Form.Label>
                        <Form.Control required type="text" name="date" value={task.sas}
                          onChange={handleInputes} placeholder=" 12.00M" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>North & South
                      </Form.Label>
                      <Form.Control required type="text" name="date" value={task.sas}
                        onChange={handleInputes} placeholder=" 5.00M" />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>2. Total extent of the plot</Form.Label>
                      <Form.Control required type="text" name="date" value={task.sas}
                        onChange={handleInputes} placeholder=" 60.00 Sqmt" />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>3.
                        Prevailing market rate (Along with details /reference of atleast two latest deals /transactions with respect to adjacent properties in the areas)</Form.Label>
                      <Form.Control required type="text" name="date" value={task.sas}
                        onChange={handleInputes} placeholder="38,000.00 per Sq.mt to 45,000.00 per Sq.mt" />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>4.
                        Guideline rate obtained from the Registrar’s Office (an evidence thereof to be enclosed)</Form.Label>
                      <Form.Control required type="text" name="date" value={task.sas}
                        onChange={handleInputes} placeholder="28,000.00 per Sqmt" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>5.
                        Assessed / adopted rate of valuation</Form.Label>
                      <Form.Control required type="text" name="date" value={task.sas}
                        onChange={handleInputes} placeholder="40,000.00 per Sq.mt" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>6.
                        Estimated value of land</Form.Label>
                      <Form.Control required type="text" name="date" value={task.sas}
                        onChange={handleInputes} placeholder="24,00,000.00" />
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="text-center"><Form.Label><h5>Part- B (Valuation of Building)</h5></Form.Label></Row>
                <hr></hr>
                <Row>
                <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>1. Technical details of the building</Form.Label>  
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                     
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                    
                      <Form.Label><pre>    a) Type of building (Residential /Commercial / Industrial) </pre> </Form.Label>
                        
                      <Form.Control required type="text" name="date" value={task.fbd}
                        onChange={handleInputes} placeholder="Double Storied Residential Building" />
                    </Form.Group>
                  </Col>

                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                    <Form.Label><pre>    b)
Type of construction (Load bearing /RCC / Steel Framed) </pre> </Form.Label>
                        
                      <Form.Control required type="text" name="date" value={task.dsaj}
                        onChange={handleInputes} placeholder=" Load Bearing Wall Structure" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                    <Form.Label><pre>    c)
Year of construction
Future Age of Building </pre></Form.Label>
                      <Form.Control required type="text" name="date" value={task.nbhvs}
                        onChange={handleInputes} placeholder=" Around 2016
                        65 years" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                    <Form.Label><pre>   d) Number of floors and height of each Floor including basement,
                      if any </pre></Form.Label>
                      <Form.Control required type="text" name="date" value={task.hud}
                        onChange={handleInputes} placeholder=" G.F. -3.2M, F.F. -3.2M," />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                    <Form.Label><pre>    e) Plinth area floor- wise</pre></Form.Label>
                      <Form.Control required type="text" name="date" value={task.hud}
                        onChange={handleInputes} placeholder="G.F.-60.00Sqmt
                        F.F.- 60.00Sqmt" />
                    </Form.Group>
                  </Col>
                  </Row>
                  <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                    <Form.Label><pre>   f) Condition of the building</pre></Form.Label>
                    </Form.Group>
                  </Col>
                  </Row>
                  <Row>
                    <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                    <Form.Label><pre>      i) Exterior- Excellent, Good, Normal, Poor</pre></Form.Label>
                      <Form.Control required type="text" name="date" value={task.hud}
                        onChange={handleInputes} placeholder="Good" />
                    </Form.Group>
                    </Col>
                
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label><pre>      ii) Inferior- Excellent, Good, Normal, Poor</pre></Form.Label>
                      <Form.Control required type="text" name="date" value={task.kjw}
                        onChange={handleInputes} placeholder=" Good" />
                    </Form.Group>
                  </Col>
                  <Row>
                    <Col md={6} className="mb-3">
                      <Form.Group id="firstName">
                        <Form.Label><pre>  g) Date of issue and validity of layout of approved map / plan</pre></Form.Label>
                        <Form.Control required type="text" name="date" value={task.sajd}
                          onChange={handleInputes} placeholder=" Area is less than 100Sqmt" />
                      </Form.Group>
                    </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label><pre>  h) Approved map / plan issuing authority</pre></Form.Label>
                      <Form.Control required type="text" name="date" value={task.mksad}
                        onChange={handleInputes} placeholder=" Area is less than 100Sqmt" />
                    </Form.Group>
                  </Col>
                  </Row>
                  <Row>
                    <Col md={6} className="mb-3">
                      <Form.Group id="firstName">
                        <Form.Label><pre>  i)
<<<<<<< HEAD
Whether genuineness or authenticity of
approved map / plan is verified</pre></Form.Label>
=======
Whether genuineness or authenticity of</pre><pre>
         approved map / plan is verified</pre></Form.Label>
>>>>>>> c0ed760 (make it)
                        <Form.Control required type="text" name="date" value={task.sajd}
                          onChange={handleInputes} placeholder=" No" />
                      </Form.Group>
                    </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label><pre>  j)
<<<<<<< HEAD
Any other comments by our empanelled</pre><pre>
valuers on authenticity of approved plan</pre></Form.Label>
=======
Any other comments by our empanelled</pre><pre>      valuers on authenticity of approved plan</pre></Form.Label>
>>>>>>> c0ed760 (make it)
                      <Form.Control required type="text" name="date" value={task.mksad}
                        onChange={handleInputes} placeholder=" NA" />
                    </Form.Group>
                  </Col>
                  </Row>
<<<<<<< HEAD

                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>10-Ground Coverage
                      </Form.Label>
                      <Form.Control required type="text" name="date" value={task.nkdaks}
                        onChange={handleInputes} placeholder=" write here" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>11-. Transferability of development rights if any Building
                        bye-law provisions as applicable to the property viz.
                        setbacks, height restrictions, etc.</Form.Label>
                      <Form.Control required type="text" name="date" value={task.nksa}
                        onChange={handleInputes} placeholder=" write here" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>12-Comment on surrounding land uses and adjoining
                        properties in terms of usage.
                      </Form.Label>
                      <Form.Control required type="text" name="date" value={task.kmask}
                        onChange={handleInputes} placeholder=" write here" />
=======
                  <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                    <Form.Label><h5>Specifications of construction (floor- wise) in respect of</h5></Form.Label>
                    </Form.Group>
                  </Col>
                  </Row>








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
                        <h5>Other FLOORS</h5>
                      </Form.Label>
>>>>>>> c0ed760 (make it)
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
<<<<<<< HEAD
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>13-Comment on unauthorized constructions if any</Form.Label>
                      <Form.Control required type="text" name="date" value={task.dsadc}
                        onChange={handleInputes} placeholder=" write here" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>14-Comment on Demolition construction if any .
                      </Form.Label>
                      <Form.Control required type="text" name="date" value={task.ewuq}
                        onChange={handleInputes} placeholder=" write here" />
=======
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>
                       1- Foundation
                      </Form.Label>
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                    <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder="Simple Spread Foundation"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                    <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" NA"
                      />
>>>>>>> c0ed760 (make it)
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
<<<<<<< HEAD
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>15-Comment on compounding/ regularization proceeding</Form.Label>
                      <Form.Control required type="text" name="date" value={task.dnd}
                        onChange={handleInputes} placeholder=" write here" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>16-Comment on whether OC has been issued or not
                      </Form.Label>
                      <Form.Control required type="text" name="date" value={task.md}
                        onChange={handleInputes} placeholder=" write here" />
=======
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>
                      2. Basement
                      </Form.Label>
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                    <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder="No"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                    <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" NA"
                      />
>>>>>>> c0ed760 (make it)
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
<<<<<<< HEAD
                  <Col md={12} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>17- Any other aspect </Form.Label>
                      <Form.Control required type="text" name="date" value={task.ljbhgd}
                        onChange={handleInputes} placeholder=" write here" />
                    </Form.Group>
                  </Col>
                </Row>
                <hr></hr>
                <Row className="text-center"><Form.Label><h5>IV- Legal Aspects</h5></Form.Label></Row>
                <hr></hr>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>1-Ownership documents</Form.Label>
                      <Form.Control required type="text" name="date" value={task.hgdas}
                        onChange={handleInputes} placeholder=" write here" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>2-Name of Owner/s<pre>
                        (in case of joint & Co-ownership,
                        Whether the shares are undivided or not?)</pre>
                      </Form.Label>
                      <Form.Control required type="text" name="date" value={task.yhsa}
                        onChange={handleInputes} placeholder=" write here" />
=======
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>
                      3. Superstructure
                      </Form.Label>
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                    <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder="Brick Work Construction"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                    <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" Brick Work Construction"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>
                      4.
Joinery / Doors & windows (please furnish Details about size of frames, shutters, glazing, Fitting etc. and specify the species of timber)
                      </Form.Label>
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                    <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder="Iron Gate"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                    <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" Wooden Door"
                      />
>>>>>>> c0ed760 (make it)
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
<<<<<<< HEAD
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>3-Comment on dispute/issue of landlord with tenant/
                        statutory body/any other agencies, if any in regard to
                        immovable property.
                      </Form.Label>
                      <Form.Control required type="text" name="date" value={task.ybsa}
                        onChange={handleInputes} placeholder=" write here" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>4-Comment on whether the IP is independently accessible
                      </Form.Label>
                      <Form.Control required type="text" name="date" value={task.wnbasd}
                        onChange={handleInputes} placeholder=" write here" />
=======
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>
                      5. RCC works
                      </Form.Label>
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                    <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder="Beam, Slab"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                    <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" Beam, Slab"
                      />
>>>>>>> c0ed760 (make it)
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
<<<<<<< HEAD
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>5-Title Verification.
                      </Form.Label>
                      <Form.Control required type="text" name="date" value={task.idvsa}
                        onChange={handleInputes} placeholder=" write here" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>6-Details of leases if any,
                      </Form.Label>
                      <Form.Control required type="text" name="date" value={task.osd}
                        onChange={handleInputes} placeholder=" write here" />
=======
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>
                      6. Plastering
                      </Form.Label>
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                    <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder="Yes"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                    <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" YES"
                      />
>>>>>>> c0ed760 (make it)
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
<<<<<<< HEAD
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>7-Ordinary status of freehold or leasehold including
                        restriction on transfer.
                      </Form.Label>
                      <Form.Control required type="text" name="date" value={task.lksad}
                        onChange={handleInputes} placeholder=" write here" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>8-Agreements of easements if any,
                      </Form.Label>
                      <Form.Control required type="text" name="date" value={task.pjhew}
                        onChange={handleInputes} placeholder=" write here" />
=======
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>
                      7.
Flooring, Skirting, dadoing
                      </Form.Label>
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                    <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder="Simple Marble Flooring"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                    <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" Simple Marble Flooring"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>
                      8.
Special finish as marble, granite, wooden Panelling, grills, etc.
                      </Form.Label>
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                    <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder="Simple Marble Flooring"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                    <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" Simple Marble Flooring"
                      />
>>>>>>> c0ed760 (make it)
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
<<<<<<< HEAD
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>9-Notification for acquisition if any,
                      </Form.Label>
                      <Form.Control required type="text" name="date" value={task.rww}
                        onChange={handleInputes} placeholder=" write here" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>10-Notification for road widening if any,
                      </Form.Label>
                      <Form.Control required type="text" name="date" value={task.urtgd}
                        onChange={handleInputes} placeholder=" write here" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>11-Possibility of frequent flooding/sub-merging
                      </Form.Label>
                      <Form.Control required type="text" name="date" value={task.hhsd}
                        onChange={handleInputes} placeholder=" write here" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>12-Special remarks if any like threat of acquisition of land
                        for public service purposes, road widening or
                        applicability of Crz provisions etc. (Distance from seacoast/tidal level must be incorporated)
                      </Form.Label>
                      <Form.Control required type="text" name="date" value={task.ffd}
                        onChange={handleInputes} placeholder=" write here" />
=======
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>
                      9.
Roofing including weather proof course
                      </Form.Label>
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                    <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder="YES"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                    <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" YES"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>
                      10.
Drainage
                      </Form.Label>
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                    <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder="YES"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                    <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" YES"
                      />
                    </Form.Group>
                  </Col>
                </Row>

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
                        <h5>Other FLOOR</h5>
                      </Form.Label>
>>>>>>> c0ed760 (make it)
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
<<<<<<< HEAD
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>13-Heritage restrictions if any, All legal documents, receipts
                        related to electricity, water tax, property tax and any
                        other building taxes to be verified and copies as
                        applicable to be enclosed with the report.
                      </Form.Label>
                      <Form.Control required type="text" name="date" value={task.tttt}
                        onChange={handleInputes} placeholder=" write here" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>14-Comment on transferability of the property ownership
                      </Form.Label>
                      <Form.Control required type="text" name="date" value={task.cdc}
                        onChange={handleInputes} placeholder=" write here" />
=======
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>
                      1. Compound wall
                      </Form.Label>
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                    <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder="No"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                    <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" NA"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>
                      Height
                      </Form.Label>
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                    <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder="NA"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                    <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" NA"
                      />
>>>>>>> c0ed760 (make it)
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
<<<<<<< HEAD
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>15-Comment on existing mortgages /charges /
                        encumbrances on the property if any
                      </Form.Label>
                      <Form.Control required type="text" name="date" value={task.kkk}
                        onChange={handleInputes} placeholder=" write here" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>16-. Comment on whether the owners of the property have
                        issued any guarantee (personal/ corporate) as the case
                        may be
                      </Form.Label>
                      <Form.Control required type="text" name="date" value={task.llll}
                        onChange={handleInputes} placeholder=" write here" />
=======
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>
                      Length
                      </Form.Label>
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                    <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder="NA"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                    <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" NA"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>
                      Type of construction
                      </Form.Label>
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                    <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder="NA"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                    <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" NA"
                      />
>>>>>>> c0ed760 (make it)
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
<<<<<<< HEAD
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>17-CBuilding plan sanction, illegal constructions if any done
                        without plan sanction/ violations
                      </Form.Label>
                      <Form.Control required type="text" name="date" value={task.kkasdas}
                        onChange={handleInputes} placeholder=" write here" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>18-Any other aspects
                      </Form.Label>
                      <Form.Control required type="text" name="date" value={task.lasjsa}
                        onChange={handleInputes} placeholder=" write here" />
                    </Form.Group>
                  </Col>
                </Row>
                <hr></hr>
                <Row className="text-center"><Form.Label><h5>V- Economic aspects</h5></Form.Label></Row>
                <hr></hr>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>1-Details of ground rent payable
                      </Form.Label>
                      <Form.Control required type="text" name="date" value={task.paybale}
                        onChange={handleInputes} placeholder=" write here" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>2-Details of monthly rent being received if any,
                      </Form.Label>
                      <Form.Control required type="text" name="date" value={task.monthrent}
                        onChange={handleInputes} placeholder=" write here" />
=======
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>
                      2. Electrical installation
                      </Form.Label>
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                    <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder="YES"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                    <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" YES"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>
                      Type of wiring
                      </Form.Label>
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                    <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder="Concealed"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                    <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" Concealed"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>
                      Class of fittings (superior / ordinary / poor)
                      </Form.Label>
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                    <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder="Ordinary"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                    <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" Ordinary"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>
                      Number of light points
                      </Form.Label>
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                    <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder="10 Points"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                    <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" 06 Points"
                      />
>>>>>>> c0ed760 (make it)
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
<<<<<<< HEAD
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>3-Taxes and other outgoings
                      </Form.Label>
                      <Form.Control required type="text" name="date" value={task.taxes}
                        onChange={handleInputes} placeholder=" write here" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>4-Property insurance
                      </Form.Label>
                      <Form.Control required type="text" name="date" value={task.inssounce}
                        onChange={handleInputes} placeholder=" write here" />
=======
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>
                      Fan Points
                      </Form.Label>
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                    <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder="03 Points"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                    <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" 01 Points"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>
                      Spare plug points
                      </Form.Label>
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                    <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder="NA"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                    <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" NA"
                      />
>>>>>>> c0ed760 (make it)
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
<<<<<<< HEAD
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>5-Monthly maintenance charges
                      </Form.Label>
                      <Form.Control required type="text" name="date" value={task.mcharge}
                        onChange={handleInputes} placeholder=" write here" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>6-Description of location of property in terms of the social
                        structure of the area, population, social stratification,
                        regional origin, age groups, economic levels, locations
                        of slums/ squatter settlements nearby, etc.
                      </Form.Label>
                      <Form.Control required type="text" name="date" value={task.inssouncef}
                        onChange={handleInputes} placeholder=" write here" />
                    </Form.Group>
                  </Col>
                </Row>
                <hr></hr>
                <Row className="text-center"><Form.Label><h5>VII-Functional and Utilitarian aspects</h5></Form.Label></Row>
                <hr></hr>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Label>Description of the functionality and utility of the assets
                      in terms of:
                    </Form.Label>
                    <Form.Group id="firstName">
                      <Form.Label>1-Space allocation

                      </Form.Label>
                      <Form.Control required type="text" name="date" value={task.mchdarge}
                        onChange={handleInputes} placeholder=" write here" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>2-Storage spaces
                      </Form.Label>
                      <Form.Control required type="text" name="date" value={task.inssfouncef}
                        onChange={handleInputes} placeholder=" write here" />
=======
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>
                      Any other item
                      </Form.Label>
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                    <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder="NA"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                    <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" NA"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>
                      3. Plumbing installation
                      </Form.Label>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>
                      <pre>    a)
No. of water closets and their type</pre>
                      </Form.Label>
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                    <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder="01 Nos"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                    <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" 01 Nos"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>
                      <pre>    b)
No. of wash basins</pre>
                      </Form.Label>
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                    <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder="01 Nos"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                    <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" 01 Nos"
                      />
>>>>>>> c0ed760 (make it)
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
<<<<<<< HEAD
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>3-Utility of spaces provided within the building
                      </Form.Label>
                      <Form.Control required type="text" name="date" value={task.mcshdarge}
                        onChange={handleInputes} placeholder=" write here" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>4-Any other aspect
                      </Form.Label>
                      <Form.Control required type="text" name="date" value={task.ingssfouncef}
                        onChange={handleInputes} placeholder=" write here" />
                    </Form.Group>
                  </Col>
                </Row>
                <hr></hr>
                <Row className="text-center"><Form.Label><h5>VIII-Infrastructure Availability </h5></Form.Label></Row>
                <hr></hr>
                <Row><Form.Label>a) Description of aqua infrastructure availability in
                  terms of</Form.Label></Row>
                <Row>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>1) Water supply
                      </Form.Label>
                      <Form.Control required type="text" name="date" value={task.a}
                        onChange={handleInputes} placeholder=" write here" />
=======
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>
                      <pre>    c) No. of urinals</pre>
                      </Form.Label>
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                    <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder="NA"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                    <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" NA"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>
                      <pre>    d) No. of bath tubs</pre>
                      </Form.Label>
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                    <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder="NA"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                    <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" NA"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>
                      <pre>    e) Water meter, taps, etc.</pre>
                      </Form.Label>
>>>>>>> c0ed760 (make it)
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
<<<<<<< HEAD
                      <Form.Label>2) Sewerage/ sanitation
                      </Form.Label>
                      <Form.Control required type="text" name="date" value={task.ingssfouncef}
                        onChange={handleInputes} placeholder=" write here" />
=======
                    <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder="NA"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                    <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" NA"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>
                      <pre>    f) Any other fixtures</pre>
                      </Form.Label>
>>>>>>> c0ed760 (make it)
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
<<<<<<< HEAD
                      <Form.Label>3) Storm Water Drainage
                      </Form.Label>
                      <Form.Control required type="text" name="date" value={task.ingssfouncef}
                        onChange={handleInputes} placeholder=" write here" />
                    </Form.Group>
                  </Col>
                </Row>








                <div className="mt-3">
                  <Button variant="primary" onClick={postData} type="submit">Submit</Button>
                </div>
              </Form>
            </Card.Body>
          </Card>

        </Col>


=======
                    <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder="NA"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                    <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" NA"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                <Col md={2} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label> Particulars Of items
                      </Form.Label>
                    </Form.Group>
                  </Col>
                  <Col md={1} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label> Plinth area
                      </Form.Label>
                    </Form.Group>
                  </Col>
                  <Col md={1} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label> Roof
height
                      </Form.Label>
                    </Form.Group>
                  </Col>
                  <Col md={1} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label> Age of
building
                      </Form.Label>
                    </Form.Group>
                  </Col>
                  <Col md={2} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label> Estimated
Replacement
Rate of
Construction
Rs.
                      </Form.Label>
                    </Form.Group>
                  </Col>
                  <Col md={2} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label> Replacement
Cost
Rs.
                      </Form.Label>
                    </Form.Group>
                  </Col>
                  <Col md={1} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label> Depreciation Rs.
                      </Form.Label>
                    </Form.Group>
                  </Col>
                  <Col md={1} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label> Net value After depreciations Rs.
                      </Form.Label>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                <Col md={2} className="mb-3">
                    <Form.Group id="firstName">
                    <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" Ground Floor"
                      />
                    </Form.Group>
                  </Col>
                <Col md={1} className="mb-3">
                    <Form.Group id="firstName">
                    <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" 60.00 Sqmt"
                      />
                    </Form.Group>
                  </Col>
                <Col md={1} className="mb-3">
                    <Form.Group id="firstName">
                    <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" 3.2M"
                      />
                    </Form.Group>
                  </Col>
                <Col md={1} className="mb-3">
                    <Form.Group id="firstName">
                    <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" 05 years"
                      />
                    </Form.Group>
                  </Col>
                <Col md={2} className="mb-3">
                    <Form.Group id="firstName">
                    <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" 12,500 per Sqmt"
                      />
                    </Form.Group>
                  </Col>
                <Col md={2} className="mb-3">
                    <Form.Group id="firstName">
                    <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" 07,50,000.00"
                      />
                    </Form.Group>
                  </Col>
                <Col md={1} className="mb-3">
                    <Form.Group id="firstName">
                    <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" 20,000.00"
                      />
                    </Form.Group>
                  </Col>
                <Col md={2} className="mb-3">
                    <Form.Group id="firstName">
                    <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" 07,30,000.00"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                <Col md={2} className="mb-3">
                    <Form.Group id="firstName">
                    <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" Ground Floor"
                      />
                    </Form.Group>
                  </Col>
                <Col md={1} className="mb-3">
                    <Form.Group id="firstName">
                    <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" 60.00 Sqmt"
                      />
                    </Form.Group>
                  </Col>
                <Col md={1} className="mb-3">
                    <Form.Group id="firstName">
                    <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" 3.2M"
                      />
                    </Form.Group>
                  </Col>
                <Col md={1} className="mb-3">
                    <Form.Group id="firstName">
                    <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" 05 years"
                      />
                    </Form.Group>
                  </Col>
                <Col md={2} className="mb-3">
                    <Form.Group id="firstName">
                    <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" 12,500 per Sqmt"
                      />
                    </Form.Group>
                  </Col>
                <Col md={2} className="mb-3">
                    <Form.Group id="firstName">
                    <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" 07,50,000.00"
                      />
                    </Form.Group>
                  </Col>
                <Col md={1} className="mb-3">
                    <Form.Group id="firstName">
                    <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" 20,000.00"
                      />
                    </Form.Group>
                  </Col>
                <Col md={2} className="mb-3">
                    <Form.Group id="firstName">
                    <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" 07,30,000.00"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                <Col md={2} className="mb-3">
                    <Form.Group id="firstName">
                    <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" Total "
                      />
                    </Form.Group>
                  </Col>
                <Col md={1} className="mb-3">
                    <Form.Group id="firstName">
                    <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" "
                      />
                    </Form.Group>
                  </Col>
                <Col md={1} className="mb-3">
                    <Form.Group id="firstName">
                    <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" "
                      />
                    </Form.Group>
                  </Col>
                <Col md={1} className="mb-3">
                    <Form.Group id="firstName">
                    <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" "
                      />
                    </Form.Group>
                  </Col>
                <Col md={2} className="mb-3">
                    <Form.Group id="firstName">
                    <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" "
                      />
                    </Form.Group>
                  </Col>
                <Col md={2} className="mb-3">
                    <Form.Group id="firstName">
                    <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" "
                      />
                    </Form.Group>
                  </Col>
                <Col md={1} className="mb-3">
                    <Form.Group id="firstName">
                    <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" "
                      />
                    </Form.Group>
                  </Col>
                <Col md={2} className="mb-3">
                    <Form.Group id="firstName">
                    <Form.Control
                        required
                        type="text"
                        name="date"
                        placeholder=" 14,20,000.00"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                </Row>
                
                {/* work start here  */}
                
                <div id="Para">
                  <p><h4>(Valuation: Here the approved valuer should discuss in detail his approach to valuation of property and indicate how the value has been arrived at, supported by necessary calculations. Also, such aspects as i) Saleability ii) Likely rental values in future in iii) Any income it may generate, may be discussed).</h4></p>
                  <p><h5>Photograph of owner/ representative with property in background to be enclosed.
                    Screen shot of longitude/latitude and co-ordinates of property using GPS/various Apps/Internet sites.
                    Compiled & drafted in accordance with data & documents either in physical form before as & information supplied. I have no direct or indirect interest in the property valued, the property details is based on the information as given by Shri Rajesh Vishwakarma as per regards the ownership etc. I am not responsible for the legality of colony, report subject to legal opinion report. I don’t own any liability etc.
                    As a result of my appraisal and analysis, it is my considered opinion that the present fair market value of the above property in the prevailing condition with aforesaid specifications in Rs. 38,20,000.00(Rupees Thirty Eight Lakh Twenty Thousand only). The book value (Realizable Value) of the above property is
                    Rs 32, 47,000.00 (Rupees Thirty Two Lakh Forty Seven Thousand only) and the distress value
                    Rs. 28, 65,000.00 (Rupees Twenty Eight Lakh Sixty Five Thousand only).</h5></p>
                </div>
                <Row >
                  <Col md={6} className="mt-5 text-right">
                    <Button variant="primary" onClick={postData} type="submit">Submit</Button>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Col>
>>>>>>> c0ed760 (make it)
      </Row>
    </>
  );
};
