import React , {Component }from 'react';
import { Form, Col, Button } from 'react-bootstrap'
import DatePicker from 'react-date-picker'
import ToggleButton from 'react-toggle-button'
import './createGig.css'
class CreateGig extends Component {

    constructor(props) {
        super(props)
        this.state = {
            startDate: new Date(),
            endDate: '',
            lastApplicationDate: '',
            toggleValue: false,
            titleImageUrl: ''
        }
        this.handleStartGigChange = this.handleStartGigChange.bind(this)
        this.handleUploadGig = this.handleUploadGig.bind(this)
        this.handleEndGigChange = this.handleEndGigChange.bind(this)
        this.handleLastApplicationDate = this.handleLastApplicationDate.bind(this)
        this.onToggleChangeHandler = this.onToggleChangeHandler.bind(this)
    }

    handleStartGigChange(date) {
      this.setState({
          startDate: date
      })
    }
    handleUploadGig(event) {
        const imageName = '/images/' + event.currentTarget.files[0].name
        this.setState({
            titleImageUrl: imageName
        })
    }

    onToggleChangeHandler(value) {
        console.log(value)
        this.setState({
            toggleValue:!value
        })
    }

    handleEndGigChange(date) {
        this.setState({
            endDate: date
        })
    }

    handleLastApplicationDate(date) {
        this.setState({
            lastApplicationDate: date
        })
    }
    
        
    
