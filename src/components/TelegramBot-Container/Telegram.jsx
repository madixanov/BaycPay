import "./Telegram.css";
import hero from "../../assets/images/telegram-hero.svg"

const Telegram = () => {
    return (
        <div className="telegram-container">
            <div className="telegram-text">
                <h1>Переходите в наш<br /> закрытый <span>TG-бот</span></h1>
                <p>Где мы ежедневно публикуем оферты в 150+ гео. <br /><span>Оставьте заявку на сайте и получите доступ.</span></p>
                <div className="outer-container">
                    <div className="inner-container">
                        <button className="telegram-btn">
                            Оставить заявку
                        </button>
                    </div>
                </div>
            </div>
            <div className="hero-container">
                <img src={hero} alt="telegram-icon" />
            </div>
        </div>
    )
}

export default Telegram;