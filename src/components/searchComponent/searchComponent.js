import React, {useState}  from 'react';
import { filterSearchResult } from '../../service'
import './searchComponent.css'
import axios from 'axios'
const SearchComponent = React.memo(props =>{

    const [searchInput, setInput] = useState("")
    
        const changeHandler = (e) => {
            setInput(e.target.value)
        }


        const getSearchedData = () => {
            // axios.get('/mockJson/mockListData.json').then ((response) => {
            //     const filteredValue = filterSearchResult(response.data, searchInput.toLowerCase())

            //     if(props.getSearchedValue) {
            //         props.getSearchedValue(filteredValue)
            //     }
            //     //setListValue(response.data)
            // }).catch((rej) => {
            //     //console.log(rej)
            // })
        }

        const clickHandler = () => {
            //getSearchedData()
            props.getSearchedValue(searchInput)
            
        }
        return (
            // <div className="parent_div">
            //     <div className="search_input_div ">
            //         <input type="text" className="search_input"  placeholder={props.placeholder} name={props.name} />
            //     </div>
            //     <div className="button_div">
            //         <button className="search_icon" type="submit"></button>
            //     </div>
            // </div> 
            <div >
            <div className="search_input_div ">
                <input type="text" className="search_input" value={searchInput}  onChange={changeHandler}  placeholder={props.placeholder} name={props.name} />
            </div>
            <div className="button_div">
                <button className={props.classProperty}  onClick={clickHandler}></button>
            </div>
        </div> 
        )
    
})

export default SearchComponent;