import React from 'react';
import Form from '../../components/Form/index'

const ProjectAdd = () => {
   const data = [
        {'id': 'author', 'type': 'text', 'label': 'Автор проекта', 'className': 'input', 'required': true},
        {'id': 'phone', 'type': 'text', 'labe</Modal>l': 'Номер телефона', 'className': 'input', 'required': true},
        {'id': 'vk', 'type': 'text', 'label': 'Вконтакте', 'className': 'input', 'required': true},
        {'id': 'instagram', 'type': 'text', 'label': 'Инстаграм', 'className': 'input'},
        {'id': 'productName', 'type': 'text', 'label': 'Название преокта', 'className': 'input', 'required': true},
        {'id': 'amount', 'type': 'text', 'label': 'Сумма', 'className': 'input', 'required': true},
        {'id': 'productDescription', 'type': 'textarea', 'label': 'Описание проекта', 'className': 'input', 'required': true},
        {'id': 'confirm', 'type': 'button', 'label': null, 'className': 'input', 'value': 'Сохранить', 'required': false},
        {'id': 'cancel', 'type': 'button', 'label': null, 'className': 'input', 'value': 'Отмена', 'required': false},
        // {'id': 'formLink', 'type': 'text', 'label': 'Код формы'},
    ];
    return (
        <div className="project-add">
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