import baycpayLogo from '../../assets/images/baycpay-logo.svg';
import fbIcon from '../../assets/icons/fb-icon.svg';
import tgIcon from '../../assets/icons/tg-icon.svg';
import "./Footer.css";
import scrollToId from '../../utils/ScrollToId';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="main-footer">
                <div className='footer-links'>
                    <div className='footer-logo-container'>
                        <img src={baycpayLogo} alt="BaycPay" className="footer-logo" />
                    </div>
                    <div className="footer-left">
                        <p onClick={() => scrollToId("description")}>Кто мы</p>
                        <p onClick={() => scrollToId("brands")}>Платежные системы</p>
                        <p onClick={() => scrollToId("advantages")}>Преимущества</p>
                    </div>
                    <div className="footer-right">
                        <p onClick={() => scrollToId("partners")}>С кем работаем</p>
                        <p onClick={() => scrollToId("statistics")}>Новости</p>
                        <p onClick={() => scrollToId("countries")}>Отзывы</p>
                    </div>
                </div>
                <div className='footer-button-row'>
                    <button className="footer-contact-us-button" onClick={() => scrollToId("contact")}>
                        <span>Связаться с нами</span>
                    </button>
                    <button className='footer-tg-button'>
                        <span>
                            <img src={tgIcon} alt="Telegram" className="footer-tg-icon" />
                        </span>
                    </button>
                    <button className="footer-fb-button">
                        <span>
                            <img src={fbIcon} alt="Facebook" className="footer-fb-icon" />
                        </span>
                    </button>
                </div>
            </div>
            <div className="rules-footer">
                <p>Условия использования</p>
                <p>© BAYC-PAY, 2025 </p>
                <p>Политика конфиденциальности</p>
            </div>
        </footer>
    )
}

export default Footer;