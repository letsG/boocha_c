import React, {Component} from 'react';
import Input from '../../components/Input/index'


class AddForm extends Component {
    state = {

    };
    data = [
        {'id': 'author', 'type': 'text', 'label': 'Автор проекта', 'className': 'input'},
        {'id': 'phone', 'type': 'text', 'label': 'Номер телефона', 'className': 'input'},
        {'id': 'vk', 'type': 'text', 'label': 'Вконтакте', 'className': 'input'},
        {'id': 'instagram', 'type': 'text', 'label': 'Инстаграм', 'className': 'input'},
        {'id': 'productName', 'type': 'text', 'label': 'Название преокта', 'className': 'input'},
        {'id': 'amount', 'type': 'text', 'label': 'Сумма', 'className': 'input'},
        {'id': 'productDescription', 'type': 'textarea', 'label': 'Описание проекта', 'className': 'input'},
        {'id': 'confirm', 'type': 'button', 'label': null, 'className': 'input', 'value': 'Сохранить'},
        {'id': 'cancel', 'type': 'button', 'label': null, 'className': 'input', 'value': 'Отмена'},
        // {'id': 'formLink', 'type': 'text', 'label': 'Код формы'},
    ];
    onChange = (e) => {
        let {id, value} = e.target;
        this.setState({...this.state, [id]:value})
    };
    onClick = (e) => {
        let {id} = e.target;
        if(id==='confirm'){
            let data = this.data.filter(x => x.type !='button');
            let obj = Object.assign({}, this.state);
            data.forEach(item => {_id
               if(!obj[item.id]){
                   alert('Fill up the fields!');
                   this.setState({state:{}});
               }
            });
            console.log('@@@OBJECT',obj);
            console.log('@@@', data)
        }else if(id==='cancel'){

        }else {}
    };

    render() {
        console.log('@@@',this.state);
        return (
            <form className="form">
                {this.data.map((item, index) => {
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