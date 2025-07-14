import "./ContactUs.css";

const ContactUs = () => {
    return (
        <div className="contact-us-container">
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
    )
}

export default ContactUs;