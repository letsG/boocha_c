import React, {Component} from 'react';
import Input from '../../components/Input/index'
import axios from 'axios';

import setAuthToken from '../../utils/setAuthToken';

let arr = [];

class AddForm extends Component {
    fieldsCheck = () => {
        let data = this.props.data.filter(x => x.type !== 'button' && x.required);
        let obj = Object.assign({}, this.state);
        data.forEach(item => {
            if (!obj[item.id]) {
                arr.push(item.label);
            }
        });
        if (arr.length) {
            alert('Please fill up the fields ' + arr);
            return false;
        } else {
            return true;
        }
    };
    state = {};
    onChange = (e) => {
        let {id, value} = e.target;
        this.setState({...this.state, [id]: value})
    };
    onClick = (e) => {
        let {id} = e.target;
        if (id === 'confirm') {
            if (this.fieldsCheck()) {
                let data =
                    {
                        "name": "string",
                        "description": "string",
                        "first_name": "string",
                        "owner": "string",
                        "phone": "string",
                        "social": {
                            "vk": "string",
                            "insta": "string"
                        },
                        "goal": 0,
                        "photos": [],
                        "user": "string",
                        "payment_form": "string",
                        "status": "moderation",
                        "transactions": [],
                        "_id": "string"
                    }
                axios.post('https://c.boocha.io/api/v1/projects', data)
                    .then((response) => {
                        this.props.closeModal();
                        console.log('@@@', response);
                    })
                    .catch(function (error) {
                        alert('Please login')
                    });
            }
        } else if (id === 'cancel') {

        } else if (id === 'register') {
            this.props.onRegisterClick();
        } else if (id === 'login') {
            if (this.fieldsCheck()) {
                let data =
                    {
                        "email": this.state.email.toString(),
                        "password": this.state.password.toString()
                    };
                axios.post('https://c.boocha.io/api/v1/auth/sign-in', data)
                    .then((response) => {
                        this.props.closeModal();
                        console.log('@@@', response);
                        setAuthToken(response.data.access_token);
                        alert('Login completed');
                    })
                    .catch(function (error) {
                        alert('Bad credentials')
                    });
            }
        } else if (id === 'confirmRegister') {
            if (this.fieldsCheck()) {
                let data =
                    {
                        "email": this.state.email.toString(),
                        "password": this.state.password.toString(),
                        "first_name": this.state.firstName.toString(),
                        "last_name": this.state.lastName.toString()
                    };
                axios.post('https://c.boocha.io/api/v1/auth/sign-up', data)
                    .then((response) => {
                        console.log('@@@RESOPONSE', response);
                        this.props.closeModal();
                        alert('Register completed! Please login');
                    })
                    .catch(function (error) {
                        console.log('@@@ERROR', error);
                        alert('Bad credentials')
                    });
            }
        }
    };

    render() {
        return (
            <form className="form">
                {this.props.data.map((item) => {
                    return <Input data={item}
                                  key={item.id}
                                  onChange={this.onChange}
                                  onClick={this.onClick}
                                  value={item.value}
                    />
                })}
            </form>
        )
    }
}

export default AddForm;