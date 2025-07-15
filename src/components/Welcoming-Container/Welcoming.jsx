import "./Welcoming.css";
import hero from "../../assets/images/monkey.svg";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Welcoming = () => {
  return (
    <div className="welcoming-container">
        <div className="main-container">
            <div className="welcoming-content">
                <h1 className="welcoming-title" data-aos="fade-up" data-aos-duration="1000">Welcome to <span>BAYC-PAY</span></h1>
                <div className="hero-div" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                    <p>Ваш мост между бизнесом и миром финансовых решений</p>
                    <img src={hero} alt="Hero Image" loading="eager" />
                    <div>
                        <span>private limited company</span>
                    </div>
                </div>
                <div className="welcoming-contact-us-container" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
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
        </div>
    </div>
  );
}

export default Welcoming;