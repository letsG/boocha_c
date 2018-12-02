import React, {Component} from 'react';
import Input from '../../components/Input/index'
import axios from 'axios';


class AddForm extends Component {
    state = {};
    onChange = (e) => {
        let {id, value} = e.target;
        this.setState({...this.state, [id]: value})
    };
    onClick = (e) => {
        let {id} = e.target;
        console.log('@@@', id);
        let arr = [];
        if (id === 'confirm') {
            let data = this.props.data.filter(x => x.type !== 'button' && x.required);
            let obj = Object.assign({}, this.state);
            data.forEach(item => {
                if (!obj[item.id]) {
                    arr.push(item.label);
                }
            });
            alert('Please fill up the fields ' + arr);
        } else if (id === 'cancel') {

        }else if (id === 'register'){
            this.props.onRegisterClick()
        }else if (id === 'login'){
            let data =
                {
                    "email": this.state.email ? this.state.email.toString() : '',
                    "password": this.state.password ? this.state.password.toString() : ''
                };
            console.log('@@@DATA', data);
            axios.post('https://c.boocha.io/api/v1/auth/sign-in', data)
                .then((response) => {
                    console.log('@@@RESOPONSE', response)
                })
                .catch(function (error) {
                    console.log('@@@ERROR', error.response)
                });
        }else if (id === 'confirmRegister'){
            let data =
                {
                    "email": this.state.email ? this.state.email.toString() : '',
                    "password": this.state.password ? this.state.password.toString() : '',
                    "first_name": this.state.firstName ? this.state.firstName.toString() : '',
                    "last_name": this.state.lastName ? this.state.lastName.toString(): ''
                };
            axios.post('https://c.boocha.io/api/v1/auth/sign-up', data)
                .then((response) => {
                    console.log('@@@RESOPONSE', response)
                })
                .catch(function (error) {
                    console.log('@@@ERROR', error)
                });
        }
    };

    render() {
        console.log('@@@',this.state)
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