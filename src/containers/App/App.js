import React, {Component} from 'react';

import {Route, Switch} from "react-router";

import Dashboard from '../../containers/Dashboard/index'
import ProjectAdd from '../../components/ProjectAdd/index'

import './App.css';

class App extends Component {
    render() {
        return (
            <div className='App'>
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
