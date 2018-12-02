import React, {Component} from 'react';

import {Route, Switch, Redirect} from "react-router";

import Dashboard from '../../containers/Dashboard/index'
import ProjectAdd from '../../components/ProjectAdd/index'
import {getStorageItem} from '../../utils/localStorage';
import setAuthToken from '../../utils/setAuthToken';

import './App.css';


const checkAuth = () => {
    const token = getStorageItem('access_token');
    return !!token;
};

const UnAuthRoute = ({component: Component}) => (
    <Route render={props => (
        checkAuth() ? (<Redirect to={{pathname: '/dashboard'}}/>) : (<Component {...props} />)
    )}/>
);

const AuthRoute = ({component: Component}) => (
    <Route render={props => (
        checkAuth() ? (<Component {...props} />) : (<Redirect to={{pathname: '/home'}}/>)
    )}/>
);

if (localStorage.getItem('access_token')) {
    setAuthToken(localStorage.access_token);
}

class App extends Component {
    render() {
        return (
            <div className='App' id={'App'}>
                <div className='main'>
                    <Switch>
                        <Route exact path='/' component={Dashboard}/>
                        <Route exact path='/project_add' component={ProjectAdd}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;
