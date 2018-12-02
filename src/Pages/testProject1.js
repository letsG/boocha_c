import React from 'react';
import Preview from '../Assets/img/project2.png'

const testPage = () => {
    return (
        <div className="testPage">
            <h1>Создание стрит арт рисунка на Толбухина 8</h1>
            <h2>О проекте</h2>
            <span>
                — Очевидно, что если Пример 1 можно было безболезненно описать простым текстом, то Пример 2 намного лучше воспринимается в виде сценария.
                Но если у вас вся функциональность описана в виде юзкейсов, то лучше описывать юзкейсами даже очень простые сценарии, из пары шагов. Пусть ваша спецификация будет в едином стиле.
                — Используйте минимальное количество слов и пунктов, необходимых для однозначного понимания сценария. Если юзкейс получается слишком длинный, возможно, лучше будет разбить его на несколько.
                С очень длинными сценариями, с большим количеством расширений, работать крайне неудобно.
            </span>
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