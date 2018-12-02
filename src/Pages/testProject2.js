import React from 'react';
import Project2 from '../Assets/img/project2.png'
import Nosov from '../Assets/img/nosov.jpg'
import '../Pages/style.css'
const testPage = () => {
    return (
        <div className="testPage">
        <span class="close"></span>
            <h1>ETraffic</h1>
            <h2>О проекте</h2>
            <div className="about"><span>
            Разрабатываемое приложение позволит отслеживать местоположение общественного транспорта, а также даст возможность быстрой оплаты проезда благодаря считываемым QR-кодам. 

Водители, использующие приложение, смогут отслеживать сколько пассажиров ожидают трамвай или автобус и видеть положение на дорогах своих коллег. 

Управляющие компании смогут отслеживать статистику заработка по каждому из маршрутов и заработка в общем, а также создавать QR-коды.
            </span></div>
            <img src={Project2} alt="image" width="780px"/><div className="payment">
            <iframe
                src="https://money.yandex.ru/quickpay/shop-widget?writer=seller&targets=Перевести на развитие проекта&targets-hint=&default-sum=&button-text=14&hint=&successURL=&quickpay=shop&account=410018036024265"
                width="423" height="222" frameBorder="0" allowTransparency="true" scrolling="no">
            </iframe></div>
            <div className="avatar">
                <img src={Nosov} alt="image" width="250px" height="250px"/></div>
                <div className="author">
                    <p className="name">Сергей Носов</p>
                    <p className="description">Разработчик</p>
            </div>
        </div>
    )
}

export default testPage;