import React,{Component} from 'react';
import {HashRouter,Route,Switch} from 'react-router-dom';
import DefaultLayout from './layouts/defaultLayout/defaultLayout';
import LoginUsers from './layouts/LoginUsers/LoginUsers';
export default class RouterWrap extends Component {
    render() {
        return (
            <div id="router">
                <HashRouter>
                    <Switch>
                        <Route path="/" component={DefaultLayout} exact/>
                        <Route path="/login" component={LoginUsers}/>
                    </Switch>
                </HashRouter>
            </div>
        )
    }

}