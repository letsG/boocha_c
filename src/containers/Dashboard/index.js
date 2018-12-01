import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

import Card from '../../components/Card/index';

import './style.css';


class Dashboard extends Component {
    state = {
        data: []
    };

    componentDidMount() {
        axios.get('http://138.68.156.250/api/v1/projects')
            .then((response) => {
                this.setState({data: response.data._items})
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="dashboard">
                <div className="header">
                    <div className="buttons">
                        <Link to="/project_add">
                            <span id={'newProject'}>
                            <i className="material-icons">
                                add_circle
                            </i>
                            СОЗДАТЬ ПРОЕКТ
                        </span>
                        </Link>
                        <Link to="/login">
                            <span id='login'>
                                <i className="material-icons">
                                    perm_identity
                                </i>
                                ВОЙТИ
                            </span>
                        </Link>
                    </div>
                </div>
                <div className="content">
                    <div className="content-filter">
                        <p>
                            Текущие
                        </p>
                        <p>
                            Завершенные
                        </p>
                    </div>
                    <div className="cards">
                        {this.state.data.map((elem, index) => {
                            return (
                                <Card key={index}
                                      data={this.state.data[index]}
                                />
                            )
                        })}
                    </div>
                </div>
                <div className="footer">
                    <span>Как создать проект</span><span>Boocha Journal</span><span>Правила</span>
                </div>
            </div>
        )
    }
}

export default Dashboard;