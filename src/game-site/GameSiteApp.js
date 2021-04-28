import HomeComponent from './HomeComponent'
import HeaderComponent from './HeaderComponent'
import ErrorComponent from './ErrorComponent'
import LoginComponent from './LoginComponent'
import WriteComponent from './WriteComponent'
import AuthenticationRoute from './AuthenticationRoute'
import EntryPageComponent from './EntryPageComponent'

import {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import EssaysComponent from './PageComponents/EssaysComponent'
import ReviewComponent from './PageComponents/ReviewComponent'
import NewsComponent from './PageComponents/NewsComponent'

class GameSiteApp extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="GameSiteApp">
                <Router>
                    <HeaderComponent/>
                    <Switch>
                        <Route path="/" exact component={LoginComponent}/>
                        <Route path="/login" component={LoginComponent}/>
                        <Route path="/home" component={HomeComponent}/>
                        <Route path="/essays" exact component={EssaysComponent}/>
                        <Route path="/reviews" exact component={ReviewComponent}/>
                        <Route path="/news" component={NewsComponent}/>
                        <Route path="/entries/:id" component={EntryPageComponent}/>
                        <AuthenticationRoute path="/write/:id" component={WriteComponent}/>
                        <Route component={ErrorComponent}/>
                    </Switch>
                </Router>
            </div>            
        );
    }
}

export default GameSiteApp;