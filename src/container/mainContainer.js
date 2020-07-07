
import React, { Component} from 'react'
import PageHeader from '../components/pageHeader/pageHeader'
import RouterCompoent from '../route/route'
import  './mainContainer.css'
class MainContainer extends Component {
   render() {
      return(
          <div>
              <PageHeader></PageHeader>
              <RouterCompoent></RouterCompoent>
          </div>
     )
   }
}
export default MainContainer;