    render() {
        return (
            <div>
                <div className="form_title"><span> CREATE A GIG</span></div>
                <div className="main_instructor_div">
                 <div className="inst_title"><span>Instruction:</span></div>
                 <div className="inst_description">
                     <span>1. Describe your project in as much detail as you can comfortably reveal- It will increase the quality of proposals you receive and shorten the selection process.</span><br/>
                     <span>2. Upload as much relevant information (pictures, documents, specifications, links, ect) as possible.</span>
                 </div>
                </div>
                <div>
                   <Form className="form_class">
                        <div className="first_section"><span className="first_section_title">What do you need to get done</span></div>
                            <Form.Group className="form_group" controlId="first_section_control">
                                <Form.Row className="form_row">
                                    <Form.Label className="form_row_label" column="lg"  lg={3}>GIG Title</Form.Label>
                                    <Col><Form.Control className="form_control" size="lg" type="text" placeholder=""  />
                                     </Col>
                                    
                                </Form.Row>
                                {/* <Form.Row className="form_row">
                                    <Form.Label title="This image will be shown along with the GIG description on the portal" className="form_row_label" column="lg" lg={3}>GIG Image </Form.Label>
                                    {this.state.titleImageUrl && <Col xs={0}><img className="title_image" src={this.state.titleImageUrl}/></Col>}
                                    <Col><input className="form_control" title="This image will be shown along with the GIG description on the portal" onChange={this.handleUploadGig} type="file" id="myfile1" accept="image/*"name="myfile1" /></Col>
                                </Form.Row> */}
                                <Form.Row className="form_row">
                                    <Form.Label className="form_row_label" column="lg" lg={3}>Description of your GIG </Form.Label>
                                    <Col><Form.Control as="textarea" className="form_control_teaxtarea" size="lg"  placeholder="" /> </Col>
                                </Form.Row>
                                <Form.Row className="form_row">
                                    <Form.Label className="form_row_label" column="lg" lg={3}>GIG Tag </Form.Label>
                                    <Col><Form.Control  className="form_control" size="lg" type="text" placeholder="" /> </Col>
                                </Form.Row>
                                <Form.Row className="form_row"> 
                                    <Form.Label className="form_row_label" column="lg" lg={3}>GIG Start Date </Form.Label>
                                    <Col><DatePicker
                                            value={this.state.startDate}
                                            onChange={this.handleChange}
                                            clearIcon={null}
                                    /></Col>
                                </Form.Row>
                                <Form.Row className="form_row">
                                    <Form.Label className="form_row_label" column="lg" lg={3}>GIG End Date </Form.Label>
                                    <Col xs="auto"><DatePicker
                                            value={this.state.endDate}
                                            minDate = {this.state.startDate}
                                            onChange={this.handleEndGigChange}
                                            clearIcon={null}
                                    /></Col>
                                </Form.Row>
                                <Form.Row className="form_row">
                                    <Form.Label className="form_row_label" column="lg" lg={3}>Last Date To Apply</Form.Label>
                                    <Col>
                                    <DatePicker
                                            value={this.state.lastApplicationDate}
                                            minDate = {this.state.startDate}
                                            onChange={this.handleLastApplicationDate}
                                            clearIcon={null}
                                    />
                                    </Col>
                                    
                                </Form.Row>
                                <Form.Row className="form_row">
                                    <Form.Label className="form_row_label" column="lg" lg={3}>Attachment for details </Form.Label>
                                    <Col><input className="form_control" type="file" id="myfile" name="myfile" /></Col>
                                </Form.Row>
                            </Form.Group>
                        <div className="first_section"><span className="first_section_title">Who will make a good fit for the GIG</span></div>
                            <Form.Group className="form_group" controlId="first_section_control">
                                <Form.Row className="form_row">
                                    <Form.Label className="form_row_label" column="lg"  lg={3}>Qualification Criteria</Form.Label>
                                    <Col><Form.Control className="form_control" size="lg" type="text" placeholder="" /> </Col>
                                </Form.Row>
                                {/* <Form.Row className="form_row">
                                    <Form.Label className="form_row_label" column="lg" lg={3}>No. of applicants: </Form.Label>
                                </Form.Row> */}
                                {/* <Form.Row className="form_row">
                                    <Form.Group id="formGridCheckbox">
                                        <Form.Check className="row_checkbox" type="checkbox" label="Only one applicant can work at a time" />
                                        <Form.Check className="row_checkbox" type="checkbox" label="Multiple applicant can work at a time" />
                                    </Form.Group>
                                </Form.Row> */}
                                <Form.Row className="form_row"> 
                                    <Form.Label className="form_row_label" column="lg" lg={3}>Allow people to work in teams </Form.Label>
                                    <Col>
                                    <ToggleButton
                                        value={ this.state.toggleValue }
                                        onToggle={this.onToggleChangeHandler} ></ToggleButton>
                                    </Col>
                                </Form.Row>
                                {/* <Form.Row className="form_row">
                                    <Form.Label className="form_row_label" column="lg" lg={3}>Add all your screening question(s) here </Form.Label>
                                    <Col><Form.Control  as="textarea" className="form_control_teaxtarea" size="lg" placeholder="" /> </Col>
                                </Form.Row> */}
                                {/* <Form.Row className="form_row">
                                    <Form.Label className="form_row_label" column="lg" lg={3}>Timezone</Form.Label>
                                    <Col>
                                        <Form.Control as="select" className="form_control"  size="lg"  placeholder="" >
                                                <option >Choose...</option>
                                                <option value="1">USA</option>
                                                <option value="2">APAC</option>
                                                <option value="3">GURGAON</option>
                                        </Form.Control> 
                                    </Col>
                                </Form.Row> */}
                            </Form.Group>
                        {/* <div className="first_section"><span className="first_section_title">What does success for this GIG mean</span></div>
                            <Form.Group className="form_group" controlId="first_section_control">
                                <Form.Row className="form_row">
                                    <Form.Label className="form_row_label" column="lg"  lg={3}>Description</Form.Label>
                                    <Col><Form.Control as="textarea" className="form_control_teaxtarea" size="lg"  placeholder="" /> </Col>
                                </Form.Row>
                            </Form.Group> */}
                        <div className="first_section"><span className="first_section_title">Contact Preference</span></div>
                            <Form.Group className="form_group" controlId="first_section_control">
                                <Form.Row className="form_row">
                                    <Form.Label className="form_row_label" column="lg" lg={3}>Timezone</Form.Label>
                                    <Col>
                                        <Form.Control as="select" className="form_control"  size="lg"  placeholder="" >
                                                <option >Choose...</option>
                                                <option value="1">USA</option>
                                                <option value="2">APAC</option>
                                                <option value="3">GURGAON</option>
                                        </Form.Control> 
                                    </Col>
                                </Form.Row>
                                <Form.Row className="form_row">
                                    <Form.Label className="form_row_label" column="lg"  lg={3}>Mode</Form.Label>
                                    <Col>
                                    <Form.Check defaultChecked={true} type="checkbox" label="" inline ></Form.Check>
                                    <svg className="row_checkbox_svg" width="25" height="25" viewBox="0 0 20 20">
                                        <path d="M17.969,10c0,1.707-0.5,3.366-1.446,4.802c-0.076,0.115-0.203,0.179-0.333,0.179c-0.075,0-0.151-0.022-0.219-0.065c-0.184-0.122-0.233-0.369-0.113-0.553c0.86-1.302,1.314-2.812,1.314-4.362s-0.454-3.058-1.314-4.363c-0.12-0.183-0.07-0.43,0.113-0.552c0.186-0.12,0.432-0.07,0.552,0.114C17.469,6.633,17.969,8.293,17.969,10 M15.938,10c0,1.165-0.305,2.319-0.88,3.339c-0.074,0.129-0.21,0.201-0.347,0.201c-0.068,0-0.134-0.016-0.197-0.052c-0.191-0.107-0.259-0.351-0.149-0.542c0.508-0.9,0.776-1.918,0.776-2.946c0-1.028-0.269-2.046-0.776-2.946c-0.109-0.191-0.042-0.434,0.149-0.542c0.193-0.109,0.436-0.042,0.544,0.149C15.634,7.681,15.938,8.834,15.938,10 M13.91,10c0,0.629-0.119,1.237-0.354,1.811c-0.063,0.153-0.211,0.247-0.368,0.247c-0.05,0-0.102-0.01-0.151-0.029c-0.203-0.084-0.301-0.317-0.217-0.521c0.194-0.476,0.294-0.984,0.294-1.508s-0.1-1.032-0.294-1.508c-0.084-0.203,0.014-0.437,0.217-0.52c0.203-0.084,0.437,0.014,0.52,0.217C13.791,8.763,13.91,9.373,13.91,10 M11.594,3.227v13.546c0,0.161-0.098,0.307-0.245,0.368c-0.05,0.021-0.102,0.03-0.153,0.03c-0.104,0-0.205-0.04-0.281-0.117l-3.669-3.668H2.43c-0.219,0-0.398-0.18-0.398-0.398V7.012c0-0.219,0.179-0.398,0.398-0.398h4.815l3.669-3.668c0.114-0.115,0.285-0.149,0.435-0.087C11.496,2.92,11.594,3.065,11.594,3.227 M7.012,7.41H2.828v5.18h4.184V7.41z M10.797,4.189L7.809,7.177v5.646l2.988,2.988V4.189z"></path>
                                    </svg>
                                    <Form.Check defaultChecked={true} type="checkbox" label="" inline/>
                                        <svg className="row_checkbox_svg" width="20" height="20" viewBox="0 0 20 20">
                                            <path  d="M19.291,3.026c0.002-0.15-0.053-0.301-0.167-0.415c-0.122-0.122-0.286-0.172-0.444-0.161H1.196
                                                c-0.16-0.011-0.322,0.039-0.444,0.161C0.637,2.725,0.583,2.875,0.585,3.026c0,0.003-0.002,0.006-0.002,0.009v14.032
                                                c0,0.322,0.262,0.584,0.585,0.584h17.54c0.322,0,0.584-0.262,0.584-0.584V3.035C19.292,3.032,19.291,3.029,19.291,3.026z
                                                M17.147,3.619l-7.21,6.251L2.728,3.619H17.147z M18.122,15.896c0,0.323-0.261,0.584-0.584,0.584H2.337
                                                c-0.323,0-0.585-0.261-0.585-0.584V4.292l7.732,6.704c0.013,0.017,0.019,0.035,0.034,0.052c0.115,0.114,0.268,0.169,0.419,0.166
                                                c0.151,0.003,0.304-0.052,0.419-0.166c0.015-0.017,0.021-0.035,0.034-0.052l7.731-6.704V15.896z"></path>
                                        </svg>
                                    <Form.Check defaultChecked={true}  type="checkbox" label="" inline/>
                                        <svg className="row_checkbox_svg" width="20" height="20" viewBox="0 0 20 20">
                                            <path  d="M14.023,12.154c1.514-1.192,2.488-3.038,2.488-5.114c0-3.597-2.914-6.512-6.512-6.512
                                                c-3.597,0-6.512,2.916-6.512,6.512c0,2.076,0.975,3.922,2.489,5.114c-2.714,1.385-4.625,4.117-4.836,7.318h1.186
                                                c0.229-2.998,2.177-5.512,4.86-6.566c0.853,0.41,1.804,0.646,2.813,0.646c1.01,0,1.961-0.236,2.812-0.646
                                                c2.684,1.055,4.633,3.568,4.859,6.566h1.188C18.648,16.271,16.736,13.539,14.023,12.154z M10,12.367
                                                c-2.943,0-5.328-2.385-5.328-5.327c0-2.943,2.385-5.328,5.328-5.328c2.943,0,5.328,2.385,5.328,5.328
                                                C15.328,9.982,12.943,12.367,10,12.367z">
                                            </path>
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
                                Save As Draft
                            </Button>
                            <Button  className="form_button form_button_save" size="lg" type="submit">
                                Save
                            </Button>
                     </Form>
                </div>
            </div>
        )
    }
}

export default CreateGig;