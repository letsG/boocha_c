import React from 'react';
import Preview from '../Assets/img/preview.png'
import '../Pages/style.css'
const testPage = () => {
    return (
        <div className="testPage">
            <h1>ETraffic</h1>
            <h2>О проекте</h2>
            <div className="about"><span>
            Разрабатываемое приложение позволит отслеживать местоположение общественного транспорта, а также даст возможность быстрой оплаты проезда благодаря считываемым QR-кодам. 

Водители, использующие приложение, смогут отслеживать сколько пассажиров ожидают трамвай или автобус и видеть положение на дорогах своих коллег. 

Управляющие компании смогут отслеживать статистику заработка по каждому из маршрутов и заработка в общем, а также создавать QR-коды.
            </span></div>
            <img src={Preview} alt="image"/>
            <iframe
                src="https://money.yandex.ru/quickpay/shop-widget?writer=seller&targets=Тест&targets-hint=&default-sum=&button-text=14&hint=&successURL=&quickpay=shop&account=410018036024265"
                width="423" height="222" frameBorder="0" allowTransparency="true" scrolling="no">
            </iframe>
            <div className="author-preview">
                <img className='avatar' alt='avatar'/>
                <div className="author">
                    <p className="name"> Никита Сомов </p>
                    <p className="description"> Стрит арт художник </p>
                </div>
            </div>
        </div>
    )
}

export default testPage;