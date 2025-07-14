import "./Offer.css";
import box from "../../assets/icons/box.svg";
import graph from "../../assets/icons/graph.svg";
import pc from "../../assets/icons/pc.svg";
import tasks from "../../assets/icons/tasks.svg";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Offer = () => {
    return (
        <div className="offer-container">
            <h1 data-aos="fade-up" data-aos-duration="1000">С кем мы работаем</h1>
            <div className="container-grid">
                <div className="left-main-container" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
                    <img src={box} alt="" className="logo"/>
                    <div className="container-text">
                        <h3>Цифровые товары</h3>
                        <p><span>удобство оплаты на сайте,</span> приобретение программ, статей, баннеров, любых других информационных продуктов </p>
                    </div>
                </div>
                <div className="right-main-container">
                    <div className="upper-sub-container">
                        <div className="upper-container" data-aos="fade-down-right" data-aos-duration="1000" data-aos-delay="100">
                            <img src={pc} alt="" className="logo"/>
                            <div className="container-text">
                                <h3>Дейтинг-сайты</h3>
                                <p>покупка дополнительных привилегий, расширение возможностей при помощи онлайн-оплаты</p>
                            </div>
                        </div>
                        <div className="upper-container" data-aos="fade-down-left" data-aos-duration="1000" data-aos-delay="100">
                            <img src={graph} alt="" className="logo" />
                            <div className="container-text invest">
                                <h3>Инвестиционные<br /> проекты</h3>
                                <p>для владельцев стартапов, коммерческих, экономических, финансовых проектов отдельное решение по приему платежей</p>
                            </div>
                        </div>
                    </div>
                    <div className="down-sub-container" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                        <img src={tasks} alt="" className="logo" />
                        <div className="container-text-1">
                            <h3>А также</h3>
                            <div className="columns-row">
                                <ul>
                                    <li>Igaming</li>
                                    <li>Маркетинг</li>
                                    <li>Путешествия</li>
                                    <li>High risk</li>
                                </ul>
                                <ul>
                                    <li>Заказ по почте / телефону</li>
                                    <li>Онлайн-ритейл</li>
                                    <li>Гороскоп</li>
                                    <li>Фриланс</li>
                                </ul>
                                <ul>
                                    <li>Телемаркетинг</li>
                                    <li>Беттинг</li>
                                    <li>Контент 18+</li>
                                    <li>Форекс</li>
                                </ul>
                                <ul>
                                    <li>Телекоммуникации</li>
                                    <li>Онлайн-торговля<br /> предметами искусства</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Offer;