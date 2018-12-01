import React from 'react';
import Form from '../../components/Form/index'

const ProjectAdd = () => {
   const data = [
        {'id': 'author', 'type': 'text', 'label': 'Автор проекта', 'className': 'input'},
        {'id': 'phone', 'type': 'text', 'labe</Modal>l': 'Номер телефона', 'className': 'input'},
        {'id': 'vk', 'type': 'text', 'label': 'Вконтакте', 'className': 'input'},
        {'id': 'instagram', 'type': 'text', 'label': 'Инстаграм', 'className': 'input'},
        {'id': 'productName', 'type': 'text', 'label': 'Название преокта', 'className': 'input'},
        {'id': 'amount', 'type': 'text', 'label': 'Сумма', 'className': 'input'},
        {'id': 'productDescription', 'type': 'textarea', 'label': 'Описание проекта', 'className': 'input'},
        {'id': 'confirm', 'type': 'button', 'label': null, 'className': 'input', 'value': 'Сохранить'},
        {'id': 'cancel', 'type': 'button', 'label': null, 'className': 'input', 'value': 'Отмена'},
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