
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, } from 'react-router-dom';
import { Routes } from '../../routes';
import { faBoxOpen, faCartArrowDown, faChartPie, faHome, faChevronDown, faClipboard, faCommentDots, faFileAlt, faPlus, faRocket, faStore } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card, Button, Breadcrumb, Form, Dropdown, FormLabel } from '@themesberg/react-bootstrap';

import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'



export default () => {
  const history = useHistory();
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
  const postData = async (e) => {
    e.preventDefault();
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
            <Breadcrumb.Item>Union Bank Of India</Breadcrumb.Item>
            <Breadcrumb.Item active>Form</Breadcrumb.Item>

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

              <Dropdown.Divider />

              <Dropdown.Item>
                <FontAwesomeIcon icon={faFileAlt} className="text-danger me-2" /> SBI Form
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>

      <Row>
        <Col xs={12} xl={12}>
          {/* ################################Addd User Form Here ##################################*/}
          <Card border="light" className="bg-white shadow-sm mb-4">
            <Card.Body><div className="text-right">
              <h5 ><pre>REGISTERED CHARTERED VALUER REGISTRATION
              </pre>
                <pre>  NO. APPROVED BY MINISRTY OF FINANCE</pre>
                <pre> GOVT. OF INDIA, CBDT REG.NO-</pre></h5>
            </div>
              <div className="">
                <pre>To,</pre>
                <pre>Union Bank Of India</pre>
                <pre>Branch: Lucknow</pre>
              </div>
              <div className="text-center"><h5><pre>VALUATION REPORT IN RESPECT OF LAND AND BUILDING</pre></h5></div>
              <hr></hr>
              <Form method="POST" >
                <Row className="text-center"><Form.Label><h5>I- Introduction</h5></Form.Label></Row>
                <hr></hr>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>1- Name of Valuer</Form.Label>
                      <Form.Control required type="text" name="task_name" value={task.task_name}
                        onChange={handleInputes} placeholder="Name of Valuer" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="lastName">
                      <Form.Label>2- Date of inspection</Form.Label>
                      <Form.Control required type="date" name="form_id" value={task.form_id}
                        onChange={handleInputes} placeholder="date" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>Date Of Valuation</Form.Label>
                      <Form.Control required type="date" name="user_id" value={task.user_id}
                        onChange={handleInputes} placeholder="date of valuation" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>3- Purpose of Valuation</Form.Label>
                      <Form.Control required type="text" name="date" value={task.date}
                        onChange={handleInputes} placeholder=" Purpose of Valuation" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>4- Name of Property Owner/s <pre>
                        (Details of Share of each owner in case of joint & Co-ownership)</pre></Form.Label>
                      <Form.Control required type="text" name=""
                        onChange={handleInputes} placeholder="name of property owner" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>5- Name of bank/FI as applicable</Form.Label>
                      <Form.Control required type="text" name=""
                        onChange={handleInputes} placeholder=" Name of bank" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>6- Name of Devloper of the Property <pre>
                        (in case of developer built properties)</pre></Form.Label>
                      <Form.Control required type="text" name=""
                        onChange={handleInputes} placeholder="name of developer" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>7- Whether occupied by the owner/ tenant? <pre>
                        if occupied by tenant, since how long?</pre></Form.Label>
                      <Form.Control required type="text" name=""
                        onChange={handleInputes} placeholder=" occupied by" />
                    </Form.Group>
                  </Col>
                </Row>
                <hr></hr>
                <Row className="text-center"><Form.Label><h5>II- Physical Characteristics of the Assest</h5></Form.Label></Row>
                <hr></hr>
                <Row>
                  <Col md={12} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>1- Location of the property in the city Plot No./Survey No./Door No.,
                        T.S.No./ Village ward/ Taluka, Mandal/District
                      </Form.Label>
                      <Form.Control required type="text-area" name="user_id"
                        onChange={handleInputes} placeholder="address" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>2- Municipal Ward No.</Form.Label>
                      <Form.Control required type="number" name="date"
                        onChange={handleInputes} placeholder=" Ward no" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>3- City/ Town</Form.Label>
                      <Form.Control required type="text" name="date"
                        onChange={handleInputes} placeholder=" city" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>Residential Area/ Commercial Area/ Industrial Area</Form.Label>
                      <Form.Control required type="text" name="date"
                        onChange={handleInputes} placeholder=" Area Type" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>4- Classification of the area: <pre>High/ Middle/ Poor
                        Metro/ Urban/ Semi-urban/Rural</pre></Form.Label>
                      <Form.Control required type="text" name="date"
                        onChange={handleInputes} placeholder=" level of area" />
                    </Form.Group>

                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>5- Coming under Corporation limit/Village/ Panchayat/Municipality</Form.Label>
                      <Form.Control required type="text" name="date"
                        onChange={handleInputes} placeholder=" coming under" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>6- Postal Adsress of the Property </Form.Label>
                      <Form.Control required type="text-area" name="date" value={task.paddress}
                        onChange={handleInputes} placeholder=" potal address" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>7- Latitude, Longitude and Coordinates of the site</Form.Label>
                      <Form.Control required type="text" name="date" value={task.latitude}
                        onChange={handleInputes} placeholder=" dicreibe here" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>8- Area of the plot/ land (supported by A PLAN) </Form.Label>
                      <Form.Control required type="text" name="date" value={task.area}
                        onChange={handleInputes} placeholder=" area" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>9- Layout plan of the area in which the property is located</Form.Label>
                      <Form.Control required type="text" name="date" value={task.laypout}
                        onChange={handleInputes} placeholder=" layout plan" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>10- Development of surrounding areas </Form.Label>
                      <Form.Control required type="text" name="date" value={task.devloper}
                        onChange={handleInputes} placeholder=" area" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>11- Details of roads abutting the property</Form.Label>
                      <Form.Control required type="text" name="date" value={task.dteails}
                        onChange={handleInputes} placeholder=" roads" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>12- Whether covered under any state/central Govt.
                        enactment (e.g. Urban land Ceiling Act) or notified under
                        agency area/scheduled area/cantonment area
                      </Form.Label>
                      <Form.Control required type="text" name="date" value={task.whether}
                        onChange={handleInputes} placeholder=" write here" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>13- In case it is an agricultural land, any conversion to house
                        site plots is contemplated</Form.Label>
                      <Form.Control required type="text" name="date" value={task.case}
                        onChange={handleInputes} placeholder=" write here" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>14- Boundaries of the property
                      </Form.Label>
                      <Form.Control required type="text" name="date" value={task.boundries}
                        onChange={handleInputes} placeholder=" write here" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>15- In case it is an agricultural land, any conversion to house
                        site plots is contemplated</Form.Label>
                      <Form.Control required type="text" name="date" value={task.land}
                        onChange={handleInputes} placeholder=" write here" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>16- Survey no. if any
                      </Form.Label>
                      <Form.Control required type="text" name="date" value={task.aaa}
                        onChange={handleInputes} placeholder=" write here" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>17- Type of Building (Residential/Commercial/Industrial)</Form.Label>
                      <Form.Control required type="text" name="date" value={task.sd}
                        onChange={handleInputes} placeholder=" type of Building" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>18- Details of the building/buildings and other
                        improvements in terms of area, height, no. of floors,
                        plinth area floor wise, year of construction, year of
                        making alterations/additional constructions with details,
                        full details of specifications to be appended along with
                        building plans and elevations
                      </Form.Label>
                      <Form.Control required type="text-area" name="date" value={task.dsds}
                        onChange={handleInputes} placeholder=" write here" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>19- Plinth area, Carpet area and Saleable area to be
                        mentioned separately and clarified </Form.Label>
                      <Form.Control required type="text" name="date" value={task.dsfds}
                        onChange={handleInputes} placeholder=" write here" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>20- Any other aspect
                      </Form.Label>
                      <Form.Control required type="text" name="date" value={task.sas}
                        onChange={handleInputes} placeholder=" write here" />
                    </Form.Group>
                  </Col>
                </Row>
                <hr></hr>
                <Row className="text-center"><Form.Label><h5>III- Town Planning Parameters</h5></Form.Label></Row>
                <hr></hr>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>1-Master Plan provisions related to the property in terms
                        of land use </Form.Label>
                      <Form.Control required type="text" name="date" value={task.fbd}
                        onChange={handleInputes} placeholder=" write here" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>2-Date of issue and validity of layout of approved map/
                        plan
                      </Form.Label>
                      <Form.Control required type="text" name="date" value={task.dsaj}
                        onChange={handleInputes} placeholder=" write here" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>3-Approved map / plan issuing authority </Form.Label>
                      <Form.Control required type="text" name="date" value={task.nbhvs}
                        onChange={handleInputes} placeholder=" write here" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>4-Whether genuineness or authenticity of approved map /
                        plan is verified
                      </Form.Label>
                      <Form.Control required type="text" name="date" value={task.hud}
                        onChange={handleInputes} placeholder=" write here" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>5-Any other comments by our empanelled valuers on
                        authenticity of approved plan </Form.Label>
                      <Form.Control required type="text" name="date" value={task.hgd}
                        onChange={handleInputes} placeholder=" write here" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>6-Planning area/zone
                      </Form.Label>
                      <Form.Control required type="text" name="date" value={task.ddds}
                        onChange={handleInputes} placeholder=" write here" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>7-. Development Controls  </Form.Label>
                      <Form.Control required type="text" name="date" value={task.kjw}
                        onChange={handleInputes} placeholder=" write here" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>8-Zoning Regulations
                      </Form.Label>
                      <Form.Control required type="text" name="date" value={task.sajd}
                        onChange={handleInputes} placeholder=" write here" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>9-FAR/FSI permitted and consumed  </Form.Label>
                      <Form.Control required type="text" name="date" value={task.mksad}
                        onChange={handleInputes} placeholder=" write here" />
                    </Form.Group>
                  </Col>
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
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
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
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
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
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
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
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
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
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
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
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
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
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
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
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
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
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
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
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
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
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
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
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
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
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
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
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>2) Sewerage/ sanitation
                      </Form.Label>
                      <Form.Control required type="text" name="date" value={task.ingssfouncef}
                        onChange={handleInputes} placeholder=" write here" />
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
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


      </Row>
    </>
  );
};
