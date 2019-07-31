import React,{Component} from 'react';
import { BrowserRouter as Router,HashRouter,Route,Switch} from 'react-router-dom';

import LoginForm from './layouts/LoginUsers/LoginUsers';
import Homepage from './layouts/homepage/homepage';
import Label from './layouts/Label/Label';
import Memorandum from './layouts/Memorandum/Memorandum';
import Relevant from './layouts/RelevantConnections/RelevantConnections';
import About from './layouts/about/about';
import Archives from "./layouts/archives/archives"


export default class RouterWrap extends Component {

    render() {
        return (
            <div id="router">
                <Router>
                    <Switch>
                        <Route exact path="/" component={Homepage} />
                        <Route path="/homepage" component={Homepage}/>
                        <Route path="/label" component={Label}/>
                        <Route path="/login" component={LoginForm}/>
                        <Route path="/memorandum" component={Memorandum}/>
                        <Route path="/relevant" component={Relevant}/>
                        <Route path="/about" component={About}/>
                        <Route path="/archives" component={Archives}/>
                    </Switch>
                </Router>
            </div>
        )
    }

}