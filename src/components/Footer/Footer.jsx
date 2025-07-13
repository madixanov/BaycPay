import baycpayLogo from '../../assets/images/baycpay-logo.svg';
import fbIcon from '../../assets/icons/fb-icon.svg';
import tgIcon from '../../assets/icons/tg-icon.svg';
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="main-footer">
                <div className='footer-links'>
                    <div className='footer-logo-container'>
                        <img src={baycpayLogo} alt="BaycPay" className="footer-logo" />
                    </div>
                    <div className="footer-left">
                        <p>Кто мы</p>
                        <p>Платежные системы</p>
                        <p>Преимущества</p>
                    </div>
                    <div className="footer-right">
                        <p>С кем работаем</p>
                        <p>Новости</p>
                        <p>Отзывы</p>
                    </div>
                </div>
                <div className='footer-button-row'>
                    <button className="footer-contact-us-button">
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