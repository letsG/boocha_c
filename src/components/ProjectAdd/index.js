import React from 'react';
import Form from '../../components/Form/index'

const ProjectAdd = () => {
    return (
        <div className="project-add">
            <h1>Создать проект</h1>
            <p>
                Опишите себя и проект. Чем ярче и понятнее у вас получиться представить проект, тем вероятность
                получения общественной поддержки будет больше
            </p>
            <Form/>
        </div>
    )
};

export default ProjectAdd;