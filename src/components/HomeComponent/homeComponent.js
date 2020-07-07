import React , {useState, useRef }from 'react';
import SearchComponent from '../searchComponent/searchComponent'
import AllCategory from '../category/category'
import GigLists from '../sectionList/sectionListComponent'
import { filterSearchResult } from '../../service'
import './homeComponent.css'
import axios from 'axios'

const  HomeComponent =  React.memo(props =>{
    console.log(props)

    const gigRef = useRef(null);
    let [gigArray ,setGigArray] = useState(null)
       const getSearchedValue = (searchInput) => {
           axios.get('/mockJson/mockListData.json').then ((response) => {
                const filteredValue = filterSearchResult(response.data, searchInput.toLowerCase())

                setGigArray(filteredValue)
                gigRef.current.scrollIntoView({ behavior: 'smooth' });
            }).catch((rej) => {
                //console.log(rej)
            })
            
            
       }
    
        return (
            <div>
                <div className="background_change">
                    <div className=" search_category_position">
                        <div className="search_parent_div"> 
                            <SearchComponent  placeholder="What type of GIGs are you looking for" classProperty="search_icon" getSearchedValue={getSearchedValue}></SearchComponent>
                        </div>
                        {/* <AllCategory></AllCategory> */}
                    </div>
                </div>
                <div className="gig_div">
                    <span className="gig_title">FLEXPLORE GIGS MARKETPLACE</span>
                </div>
                <div ref={gigRef}>
                    <GigLists gigArray={gigArray}></GigLists>
                </div>
            </div>
        )
    
})

export default HomeComponent;