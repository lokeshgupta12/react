import React , {useEffect, useState }from 'react';
import Table from 'react-bootstrap/Table'
import "react-datepicker/dist/react-datepicker.css";
import './viewApplication.css'
import axios from 'axios'
const ViewApplication  =  React.memo(props =>{

    

    const [viewApplicationDetail, setApplicationDetail]  = useState({}) 
    useEffect(() => {
        axios.get('/mockJson/mockViewApplication.json').then ((response) => {
            console.log(response.data)
            setApplicationDetail(response.data)
        }).catch((rej) => {
            console.log(rej)
        })
    }, [])

    const routeonDetailPage = (e, id) => {
        const route = '/gigDetails/' + id
        props.history.push(route)
    }
    
    const caculateTime = (dateTimestamp) => {
        let date = new Date(dateTimestamp)
        let day = date.getDate()
        let month = date.getMonth() + 1
        let year = date.getFullYear()
        return day + "/" + month + "/" + year
    } 
    
        return (
            <div>
                <div className="form_title"><span> VIEW APPLICATION</span></div>
                <div className="gig_id"><span> GIG No:</span><span>{viewApplicationDetail.gigId}</span></div>
                <div>
                   {viewApplicationDetail.gigDetails && 
                    <div className="list_parent_div" >
                        <div className="info_div">
                            <div>
                                <span className="list_title">{viewApplicationDetail.gigDetails.title}</span>
                            </div>
                            <div>
                                <div className="left_div">
                                    <svg className="svg_class_watch" width="25" height="25" viewBox="0 2 20 20">
                                        <path d="M10.25,2.375c-4.212,0-7.625,3.413-7.625,7.625s3.413,7.625,7.625,7.625s7.625-3.413,7.625-7.625S14.462,2.375,10.25,2.375M10.651,16.811v-0.403c0-0.221-0.181-0.401-0.401-0.401s-0.401,0.181-0.401,0.401v0.403c-3.443-0.201-6.208-2.966-6.409-6.409h0.404c0.22,0,0.401-0.181,0.401-0.401S4.063,9.599,3.843,9.599H3.439C3.64,6.155,6.405,3.391,9.849,3.19v0.403c0,0.22,0.181,0.401,0.401,0.401s0.401-0.181,0.401-0.401V3.19c3.443,0.201,6.208,2.965,6.409,6.409h-0.404c-0.22,0-0.4,0.181-0.4,0.401s0.181,0.401,0.4,0.401h0.404C16.859,13.845,14.095,16.609,10.651,16.811 M12.662,12.412c-0.156,0.156-0.409,0.159-0.568,0l-2.127-2.129C9.986,10.302,9.849,10.192,9.849,10V5.184c0-0.221,0.181-0.401,0.401-0.401s0.401,0.181,0.401,0.401v4.651l2.011,2.008C12.818,12.001,12.818,12.256,12.662,12.412"></path>
                                    </svg>
                                    <span className="post_class set_postion">Posted:</span>
                                    <span className="hour_class set_postion">{viewApplicationDetail.gigDetails.postedHour} Hour Ago</span>
                                </div>
                                <div className="left_div">
                                    <svg className="application_class" xmlns="http://www.w3.org/2000/svg" width="24" height="21" viewBox="0 0 24 21">
                                    <path fillRule="evenodd" d="M2 19V6.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V19h1V.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5V19h1V6.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V19h1.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5H2zm8.5-2a.5.5 0 0 0-.5.5V19h4v-1.5a.5.5 0 0 0-.5-.5h-3zm-2-15a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm-6 3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm-6 3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm-6 3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm-6 3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm5 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm-16 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm16-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm-16 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm16-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm-16 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"/>
                                    </svg>
                                    <span className="application_span_class set_postion">Application:</span>
                                    <span className="application_value_class set_postion">{viewApplicationDetail.gigDetails.gig_status}</span>
                                </div>
                                <div className="left_div curson_icon" onClick={(event) => routeonDetailPage(event, viewApplicationDetail.gigDetails.listId)}>
                                    <span className="detail_class set_postion">Detail</span>
                                </div>
                            </div>
                            <div className="tag_div">
                                {
                                    viewApplicationDetail.gigDetails.tag.map((value, index) => {
                                        return (<span key={index} className="tag_span">{value}</span>)
                                    })
                                }
                            </div>
                        </div>
                        <div className="clear"></div>
                    </div>}
                    <div className="application_info_div"> 
                        <div className="div_width">
                            <span>Total Applicaton Received:  {viewApplicationDetail.total_application}</span>
                        </div>
                        <div className="div_width">
                            <span>Selected Applicants: {viewApplicationDetail.selected_application}</span>
                        </div>
                        <div className="div_width">
                            <span>Rejected Applications: {viewApplicationDetail.rejected_application}</span>
                        </div>
                    </div>
                </div>
                <Table className="table_div" bordered>
                        <thead>
                            <tr>
                            <th>Applicant #</th>
                            <th>Name</th>
                            <th>Application Link</th>
                            <th>App Status</th>
                            <th>Application Date</th>
                            <th>Take Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>1</td>
                            <td>Lokesh</td>
                            <td><a>Link</a></td>
                            <td>Applied</td>
                            <td>12/12/2019</td>
                            <td>Selected | Rejected</td>
                            </tr>
                            <tr>
                            <td>2</td>
                            <td>Deepali</td>
                            <td><a>Link</a></td>
                            <td>Selected</td>
                            <td>20/12/2019</td>
                            <td>Selected | Rejected</td>
                            </tr>
                            <tr>
                            <td>3</td>
                            <td>Kamal</td>
                            <td><a>Link</a></td>
                            <td>Selected</td>
                            <td>22/12/2019</td>
                            <td>Selected | Rejected</td>
                            </tr>
                        </tbody>
                    </Table>
            </div>
        )
    })


export default ViewApplication;