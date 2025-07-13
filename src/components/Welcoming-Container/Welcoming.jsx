import "./Welcoming.css";
import hero from "../../assets/images/monkey.svg";

const Welcoming = () => {
  return (
    <div className="welcoming-container">
        <h1 className="welcoming-title">Welcome to <span>BAYC-PAY</span></h1>
        <div className="hero-div">
            <p>Ваш мост между бизнесом и миром финансовых решений</p>
            <img src={hero} alt="Hero Image" />
            <div>
                <span>private limited company</span>
            </div>
        </div>
        <div className="welcoming-contact-us-container">
            <p className="welcoming-contact-us-text">
                Мы предоставляем <span>гибкие и безопасные платёжные решения,</span> которые помогают вашему бизнесу <span>масштабироваться без границ.</span>
            </p>
            <div className="welcoming-contact-us-cont1">
                <div className="welcoming-contact-us-cont2">
                    <button className="welcoming-contact-us-btn">
                        Свяжитесь с нами
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Welcoming;