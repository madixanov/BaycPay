import "./Telegram.css";
import hero from "../../assets/images/telegram-hero.svg"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const Telegram = () => {
    return (
        <div className="telegram-page">
            <div className="main-container">
                <div className="telegram-container">
                    <div className="telegram-text">
                        <h1 data-aos="fade-up" data-aos-duration="1000">Переходите в наш<br /> закрытый <span>TG-бот</span></h1>
                        <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">Где мы ежедневно публикуем оферты в 150+ гео. <br /><span>Оставьте заявку на сайте и получите доступ.</span></p>
                        <div className="outer-container" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                            <div className="inner-container">
                                <button className="telegram-btn">
                                    Оставить заявку
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="hero-container" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                        <img src={hero} alt="telegram-icon" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Telegram;