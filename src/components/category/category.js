import React , {Component }from 'react';
import './category.css'

class AllCategory extends Component {
    render() {
        return (
            <div className="all_category_img">
               {/* <div className="img_div" >
                    <img className="duster_img" src='/images/allcategory1.png' />
                </div> */}
                <div className="category_button_div">
                    <button className="category_button">View All Category</button>
                </div>
            </div>    
        )
    }
}

export default AllCategory;