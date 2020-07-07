import React , {useEffect, useState }from 'react';
import { Form, Col, Button } from 'react-bootstrap'
import './gigDetails.css'
import axios from 'axios'
const GigDetail  =  React.memo(props =>{

    const [gigDetailValue, setGigDetail]  = useState({}) 
    const gigId = props.match.params.gigId;
    let sucessDeatils = []
    useEffect(() => {
        axios.get('/mockJson/gigDetail.json').then ((response) => {
            setGigDetail(response.data)
        }).catch((rej) => {
            console.log(rej)
        })
    }, [])
    
    const caculateTime = (dateTimestamp) => {
        let date = new Date(dateTimestamp)
        let day = date.getDate()
        let month = date.getMonth() + 1
        let year = date.getFullYear()
        return day + "/" + month + "/" + year
    } 
    
        return (
            <div>
                <div className="form_title"><span> GIG Details:</span><span>{gigId}</span></div>
                <div>
                   <Form className="form_class">
                        <div className="first_section"><span className="first_section_title">About the GIG</span></div>
                            <Form.Group className="form_group" controlId="first_section_control">
                                <Form.Row className="form_row">
                                    <Form.Label className="form_row_label" column="lg"  lg={3}>GIG Title:</Form.Label>
                                    <Col><span className="form_control"  >{gigDetailValue.gigTitle}</span>
                                     </Col>
                                    
                                </Form.Row>
                                <Form.Row className="form_row">
                                    <Form.Label className="form_row_label" column="lg" lg={3}>Description Of GIG </Form.Label>
                                    <Col><span className="form_control"  >{gigDetailValue.description}</span> </Col>
                                </Form.Row>
                                <Form.Row className="form_row">
                                    <Form.Label className="form_row_label" column="lg" lg={3}>GIG Tag </Form.Label>
                                    <Col><span className="form_control"  >{gigDetailValue.tag}</span> </Col>
                                </Form.Row>
                                <Form.Row className="form_row"> 
                                    <Form.Label className="form_row_label" column="lg" lg={3}>GIG Start Date </Form.Label>
                                    <Col><span className="form_control"  >{caculateTime(gigDetailValue.start_date)}</span> </Col>
                                </Form.Row>
                                <Form.Row className="form_row">
                                    <Form.Label className="form_row_label" column="lg" lg={3}>GIG End Date </Form.Label>
                                    <Col ><span className="form_control"  >{caculateTime(gigDetailValue.end_date)}</span></Col>
                                </Form.Row>
                                <Form.Row className="form_row">
                                    <Form.Label className="form_row_label" column="lg" lg={3}>Last Date To Apply</Form.Label>
                                    <Col>
                                    <span className="form_control"  >{caculateTime(gigDetailValue.last_date)}</span>
                                    </Col>
                                    
                                </Form.Row>
                                <Form.Row className="form_row">
                                    <Form.Label className="form_row_label" column="lg" lg={3}>Attachment for details </Form.Label>
                                    <Col><a href="/assignmentDeatils.txt" download>View File</a></Col>
                                </Form.Row>
                            </Form.Group>
                        <div className="first_section"><span className="first_section_title">Who will make a good fit for the GIG</span></div>
                            <Form.Group className="form_group" controlId="first_section_control">
                                <Form.Row className="form_row">
                                    <Form.Label className="form_row_label" column="lg"  lg={3}>Qualification Criteria:</Form.Label>
                                    <Col><span className="form_control"  >{gigDetailValue.type_application}</span> </Col>
                                </Form.Row>
                                <Form.Row className="form_row"> 
                                    <Form.Label className="form_row_label" column="lg" lg={3}>Allow people to work in teams </Form.Label>
                                    <Col>
                                    <span className="form_control"  >{gigDetailValue.work_team}</span>
                                    </Col>
                                </Form.Row>
                                {/* <Form.Row className="form_row">
                                    <Form.Label className="form_row_label" column="lg" lg={3}>Add all your screening question(s) here </Form.Label>
                                    <Col>{ gigDetailValue && gigDetailValue.question && gigDetailValue.question.length &&gigDetailValue.question.map((value, index) => {
                                                    return (
                                                        <div key={index}><span className="form_control"  >{index+1}{'.'}{value}</span></div>
                                                    )
                                            })} </Col>
                                </Form.Row> */}
                                {/* <Form.Row className="form_row">
                                    <Form.Label className="form_row_label" column="lg" lg={3}>   Timezone</Form.Label>
                                    <Col>
                                    <span className="form_control"  >{gigDetailValue.location}</span>
                                    </Col>
                                </Form.Row> */}
                            </Form.Group>
                        {/* <div className="first_section"><span className="first_section_title">What does success for this GIG mean</span></div>
                            <Form.Group className="form_group" controlId="first_section_control">
                                <Form.Row className="form_row">
                                    <Form.Label className="form_row_label" column="lg"  lg={3}>Would consider this GIG complete when:</Form.Label>
                                    <Col>{ gigDetailValue && gigDetailValue.success && gigDetailValue.success.length &&gigDetailValue.success.map((value, index) => {
                                                    return (
                                                        <div key={index}><span className="form_control"  >{index+1}{'.'}{value}</span></div>
                                                    ) ``
                                            })}
                                    </Col>
                                </Form.Row>
                            </Form.Group> */}
                        <div className="first_section"><span className="first_section_title">Contact Preference</span></div>
                            <Form.Group className="form_group" controlId="first_section_control">
                                <Form.Row className="form_row">
                                    <Form.Label className="form_row_label" column="lg" lg={3}>Timezone</Form.Label>
                                    <Col>
                                    <span className="form_control"  >{gigDetailValue.location}</span>
                                    </Col>
                                </Form.Row>
                                <Form.Row className="form_row">
                                    <Form.Label className="form_row_label" column="lg"  lg={3}>Mode</Form.Label>
                                    <Col>
                                    <Form.Check  defaultChecked={true} type="checkbox" label="" inline ></Form.Check>
                                    <svg className="row_checkbox_svg" width="25" height="25" viewBox="0 0 20 20">
                                        <path d="M17.969,10c0,1.707-0.5,3.366-1.446,4.802c-0.076,0.115-0.203,0.179-0.333,0.179c-0.075,0-0.151-0.022-0.219-0.065c-0.184-0.122-0.233-0.369-0.113-0.553c0.86-1.302,1.314-2.812,1.314-4.362s-0.454-3.058-1.314-4.363c-0.12-0.183-0.07-0.43,0.113-0.552c0.186-0.12,0.432-0.07,0.552,0.114C17.469,6.633,17.969,8.293,17.969,10 M15.938,10c0,1.165-0.305,2.319-0.88,3.339c-0.074,0.129-0.21,0.201-0.347,0.201c-0.068,0-0.134-0.016-0.197-0.052c-0.191-0.107-0.259-0.351-0.149-0.542c0.508-0.9,0.776-1.918,0.776-2.946c0-1.028-0.269-2.046-0.776-2.946c-0.109-0.191-0.042-0.434,0.149-0.542c0.193-0.109,0.436-0.042,0.544,0.149C15.634,7.681,15.938,8.834,15.938,10 M13.91,10c0,0.629-0.119,1.237-0.354,1.811c-0.063,0.153-0.211,0.247-0.368,0.247c-0.05,0-0.102-0.01-0.151-0.029c-0.203-0.084-0.301-0.317-0.217-0.521c0.194-0.476,0.294-0.984,0.294-1.508s-0.1-1.032-0.294-1.508c-0.084-0.203,0.014-0.437,0.217-0.52c0.203-0.084,0.437,0.014,0.52,0.217C13.791,8.763,13.91,9.373,13.91,10 M11.594,3.227v13.546c0,0.161-0.098,0.307-0.245,0.368c-0.05,0.021-0.102,0.03-0.153,0.03c-0.104,0-0.205-0.04-0.281-0.117l-3.669-3.668H2.43c-0.219,0-0.398-0.18-0.398-0.398V7.012c0-0.219,0.179-0.398,0.398-0.398h4.815l3.669-3.668c0.114-0.115,0.285-0.149,0.435-0.087C11.496,2.92,11.594,3.065,11.594,3.227 M7.012,7.41H2.828v5.18h4.184V7.41z M10.797,4.189L7.809,7.177v5.646l2.988,2.988V4.189z"></path>
                                    </svg>
                                    </Col>
                                </Form.Row>
                                <Form.Row className="form_row">
                                    <Form.Group >
                                        <Form.Check defaultChecked={true} className="row_checkbox" type="checkbox" label="All the required licences and support will be provided to the applicant" />
                                    </Form.Group>
                                </Form.Row>
                            </Form.Group>
                            <Button className="form_button form_button_left"  type="submit" size="lg">
                                Apply for this GIG
                            </Button>
                            <Button  className="form_button form_button_save" size="lg" type="submit">
                                Close
                            </Button>
                            {/* <Button  className="form_button_close form_button_save" size="lg" type="submit">
                                Close
                            </Button> */}
                     </Form>
                </div>
            </div>
        )
    })


export default GigDetail;