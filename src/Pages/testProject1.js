import React from 'react';
import Project1 from '../Assets/img/project1.png'
import Leonov from '../Assets/img/leonov.jpg'
import '../Pages/style.css'
import {Link} from 'react-router-dom'
const testPage = () => {
    return (
        <div className="testPage">
            <Link to={'/'}><span className="close"></span></Link>
            <h1>Tagan</h1>
            <h2>О проекте</h2>
            <div className="about"><span>
            Проект позволяет узнавать онлайн о городских проблемах и писать об этом в соц. сетях. Благодаря разработке каждый может узнать о том, что произошло в конкретной части города, отследить загруженности трасс и другие важные моменты жизни в Таганроге.
            </span></div>
            <img src={Project1} alt="image" width="780px"/><div className="payment">
            <iframe
                src="https://money.yandex.ru/quickpay/shop-widget?writer=seller&targets=Перевести на развитие проекта&targets-hint=&default-sum=&button-text=14&hint=&successURL=&quickpay=shop&account=410018036024265"
                width="423" height="222" frameBorder="0" allowTransparency="true" scrolling="no">
            </iframe></div>
            <div className="avatar">
                <img src={Leonov} alt="image" width="220px" height="300px"/></div>
                <div className="author">
                    <p className="name">Никита Леонов</p>
                    <p className="description">Разработчик</p>
            </div>
        </div>
    )
}

export default testPage;