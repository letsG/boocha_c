import React, {Component} from 'react';

class ProjectAdd extends Component{
    render(){
        return(
            <div className="project-add">
                <h1>Создать проект</h1>
                <p>
                    Опишите себя и проект. Чем ярче и понятнее у вас получиться представить проект, тем вероятность получения общественной
                    поддержки будет больше Опишите себя и проект. Чем ярче и понятнее у вас получиться представить проект,
                    тем вероятность получения общественной поддержки будет больше
                </p>
                <div className="form">
                    <label htmlFor="#author">Автор проекта</label>
                    <input type="text" id={'author'}/>
                    <input type="text"/>
                    <input type="text"/>
                    <input type="text"/>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    <button>Сохранить</button>
                    <button>Отмена</button>
                </div>
            </div>
        )
    }
}

export default ProjectAdd;