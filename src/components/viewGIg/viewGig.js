import React, {useState, useEffect} from 'react';
import './viewGig.css';
import SearchComponent from '../searchComponent/searchComponent'
import axios from 'axios'
import { withRouter } from "react-router";

const ViewGig = React.memo(props => {
    const [listValue, setListValue] =  useState([])
    
    const setsearchValue = (searchedData) => {
        setListValue(searchedData)
    }
    
    useEffect(() => {
        axios.get('/mockJson/mockViewGig.json').then ((response) => {
            setListValue(response.data)
        }).catch((rej) => {
            console.log(rej)
        })
    }, [])

    useEffect(() => {
        if(props.gigArray) {
            setListValue(props.gigArray)
            
        }
        
    }, [props.gigArray])


    const routeonDetailPage = (e, id) => {
        const route = '/gigDetails/' + id
        props.history.push(route)
    }

    const redirectToView = (e, id) => {
        const route = '/viewApplication/' + id
        props.history.push(route)
    }

    const listRender = listValue.map((value, index) => {
        const editShow = value.gig_status == "open" && value.created_by_self
        const viewApplication = (value.gig_status == "open" || value.gig_status == "closed" ) && value.created_by_self
        return (
            <div className="list_parent_div" key={value.listId+'row'} >
                {/* <div className="logo_div"><img src={value.titleImageUrl} className="logo_img_class"/></div> */}
                    <div className="info_div">
                        <div>
                            <span className="list_title">{value.title}</span>
                        </div>
                        <div>
                            <div className="left_div">
                                <svg className="svg_class_watch" width="25" height="25" viewBox="0 2 20 20">
                                    <path d="M10.25,2.375c-4.212,0-7.625,3.413-7.625,7.625s3.413,7.625,7.625,7.625s7.625-3.413,7.625-7.625S14.462,2.375,10.25,2.375M10.651,16.811v-0.403c0-0.221-0.181-0.401-0.401-0.401s-0.401,0.181-0.401,0.401v0.403c-3.443-0.201-6.208-2.966-6.409-6.409h0.404c0.22,0,0.401-0.181,0.401-0.401S4.063,9.599,3.843,9.599H3.439C3.64,6.155,6.405,3.391,9.849,3.19v0.403c0,0.22,0.181,0.401,0.401,0.401s0.401-0.181,0.401-0.401V3.19c3.443,0.201,6.208,2.965,6.409,6.409h-0.404c-0.22,0-0.4,0.181-0.4,0.401s0.181,0.401,0.4,0.401h0.404C16.859,13.845,14.095,16.609,10.651,16.811 M12.662,12.412c-0.156,0.156-0.409,0.159-0.568,0l-2.127-2.129C9.986,10.302,9.849,10.192,9.849,10V5.184c0-0.221,0.181-0.401,0.401-0.401s0.401,0.181,0.401,0.401v4.651l2.011,2.008C12.818,12.001,12.818,12.256,12.662,12.412"></path>
                                </svg>
                                <span className="post_class set_postion">Posted:</span>
                                <span className="hour_class set_postion">{value.postedHour} Hour Ago</span>
                            </div>
                            <div className="left_div">
                                <svg className="application_class" xmlns="http://www.w3.org/2000/svg" width="24" height="21" viewBox="0 0 24 21">
                                <path fillRule="evenodd" d="M2 19V6.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V19h1V.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5V19h1V6.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V19h1.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5H2zm8.5-2a.5.5 0 0 0-.5.5V19h4v-1.5a.5.5 0 0 0-.5-.5h-3zm-2-15a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm-6 3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm-6 3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm-6 3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm-6 3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm5 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm-16 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm16-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm-16 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm16-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm-16 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"/>
                                </svg>
                                <span className="application_span_class set_postion">Application:</span>
                                <span className="application_value_class set_postion">{value.gig_application}</span>
                            </div>
                            <div className="left_div">
                                {/* <svg className="tag_class" width="25" height="25"  viewBox="0 0 20 20">
                                    <path d="M10,1.375c-3.17,0-5.75,2.548-5.75,5.682c0,6.685,5.259,11.276,5.483,11.469c0.152,0.132,0.382,0.132,0.534,0c0.224-0.193,5.481-4.784,5.483-11.469C15.75,3.923,13.171,1.375,10,1.375 M10,17.653c-1.064-1.024-4.929-5.127-4.929-10.596c0-2.68,2.212-4.861,4.929-4.861s4.929,2.181,4.929,4.861C14.927,12.518,11.063,16.627,10,17.653 M10,3.839c-1.815,0-3.286,1.47-3.286,3.286s1.47,3.286,3.286,3.286s3.286-1.47,3.286-3.286S11.815,3.839,10,3.839 M10,9.589c-1.359,0-2.464-1.105-2.464-2.464S8.641,4.661,10,4.661s2.464,1.105,2.464,2.464S11.359,9.589,10,9.589"></path>
                                </svg> */}
                                <span className="application_span_class set_postion">Status:</span>
                                <span className="application_value_class set_postion">{value.gig_status}</span>
                            </div>
                            <div className="left_div curson_icon" onClick={(event) => routeonDetailPage(event, value.listId)}>
                                <span className="detail_class set_postion">Detail</span>
                            </div>
                    </div>
                    <div className="tag_div">
                        {
                            value.tag.map((value, index) => {
                                return (<span key={index} className="tag_span">{value}</span>)
                            })
                        }
                    </div>
                </div>
                { value.editable && <div className="apply_heart_div">
                    <button className="apply_class" >Edit</button>
                </div>}
                { value.view_application && <div className="save_heart_div" onClick={(event) => redirectToView(event, value.listId)}>
                    <button className="save_class">View Application</button></div>}
                { value.started && <div className="apply_heart_div">
                    <button className="apply_class" >Start Working</button>
                </div>}
                { value.withdraw && <div className="apply_heart_div">
                    <button className="save_class" >Withdraw</button>
                </div>}
                { value.submit_review && <div className="save_heart_div">
                    <button className="save_class">Submit Application</button></div>}
                <div className="clear"></div>
            </div>
        )
    })
    return (
        <React.Fragment>
            <div className="section_header">
                <div className="list_search_box">
                    <SearchComponent 
                            placeholder="search with keywords" 
                            classProperty="reset_icon"
                            setsearchValue={setsearchValue}
                    >
                    </SearchComponent>
                </div>
            </div>
            {listRender}
        </React.Fragment>
    )
})

export default withRouter(ViewGig);