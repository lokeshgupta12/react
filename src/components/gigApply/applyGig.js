import React , {Component }from 'react';
import { Form, Col, Button } from 'react-bootstrap'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './applyGig.css'
class ApplyGig extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            addTeamRow: false
        }
        this.renderDetailPage = this.renderDetailPage.bind(this)
        this.applyChangeHandler = this.applyChangeHandler.bind(this)
    }
    
    renderDetailPage() {
        const route = '/gigDetails/' + this.props.match.params.gigId;
        this.props.history.push(route)
    }

    applyChangeHandler(e) {
        if(e.target.value == 1) {
            this.setState({
                addTeamRow: true
            })
        } else {
            this.setState({
                addTeamRow: false
            })
        }
    }
    
    render() {
        const gigNumber = this.props.match.params.gigId

        const { addTeamRow } = this.state
        return (
            <div>
                <div className="form_title"><span> APPLY FOR A GIG</span></div>
                
                <div className="main_instructor_apply_div">
                <div className="inst_title"><span>Instruction:</span></div>
                    
                    <div className="inst_description">
                        <span>1. Describe your experience and skillsets in as much details as possible.</span>
                    </div>
                    </div>
                    <div className="apply_des">
                    <div className="gig_display">
                        <div className="div_width"><span>GIG Number:</span></div>
                        <div ><span>{gigNumber}</span></div>
                    </div>
                     <div className="gig_display">
                        <div className="div_width"><span>GIG Title:</span></div>
                        <div ><span>Writing wizard  required for killer content creation</span></div>
                     </div>
                    <div className="gig_display">
                        <div className="div_width"><span>GIG Detail:</span></div>
                        <div onClick={this.renderDetailPage} ><span className="detail_link" >View Detail</span></div>
                    </div>
                </div>
                
                <div>
                   <Form className="form_class">
                        <div className="first_section"><span className="first_section_title">Why this GIG</span></div>
                            <Form.Group className="form_group" controlId="first_section_control">
                                <Form.Row className="form_row">
                                    <Form.Label className="form_row_label" column="lg" lg={3}>Apply As</Form.Label>
                                    <Col>
                                        <Form.Control as="select" className="form_control" onChange={this.applyChangeHandler} size="lg"  placeholder="" >
                                                <option >Choose...</option>
                                                <option value="1">Team</option>
                                                <option value="3">Individual</option>
                                        </Form.Control> 
                                    </Col>
                                </Form.Row>
                                {addTeamRow && <Form.Row className="form_row">
                                    <Form.Label className="form_row_label" column="lg" lg={3}>Add your team member</Form.Label>
                                    <Col>
                                        <Form.Control defaultValue="" className="form_control" size="lg" type="text" placeholder="" />
                                    </Col>
                                </Form.Row>}
                                <Form.Row className="form_row">
                                    <Form.Label className="form_row_label" column="lg"  lg={3}>Why do you want to do this GIG?</Form.Label>
                                    <Col><Form.Control as="textarea"className="form_control_teaxtarea" size="lg"  placeholder=""  />
                                     </Col>
                                    
                                </Form.Row>
                                {/* <Form.Row className="form_row">
                                    <Form.Label className="form_row_label" column="lg" lg={3}>Skills relevant to this GIG </Form.Label>
                                    <Col><Form.Control  className="form_control" size="lg" type="text" placeholder="" /> </Col>
                                </Form.Row>
                                <Form.Row className="form_row">
                                    <Form.Label className="form_row_label" column="lg" lg={3}>Levelup(s) relevant to this GIG </Form.Label>
                                    <Col><Form.Control  className="form_control" size="lg" type="text" placeholder="" /> </Col>
                                </Form.Row>
                                <Form.Row className="form_row">
                                    <Form.Label className="form_row_label" column="lg" lg={3}>Certifications relevant to this GIG </Form.Label>
                                    <Col><Form.Control  className="form_control" size="lg" type="text" placeholder="" /> </Col>
                                </Form.Row>
                                <Form.Row className="form_row">
                                    <Form.Label className="form_row_label" column="lg" lg={3}>Answers to screening question(s)(if Any)</Form.Label>
                                    <Col><Form.Control as="textarea"className="form_control_teaxtarea" size="lg"  placeholder=""  /> </Col>
                                </Form.Row> */}
                                <Form.Row className="form_row">
                                    <Form.Label className="form_row_label" column="lg" lg={3}>Attachment for details</Form.Label>
                                    <Col><input className="form_control" type="file" id="myfile1" name="myfile1" /></Col>
                                </Form.Row>
                            </Form.Group>
                            <Form.Group className="form_group" controlId="first_section_control">
                                <Form.Row className="form_row">
                                    <Form.Group >
                                        <Form.Check className="row_checkbox" type="checkbox" label="I have gone through the requirments of the GIG" />
                                        <Form.Check className="row_checkbox" type="checkbox" label="While I do this GIG, I ensure my current project work will not be affected" />
                                    </Form.Group>
                                </Form.Row>
                            </Form.Group>
                            <Button className="form_button form_button_left"  type="submit" size="lg">
                                Submit Application
                            </Button>
                            <Button  className="form_button form_button_save" size="lg" type="submit">
                                Cancel
                            </Button>
                     </Form>
                </div>
            </div>
        )
    }
}

export default ApplyGig;