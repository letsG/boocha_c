import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import Modal from 'react-modal';

import Card from '../../components/Card/index';
import Form from '../../components/Form/index'

import './style.css';

const customModalStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    }
};
Modal.setAppElement('#root');


class Dashboard extends Component {
    state = {
        data: [],
        modalIsOpen: false,
        form: 'login',
        formData:{}
    };

    componentDidMount() {
        axios.get('https://c.boocha.io/api/v1/projects')
            .then((response) => {
                this.setState({data: response.data._items})
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    openModal = () => {
        this.setState({form: 'login'});
        this.setState({modalIsOpen: true});
    };

    closeModal = () => {
        this.setState({modalIsOpen: false});
    };
    onRegister = () => {
        this.setState({form:'register'});
    };

    formData = {
        login: [
            {'id': 'email', 'type': 'text', 'label': 'E-mail', 'className': 'input email', 'required': true},
            {'id': 'password', 'type': 'text', 'label': 'Пароль', 'className': 'input password', 'required': true},
            {'id': 'register', 'type': 'button', 'value': 'Регистрация', 'className': 'button register', 'required': false},
            {'id': 'login', 'type': 'button', 'value': 'Вход', 'className': 'button login', 'required': false},
        ],
        register: [
            {'id': 'firstName', 'type': 'text', 'label': 'Имя', 'className': 'input first-name', 'required': true},
            {'id': 'lastName', 'type': 'text', 'label': 'Фамилия', 'className': 'input last-name', 'required': true},
            {'id': 'email', 'type': 'text', 'label': 'E-mail', 'className': 'input email', 'required': true},
            {'id': 'password', 'type': 'text', 'label': 'Пароль', 'className': 'input password', 'required': true},
            {'id': 'confirmPassword', 'type': 'text', 'label': 'Повторно пароль', 'className': 'input password-confirm', 'required': false},
            {'id': 'confirmRegister', 'type': 'button', 'value': 'Зарегестрироваться', 'className': 'button confirm', 'required': false},
        ],
    };

    render() {
        return (
            <div className="dashboard">
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    style={customModalStyles}
                    className="Modal"
                >
                    <Form data={this.formData[this.state.form]}
                          onRegisterClick={this.onRegister}
                          value={this.state.formData}
                    />
                </Modal>
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
                        <Link to="#" onClick={this.openModal}>
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