
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, } from 'react-router-dom';
import { Routes } from '../../routes';
import { faBoxOpen, faCartArrowDown, faChartPie, faHome, faChevronDown, faClipboard, faCommentDots, faFileAlt, faPlus, faRocket, faStore } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card, Button, Breadcrumb, Form, Dropdown, FormLabel } from '@themesberg/react-bootstrap';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import html2pdf from "html2pdf.js";
export default () => {
  const history = useHistory();
  const [task, setTask] = useState({})

  let name, value;
  const handleInputes = (e) => {
    // console.log(e);
    name = e.target.name;
    value = e.target.value;
    setTask({ ...task, [name]: value });
  }
<<<<<<< HEAD
=======
// heeeelll hhh

>>>>>>> c0ed760 (make it)

  const handlepdf = () => {
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
  };

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-md-0">
          <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
            <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
            <Breadcrumb.Item>PUNJAB NATIONAL BANK</Breadcrumb.Item>
            <Breadcrumb.Item active>Form</Breadcrumb.Item>

          </Breadcrumb>
        
        </div>
      </div>

      <Row>
        <Col xs={12} xl={12}>
          <Card border="light" className="bg-white shadow-sm mb-4">
            <Card.Body><div className="text-right">
              <h5 ><pre>REGISTERED CHARTERED VALUER REGISTRATION
              </pre>
                <pre>  NO. APPROVED BY MINISRTY OF FINANCE</pre>
                <pre> GOVT. OF INDIA, CBDT REG.NO-</pre></h5>
            </div>
              <div className="">
                <pre>To,</pre>
                <pre>Punjab National Bank</pre>
                <pre>Branch: Lucknow</pre>
              </div>
              <div className="text-center"><h5><pre>VALUATION REPORT IN RESPECT OF LAND AND BUILDING</pre></h5></div>
              <hr></hr>
              <Form method="POST" id="form-data">
                <Row className="text-center"><Form.Label><h5>I- Introduction</h5></Form.Label></Row>
                <hr></hr>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>1- Name of Valuer</Form.Label>
                      <Form.Control required type="text" name="task_name"
                    //    value={task.task_name}
                        placeholder="Name of Valuer" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="lastName">
                      <Form.Label>2- Date of inspection</Form.Label>
                      <Form.Control required type="date" name="form_id"
                    //    value={task.form_id}
                        placeholder="date" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>Date Of Valuation</Form.Label>
                      <Form.Control required type="date" name="user_id" 
                    //   value={task.user_id}
                        placeholder="date of valuation" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>3- Purpose of Valuation</Form.Label>
                      <Form.Control required type="text" name="date"
                    //    value={task.date}
                        placeholder=" Purpose of Valuation" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>4- Name of Property Owner/s <pre>
                        (Details of Share of each owner in case of joint & Co-ownership)</pre></Form.Label>
                      <Form.Control required type="text" name=""
                        placeholder="name of property owner" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>5- Name of bank/FI as applicable</Form.Label>
                      <Form.Control required type="text" name=""
                        placeholder=" Name of bank" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>6- Name of Devloper of the Property <pre>
                        (in case of developer built properties)</pre></Form.Label>
                      <Form.Control required type="text" name=""
                        placeholder="name of developer" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>7- Whether occupied by the owner/ tenant? <pre>
                        if occupied by tenant, since how long?</pre></Form.Label>
                      <Form.Control required type="text" name=""
                        placeholder=" occupied by" />
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
                        placeholder="address" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>2- Municipal Ward No.</Form.Label>
                      <Form.Control required type="number" name="date"
                        placeholder=" Ward no" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>3- City/ Town</Form.Label>
                      <Form.Control required type="text" name="date"
                        placeholder=" city" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>Residential Area/ Commercial Area/ Industrial Area</Form.Label>
                      <Form.Control required type="text" name="date"
                        placeholder=" Area Type" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>4- Classification of the area: <pre>High/ Middle/ Poor
                        Metro/ Urban/ Semi-urban/Rural</pre></Form.Label>
                      <Form.Control required type="text" name="date"
                        placeholder=" level of area" />
                    </Form.Group>

                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>5- Coming under Corporation limit/Village/ Panchayat/Municipality</Form.Label>
                      <Form.Control required type="text" name="date"
                        placeholder=" coming under" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>6- Postal Adsress of the Property </Form.Label>
                      <Form.Control required type="text-area" name="date" 
                    //   value={task.paddress}
                        placeholder=" potal address" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>7- Latitude, Longitude and Coordinates of the site</Form.Label>
                      <Form.Control required type="text" name="date" 
                    //   value={task.latitude}
                        placeholder=" dicreibe here" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>8- Area of the plot/ land (supported by A PLAN) </Form.Label>
                      <Form.Control required type="text" name="date"
                    //    value={task.area}
                        placeholder=" area" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>9- Layout plan of the area in which the property is located</Form.Label>
                      <Form.Control required type="text" name="date"
                    //    value={task.laypout}
                        placeholder=" layout plan" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>10- Development of surrounding areas </Form.Label>
                      <Form.Control required type="text" name="date" 
                    //   value={task.devloper}
                        placeholder=" area" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>11- Details of roads abutting the property</Form.Label>
                      <Form.Control required type="text" name="date"
                    //    value={task.dteails}
                        placeholder=" roads" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>12- Whether covered under any state/central Govt.
                        enactment (e.g. Urban land Ceiling Act) or notified under
                        agency area/scheduled area/cantonment area
                      </Form.Label>
                      <Form.Control required type="text" name="date" 
                    //   value={task.whether}
                        placeholder=" write here" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>13- In case it is an agricultural land, any conversion to house
                        site plots is contemplated</Form.Label>
                      <Form.Control required type="text" name="date" 
                    //   value={task.case}
                        placeholder=" write here" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>14- Boundaries of the property
                      </Form.Label>
                      <Form.Control required type="text" name="date"
                    //    value={task.boundries}
                        placeholder=" write here" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>15- In case it is an agricultural land, any conversion to house
                        site plots is contemplated</Form.Label>
                      <Form.Control required type="text" name="date"
                    //    value={task.land}
                        placeholder=" write here" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>16- Survey no. if any
                      </Form.Label>
                      <Form.Control required type="text" name="date"
                    //    value={task.aaa}
                        placeholder=" write here" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>17- Type of Building (Residential/Commercial/Industrial)</Form.Label>
                      <Form.Control required type="text" name="date" 
                    //   value={task.sd}
                        placeholder=" type of Building" />
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
                      <Form.Control required type="text-area" name="date"
                    //    value={task.dsds}
                        placeholder=" write here" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>19- Plinth area, Carpet area and Saleable area to be
                        mentioned separately and clarified </Form.Label>
                      <Form.Control required type="text" name="date"
                    //    value={task.dsfds}
                        placeholder=" write here" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>20- Any other aspect
                      </Form.Label>
                      <Form.Control required type="text" name="date" 
                    //   value={task.sas}
                        placeholder=" write here" />
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
                      <Form.Control required type="text" name="date" 
                    //   value={task.fbd}
                        placeholder=" write here" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>2-Date of issue and validity of layout of approved map/
                        plan
                      </Form.Label>
                      <Form.Control required type="text" name="date"
                    //    value={task.dsaj}
                        placeholder=" write here" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>3-Approved map / plan issuing authority </Form.Label>
                      <Form.Control required type="text" name="date" 
                    //   value={task.nbhvs}
                        placeholder=" write here" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>4-Whether genuineness or authenticity of approved map /
                        plan is verified
                      </Form.Label>
                      <Form.Control required type="text" name="date" 
                    //   value={task.hud}
                        placeholder=" write here" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>5-Any other comments by our empanelled valuers on
                        authenticity of approved plan </Form.Label>
                      <Form.Control required type="text" name="date"
                    //    value={task.hgd}
                        placeholder=" write here" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>6-Planning area/zone
                      </Form.Label>
                      <Form.Control required type="text" name="date"
                    //    value={task.ddds}
                        placeholder=" write here" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>7-. Development Controls  </Form.Label>
                      <Form.Control required type="text" name="date" 
                    //   value={task.kjw}
                        placeholder=" write here" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>8-Zoning Regulations
                      </Form.Label>
                      <Form.Control required type="text" name="date"
                    //    value={task.sajd}
                        placeholder=" write here" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>9-FAR/FSI permitted and consumed  </Form.Label>
                      <Form.Control required type="text" name="date" 
                    //   value={task.mksad}
                        placeholder=" write here" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>10-Ground Coverage
                      </Form.Label>
                      <Form.Control required type="text" name="date" 
                    //   value={task.nkdaks}
                        placeholder=" write here" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>11-. Transferability of development rights if any Building
                        bye-law provisions as applicable to the property viz.
                        setbacks, height restrictions, etc.</Form.Label>
                      <Form.Control required type="text" name="date" 
                    //   value={task.nksa}
                        placeholder=" write here" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>12-Comment on surrounding land uses and adjoining
                        properties in terms of usage.
                      </Form.Label>
                      <Form.Control required type="text" name="date" 
                    //   value={task.kmask}
                        placeholder=" write here" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>13-Comment on unauthorized constructions if any</Form.Label>
                      <Form.Control required type="text" name="date" 
                    //   value={task.dsadc}
                        placeholder=" write here" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>14-Comment on Demolition construction if any .
                      </Form.Label>
                      <Form.Control required type="text" name="date" 
                    //   value={task.ewuq}
                        placeholder=" write here" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>15-Comment on compounding/ regularization proceeding</Form.Label>
                      <Form.Control required type="text" name="date" 
                    //   value={task.dnd}
                        placeholder=" write here" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>16-Comment on whether OC has been issued or not
                      </Form.Label>
                      <Form.Control required type="text" name="date" 
                    //   value={task.md}
                        placeholder=" write here" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={12} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>17- Any other aspect </Form.Label>
                      <Form.Control required type="text" name="date" 
                    //   value={task.ljbhgd}
                        placeholder=" write here" />
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
                      <Form.Control required type="text" name="date" 
                    //   value={task.hgdas}
                        placeholder=" write here" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>2-Name of Owner/s<pre>
                        (in case of joint & Co-ownership,
                        Whether the shares are undivided or not?)</pre>
                      </Form.Label>
                      <Form.Control required type="text" name="date" 
                    //   value={task.yhsa}
                        placeholder=" write here" />
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
                      <Form.Control required type="text" name="date" 
                    //   value={task.ybsa}
                        placeholder=" write here" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>4-Comment on whether the IP is independently accessible
                      </Form.Label>
                      <Form.Control required type="text" name="date" 
                    //   value={task.wnbasd}
                        placeholder=" write here" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>5-Title Verification.
                      </Form.Label>
                      <Form.Control required type="text" name="date" 
                    //   value={task.idvsa}
                        placeholder=" write here" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>6-Details of leases if any,
                      </Form.Label>
                      <Form.Control required type="text" name="date" 
                    //   value={task.osd}
                        placeholder=" write here" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>7-Ordinary status of freehold or leasehold including
                        restriction on transfer.
                      </Form.Label>
                      <Form.Control required type="text" name="date" 
                    //   value={task.lksad}
                        placeholder=" write here" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>8-Agreements of easements if any,
                      </Form.Label>
                      <Form.Control required type="text" name="date" 
                    //   value={task.pjhew}
                        placeholder=" write here" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>9-Notification for acquisition if any,
                      </Form.Label>
                      <Form.Control required type="text" name="date" 
                    //   value={task.rww}
                        placeholder=" write here" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>10-Notification for road widening if any,
                      </Form.Label>
                      <Form.Control required type="text" name="date" 
                    //   value={task.urtgd}
                        placeholder=" write here" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>11-Possibility of frequent flooding/sub-merging
                      </Form.Label>
                      <Form.Control required type="text" name="date" 
                    //   value={task.hhsd}
                        placeholder=" write here" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>12-Special remarks if any like threat of acquisition of land
                        for public service purposes, road widening or
                        applicability of Crz provisions etc. (Distance from seacoast/tidal level must be incorporated)
                      </Form.Label>
                      <Form.Control required type="text" name="date" 
                    //   value={task.ffd}
                        placeholder=" write here" />
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
                      <Form.Control required type="text" name="date" 
                    //   value={task.tttt}
                        placeholder=" write here" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>14-Comment on transferability of the property ownership
                      </Form.Label>
                      <Form.Control required type="text" name="date" 
                    //   value={task.cdc}
                        placeholder=" write here" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>15-Comment on existing mortgages /charges /
                        encumbrances on the property if any
                      </Form.Label>
                      <Form.Control required type="text" name="date" 
                    //   value={task.kkk}
                        placeholder=" write here" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>16-. Comment on whether the owners of the property have
                        issued any guarantee (personal/ corporate) as the case
                        may be
                      </Form.Label>
                      <Form.Control required type="text" name="date" 
                    //   value={task.llll}
                        placeholder=" write here" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>17-CBuilding plan sanction, illegal constructions if any done
                        without plan sanction/ violations
                      </Form.Label>
                      <Form.Control required type="text" name="date" 
                    //   value={task.kkasdas}
                        placeholder=" write here" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>18-Any other aspects
                      </Form.Label>
                      <Form.Control required type="text" name="date" 
                    //   value={task.lasjsa}
                        placeholder=" write here" />
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
                      <Form.Control required type="text" name="date" 
                    //   value={task.paybale}
                        placeholder=" write here" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>2-Details of monthly rent being received if any,
                      </Form.Label>
                      <Form.Control required type="text" name="date" 
                    //   value={task.monthrent}
                        placeholder=" write here" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>3-Taxes and other outgoings
                      </Form.Label>
                      <Form.Control required type="text" name="date" 
                    //   value={task.taxes}
                        placeholder=" write here" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>4-Property insurance
                      </Form.Label>
                      <Form.Control required type="text" name="date" 
                    //   value={task.inssounce}
                        placeholder=" write here" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>5-Monthly maintenance charges
                      </Form.Label>
                      <Form.Control required type="text" name="date" 
                    //   value={task.mcharge}
                        placeholder=" write here" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>6-Description of location of property in terms of the social
                        structure of the area, population, social stratification,
                        regional origin, age groups, economic levels, locations
                        of slums/ squatter settlements nearby, etc.
                      </Form.Label>
                      <Form.Control required type="text" name="date" 
                    //   value={task.inssouncef}
                        placeholder=" write here" />
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
                      <Form.Control required type="text" name="date" 
                    //   value={task.mchdarge}
                        placeholder=" yes or no" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>2-Storage spaces
                      </Form.Label>
                      <Form.Control required type="text" name="date" 
                    //   value={task.inssfouncef}
                        placeholder=" yes or no" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>3-Utility of spaces provided within the building
                      </Form.Label>
                      <Form.Control required type="text" name="date" 
                    //   value={task.mcshdarge}
                        placeholder=" yes or no" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>4-Any other aspect
                      </Form.Label>
                      <Form.Control required type="text" name="date" 
                    //   value={task.ingssfouncef}
                        placeholder=" yes or no" />
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
                      <Form.Control required type="text" name="date" 
                    //   value={task.a}
                        placeholder=" write here" />
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>2) Sewerage/ sanitation
                      </Form.Label>
                      <Form.Control required type="text" name="date" 
                    //   value={task.ingssfouncef}
                        placeholder=" write here" />
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>3) Storm Water Drainage
                      </Form.Label>
                      <Form.Control required type="text" name="date" 
                    //   value={task.ingssfouncef}
                        placeholder=" write here" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row><Form.Label>b) Description of other physical infrastructure
                  facilities viz.</Form.Label></Row>
                <Row>
                  <Col md={3} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>1) Solid waste management
                      </Form.Label>
                      <Form.Control required type="text" name="date" 
                    //   value={task.a}
                        placeholder=" write here" />
                    </Form.Group>
                  </Col>
                  <Col md={2} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>2) Electricity
                      </Form.Label>
                      <Form.Control required type="text" name="date" 
                    //   value={task.ingssfouncef}
                        placeholder=" yes or no" />
                    </Form.Group>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>3) Roads & Public transportation connectivity
                      </Form.Label>
                      <Form.Control required type="text" name="date" 
                    //   value={task.ingssfouncef}
                        placeholder=" write here" />
                    </Form.Group>
                  </Col>
                  <Col md={3} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>4) Availability of other public utilises nearby
                      </Form.Label>
                      <Form.Control required type="text" name="date" 
                    //   value={task.ingssfouncef}
                        placeholder=" yes or no" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row><Form.Label>c) Social infrastructure in terms of</Form.Label></Row>
                <Row>
                  <Col md={4} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>1) Schools
                      </Form.Label>
                      <Form.Control required type="text" name="date" 
                    //   value={task.a}
                        placeholder=" write here" />
                    </Form.Group>
                  </Col>
                  <Col md={3} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>2) Medicals facilities
                      </Form.Label>
                      <Form.Control required type="text" name="date" 
                    //   value={task.ingssfouncef}
                        placeholder=" write here" />
                    </Form.Group>
                  </Col>
                  <Col md={5} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>3) Recreation facilities in terms of parks and open
                        spaces.

                      </Form.Label>
                      <Form.Control required type="text" name="date" 
                    //   value={task.ingssfouncef}
                        placeholder=" write here" />
                    </Form.Group>
                  </Col>
                </Row>
                <hr></hr>
                <Row className="text-center"><Form.Label><h5>IX Marketability </h5></Form.Label></Row>
                <hr></hr>
                <Row><Form.Label>Analysis of the market for the property in terms of </Form.Label></Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>1. Locational attributes
                      </Form.Label><bre></bre>
                      <Form.Label>2. Scarcity
                      </Form.Label><bre></bre>
                      <Form.Label>3. Demand and supply of the kind of subject
                        property.
                      </Form.Label><bre></bre>
                      <Form.Label>4. Comparable sale prices in the locality.
                      </Form.Label><bre></bre>
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Control required as="textarea" rows={3} name="date" />
                    </Form.Group>
                  </Col>
                </Row>
                <hr></hr>
                <Row className="text-center"><Form.Label><h5>X Engineering and Technology Aspects</h5></Form.Label></Row>
                <hr></hr>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>1. Type of construction
                      </Form.Label>
                      <Form.Control required type="text" name="date" 
                    //   value={task.mcshdarge}
                        placeholder=" write here" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>2. Materials and technology used
                      </Form.Label>
                      <Form.Control required type="text" name="date" 
                    //   value={task.ingssfouncef}
                        placeholder=" write here" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>3. Specifications
                      </Form.Label>
                      <Form.Control required type="text" name="date" 
                    //   value={task.mcshdarge}
                        placeholder=" write here" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>4. Maintenance issues
                      </Form.Label>
                      <Form.Control required type="text" name="date" 
                    //   value={task.ingssfouncef}
                        placeholder=" write here" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>5. Age of the Building
                      </Form.Label>
                      <Form.Control required type="text" name="date" 
                    //   value={task.mcshdarge}
                        placeholder=" write here" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>6. Total life of the building
                      </Form.Label>
                      <Form.Control required type="text" name="date" 
                    //   value={task.ingssfouncef}
                        placeholder=" write here" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>7. Extent of deterioration
                      </Form.Label>
                      <Form.Control required type="text" name="date" 
                    //   value={task.mcshdarge}
                        placeholder=" write here" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>8. Structural safety
                      </Form.Label>
                      <Form.Control required type="text" name="date" 
                    //   value={task.ingssfouncef}
                        placeholder=" write here" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>9. Protection against natural disasters viz. earthquakes,
                      </Form.Label>
                      <Form.Control required type="text" name="date" 
                    //   value={task.mcshdarge}
                        placeholder=" write here" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>10. Visible damage in the building if any
                      </Form.Label>
                      <Form.Control required type="text" name="date" 
                    //   value={task.ingssfouncef}
                        placeholder=" write here" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>11. Common facilities viz. lift, water pump, lights, security
                        systems etc
                      </Form.Label>
                      <Form.Control required type="text" name="date" 
                    //   value={task.mcshdarge}
                        placeholder=" write here" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>12. System of air-conditioning
                      </Form.Label>
                      <Form.Control required type="text" name="date" 
                    //   value={task.ingssfouncef}
                        placeholder=" write here" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={12} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>13. Provision for firefighting, Copies of plans and elevations
                        of the building to be included
                      </Form.Label>
                      <Form.Control required type="text" name="date" 
                    //   value={task.ingssfouncef}
                        placeholder=" write here" />
                    </Form.Group>
                  </Col>
                </Row>
                <hr></hr>
                <Row className="text-center"><Form.Label><h5>XI Environmental Factors</h5></Form.Label></Row>
                <hr></hr>
                <Row>
                  <Col md={10} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>1-Use of environment friendly building materials, green
                        building techniques if any
                      </Form.Label>
                    </Form.Group>
                  </Col>
                  <Col md={2} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Control required type="text" name="date" 
                    //   value={task.ingssfouncef}
                        placeholder=" yes or no" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={10} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>2. Provision for rain water harvesting
                      </Form.Label>
                    </Form.Group>
                  </Col>
                  <Col md={2} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Control required type="text" name="date" 
                    //   value={task.ingssfouncef}
                        placeholder=" yes or no" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={10} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>3. Use of solar heating and lighting systems etc presence of
                        environmental pollution in the vicinity of the property in
                        terms of industries, heavy traffic etc
                      </Form.Label>
                    </Form.Group>
                  </Col>
                  <Col md={2} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Control required type="text" name="date" 
                    //   value={task.ingssfouncef}
                        placeholder=" yes or no" />
                    </Form.Group>
                  </Col>
                </Row>
                <hr></hr>
                <Row className="text-center"><Form.Label><h5>XII Architectural and aesthetic quality
                </h5></Form.Label></Row>
                <hr></hr>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>1. Descriptive account on whether the building is modern,
                        old fashioned etc. plain looking or with decorative
                        elements heritage 
                        {/* value if applicable, presence of */}
                        landscapes elements etc.
                      </Form.Label>
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Control required as="textarea" rows={3} name="date" 
                    //   value={task.ingssfouncef}
                        placeholder=" write here" />
                    </Form.Group>
                  </Col>
                </Row>
                <hr></hr>
                <Row className="text-center"><Form.Label><h5>XIII In case of valuation of industrial property
                </h5></Form.Label></Row>
                <hr></hr>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>1) Proximity to residential areas
                      </Form.Label>
                    </Form.Group>
                  </Col>
                  <Col md={2} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Control required type="text" name="date" 
                    //   value={task.ingssfouncef}
                        placeholder=" write" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label>2) Availability of public transport facilities
                      </Form.Label>
                    </Form.Group>
                  </Col>
                  <Col md={2} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Control required type="text" name="date" 
                    //   value={task.ingssfouncef}
                        placeholder=" write" />
                    </Form.Group>
                  </Col>
                </Row>
                <hr></hr>
                <Row className="text-center"><Form.Label><h5>XIV Valuation
                </h5></Form.Label></Row>
                <hr></hr>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Label><p> 1- Here, the procedure adopted for arriving at the
                        valuation has to be highlighted.
                        The valuer should consider all the three generic
                        approaches of property valuation and state explicitly
                        the reasons for adoption of/ rejection of a particular
                        approach and the basis on which the final valuation
                        judgement is arrived at.
                        A detailed analysis and descriptive account of the
                        approaches, assumptions made, basis adopted,
                        supporting data (in terms of comparable sales),
                        reconciliation of various factors, departures, final
                        valuation arrived at has to be presented here.</p>
                      </Form.Label>
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="firstName">
                      <Form.Control required as="textarea" rows={8} name="date" 
                    //   value={task.ingssfouncef}
                        placeholder=" write" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row><p>As a result of my appraisal and analysis, it is my considered opinion that the present fair market 
                    value of
                  the above property in the prevailing condition with aforesaid specifications in Rs. _ _ _ _ _ _ _ _ _(Rupees _ _ _ _ _ _ _ _ _ _ _ _  ). (Prevailing market rate along with details / reference of atleast
                  two latest deals/ transactions with respect to adjacent properties in the areas. The reference should be of
                  properties/ plots of similar size/area and same use as the land being valued). Compiled & drafted in
                  accordance with data & documents either in physical form before as & information supplied. I have no
                  direct or indirect interest in the property valued, the property details is based on the information as given
                  by Shri Haji Riyasat Khan Warsi as per regards the ownership etc. I am not responsible for the legality of
                  colony, report subject to legal opinion report. The other details are as under:
                </p>
                  <p>i) Date of purchase of immovable property: To be given by owner<br></br>
                    ii) Purchase Price of immovable property:<br></br>
                    iii) Book 
                    value (Realizable value) of immovable property: Rs.<Form.Control type="text" size="10" /> _ _ _ _ _ _ _ _ _  _,<br></br>
                    iv) Distress sale value of immovable property: Rs. _____________<br></br>
                    v) Guideline value (value as per circle rates), if applicable, in the area where immovable property is
                    situated. </p></Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <h6>Date:</h6><br></br>
                    <h6>Place:</h6>
                  </Col>
                  <Col md={6} className="mb-3">
                    <h6>   _</h6>
                    <br></br>
                    <h6>GOVT. APPROVED VALUER</h6>
                  </Col>
                </Row>
                <Row >
                  <Col md={6} className="mt-5 text-right">
                    <Button variant="primary" onClick={handlepdf} type="submit">Submit</Button>
                  </Col>
<<<<<<< HEAD
                  <Col md={6} className="mt-5 text-left">
                    <Button variant="primary" type="submit">Preview</Button>
                  </Col>
=======
                 
>>>>>>> c0ed760 (make it)
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};
