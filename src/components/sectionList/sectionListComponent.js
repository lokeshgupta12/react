import React, {useState, useEffect} from 'react';
import './sectionListComponent.css';
import { filterSearchResult } from '../../service'
import SearchComponent from '../searchComponent/searchComponent'
import axios from 'axios'
import { withRouter } from "react-router";

const GigLists = React.memo(props => {
    const [listValue, setListValue] =  useState([])
    
    const setsearchValue = (searchInput) => {
        axios.get('/mockJson/mockListData.json').then ((response) => {
                const filteredValue = filterSearchResult(response.data, searchInput.toLowerCase())
                setListValue(filteredValue)
            }).catch((rej) => {
                //console.log(rej)
            })
        
    }
    
    useEffect(() => {
        axios.get('/mockJson/mockListData.json').then ((response) => {
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

    const changeHandler = (e) => {
        if(e.target.value == 1) {
            listValue.sort((a, b) => {
                return a.postedHour - b.postedHour
            })
        } else {
            listValue.sort((a, b) => {
                return b.postedHour - a.postedHour
            })
        }
        const sortArray = [ ...listValue ]
        setListValue(sortArray)
    }
   
    const redirectToViewGig = () => {
        props.history.push("/myGig")
    }
    const applyGig = (event, id) => {
        let route = '/applyGig/' + id
        props.history.push(route)
    }
    const routeonDetailPage = (e, id) => {
        const route = '/gigDetails/' + id
        props.history.push(route)
    }

    const listRender = listValue.map((value, index) => {
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
                                <span className="application_value_class set_postion">{value.gig_status}</span>
                            </div>
                            {/* <div className="left_div">
                                <svg className="tag_class" width="25" height="25"  viewBox="0 0 20 20">
                                    <path d="M10,1.375c-3.17,0-5.75,2.548-5.75,5.682c0,6.685,5.259,11.276,5.483,11.469c0.152,0.132,0.382,0.132,0.534,0c0.224-0.193,5.481-4.784,5.483-11.469C15.75,3.923,13.171,1.375,10,1.375 M10,17.653c-1.064-1.024-4.929-5.127-4.929-10.596c0-2.68,2.212-4.861,4.929-4.861s4.929,2.181,4.929,4.861C14.927,12.518,11.063,16.627,10,17.653 M10,3.839c-1.815,0-3.286,1.47-3.286,3.286s1.47,3.286,3.286,3.286s3.286-1.47,3.286-3.286S11.815,3.839,10,3.839 M10,9.589c-1.359,0-2.464-1.105-2.464-2.464S8.641,4.661,10,4.661s2.464,1.105,2.464,2.464S11.359,9.589,10,9.589"></path>
                                </svg>
                                <span className="application_value_class set_postion">{value.location}</span>
                            </div> */}
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
                <div className="apply_heart_div">
                {/* <button className="apply_class">Apply</button> */}
                    <button className="apply_class" onClick={(event) => applyGig(event, value.listId)}>Apply</button>
                </div>
                <div className="save_heart_div">
                    <button className="save_class">
                    <svg className="heart_svg_icon" width="18" height="18" viewBox="0 0 20 20">
                        <path d="M9.719,17.073l-6.562-6.51c-0.27-0.268-0.504-0.567-0.696-0.888C1.385,7.89,1.67,5.613,3.155,4.14c0.864-0.856,2.012-1.329,3.233-1.329c1.924,0,3.115,1.12,3.612,1.752c0.499-0.634,1.689-1.752,3.612-1.752c1.221,0,2.369,0.472,3.233,1.329c1.484,1.473,1.771,3.75,0.693,5.537c-0.19,0.32-0.425,0.618-0.695,0.887l-6.562,6.51C10.125,17.229,9.875,17.229,9.719,17.073 M6.388,3.61C5.379,3.61,4.431,4,3.717,4.707C2.495,5.92,2.259,7.794,3.145,9.265c0.158,0.265,0.351,0.51,0.574,0.731L10,16.228l6.281-6.232c0.224-0.221,0.416-0.466,0.573-0.729c0.887-1.472,0.651-3.346-0.571-4.56C15.57,4,14.621,3.61,13.612,3.61c-1.43,0-2.639,0.786-3.268,1.863c-0.154,0.264-0.536,0.264-0.69,0C9.029,4.397,7.82,3.61,6.388,3.61"></path>
                    </svg>Bookmark</button>
                </div>
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
                            getSearchedValue={setsearchValue}
                    >
                    </SearchComponent>
                </div>
           
              {/* <input type="text" className="list_search_box" placeholder=" search with keywords"/>{' '}{' '}{' '}{' '}
                <div className="arrow_div">
                    <svg className="arrow_icon" height="30" viewBox="0 0 16 16" width="30" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.707 13.707l5-5c0.391-0.39 0.391-1.024 0-1.414l-5-5c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l3.293 3.293h-9.586c-0.552 0-1 0.448-1 1s0.448 1 1 1h9.586l-3.293 3.293c-0.195 0.195-0.293 0.451-0.293 0.707s0.098 0.512 0.293 0.707c0.391 0.391 1.024 0.391 1.414 0z" />
                    </svg>
                </div> */}
                <div className="saved_div">
                  {/* <img className= "saved_img" src="/images/savedImage.png" /> */}
                  {/* <svg className="saved_img" width="80" height="80" viewBox="0 0 20 20">
                        <path d="M9.719,17.073l-6.562-6.51c-0.27-0.268-0.504-0.567-0.696-0.888C1.385,7.89,1.67,5.613,3.155,4.14c0.864-0.856,2.012-1.329,3.233-1.329c1.924,0,3.115,1.12,3.612,1.752c0.499-0.634,1.689-1.752,3.612-1.752c1.221,0,2.369,0.472,3.233,1.329c1.484,1.473,1.771,3.75,0.693,5.537c-0.19,0.32-0.425,0.618-0.695,0.887l-6.562,6.51C10.125,17.229,9.875,17.229,9.719,17.073 M6.388,3.61C5.379,3.61,4.431,4,3.717,4.707C2.495,5.92,2.259,7.794,3.145,9.265c0.158,0.265,0.351,0.51,0.574,0.731L10,16.228l6.281-6.232c0.224-0.221,0.416-0.466,0.573-0.729c0.887-1.472,0.651-3.346-0.571-4.56C15.57,4,14.621,3.61,13.612,3.61c-1.43,0-2.639,0.786-3.268,1.863c-0.154,0.264-0.536,0.264-0.69,0C9.029,4.397,7.82,3.61,6.388,3.61"></path>
                    </svg> */}
                    <div className="heart_div" onClick={redirectToViewGig}>
                    <svg className="saved_img" xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="#0d60a2" viewBox="0 0 24 24"><path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z"/></svg>
                  <span className="saved_text">Saved GIGs</span>
                  
                    </div>
                    <label className="sort_label" htmlFor="GIGs">Sort By</label>
                    <select className="select_class" name="GIGs" id="GIGs" onChange={changeHandler}>
                        <option value="1">Date Asc</option>
                        <option value="-1">Date Desc</option>
                    </select>
                </div>
            </div>
            {listRender}
        </React.Fragment>
    )
})

export default withRouter(GigLists);