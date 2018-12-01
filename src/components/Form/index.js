import React, {Component} from 'react';
import Input from '../../components/Input/index'


class AddForm extends Component {
    state = {};
    onChange = (e) => {
        let {id, value} = e.target;
        this.setState({...this.state, [id]: value})
    };
    onClick = (e) => {
        let {id} = e.target;
        let arr = [];
        if (id === 'confirm') {
            let data = this.data.filter(x => x.type !== 'button');
            let obj = Object.assign({}, this.state);
            data.forEach(item => {
                if (!obj[item.id]) {
                    arr.push(item.label);
                    console.log('@@@ARRAY', arr)
                }
            });
            alert('Please fill up the fields ' + arr);
        } else if (id === 'cancel') {

        }else {

        }

    };

    render() {

        console.log('@@@', this.props);
        return (
            <form className="form">
                {this.props.data.map((item, index) => {
                    return <Input data={item}
                                  key={index}
                                  onChange={this.onChange}
                                  onClick={this.onClick}
                    />
                })}
            </form>
        )
    }
}

export default AddForm;