import React from 'react';
import Form from '../../components/Form/index'
import '../ProjectAdd/style.css'
const ProjectAdd = () => {
   const data = [
        {'id': 'author', 'type': 'text', 'label': 'Автор', 'className': 'input author', 'required': true},
        {'id': 'phone', 'type': 'text', 'label': 'Номер телефона', 'className': 'input phone', 'required': true},
        {'id': 'vk', 'type': 'text', 'label': 'Вконтакте', 'className': 'input vk', 'required': true},
        {'id': 'productName', 'type': 'text', 'label': 'Название проекта', 'className': 'input productName', 'required': true},
        {'id': 'amount', 'type': 'text', 'label': 'Сумма', 'className': 'input amount', 'required': true},
        {'id': 'productDescription', 'type': 'textarea', 'label': 'Описание проекта', 'className': 'input productDescription', 'required': true},
        {'id': 'codeform', 'type': 'textarea', 'label': 'Код формы', 'className': 'input codeform', 'required': true},
        {'id': 'confirm', 'type': 'button', 'label': null, 'className': 'button confirm', 'value': 'Сохранить', 'required': false},
        {'id': 'cancel', 'type': 'button', 'label': null, 'className': 'button cancel', 'value': 'Отмена', 'required': false},
        // {'id': 'formLink', 'type': 'text', 'label': 'Код формы'},
    ];
    return (
        <div className="project-add">
        <span class="close"></span>
            <h1>Создать проект</h1>
            <p>
                Опишите себя и проект. Чем ярче и понятнее у вас получиться представить проект, тем вероятность
                получения общественной поддержки будет больше
            </p>
            <Form data={data}/>
        </div>
    )
};

export default ProjectAdd;