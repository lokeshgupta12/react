import { Switch, Route} from 'react-router-dom';
import HomeComponent from '../components/HomeComponent/homeComponent'
import CreateGig from '../components/createGig/createGig'
import ApplyGig from '../components/gigApply/applyGig'
import GigDetail from '../components/gigDetailsComponent/gigDetails'
import ViewGig from '../components/viewGIg/viewGig'
import ViewApplication from '../components/viewApplication/viewApplication'
import React , {Component }from 'react';

class RouterCompoent extends Component {
    render() {
        return (
            <Switch>
            <Route path="/" exact component={HomeComponent} />
            <Route path="/createGig" exact  component={CreateGig} />
            <Route path="/gigDetails/:gigId" exact  component={GigDetail} />
            <Route path="/applyGig/:gigId" exact  component={ApplyGig} />
            <Route path="/myGig" exact  component={ViewGig} />
            <Route path="/viewApplication/:id" exact  component={ViewApplication} />
            </Switch>
        )
    }
}

export default RouterCompoent;