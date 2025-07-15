import "./ContactUs.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const ContactUs = () => {
    return (
        <div className="contact-us-page">
            <div className="main-container">
                <div className="contact-us-container" data-aos="zoom-in" data-aos-duration="1000">
                    <h1>Есть вопросы?</h1>
                    <p>Оставьте заявку — в течении 15 минут, мы предложим решение,<br /> которое точно подходит вашему бизнесу.</p>
                    <div className="fields-row">
                        <input type="text" placeholder="Ваше имя"/>
                        <input type="text" placeholder="Ник в Telegram"/>
                        <input type="text" placeholder="Ваш e-maIL"/>
                        <button className="contact-btn">Связаться с нами</button>
                    </div>
                    <div className="rules">
                        <input type="checkbox" />
                        <p>Даю <a href="">согласие</a> на обработку персональных данных</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;