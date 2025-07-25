// Advantages.jsx
import bullet from "../../assets/icons/bullet.svg";
import hero from "../../assets/images/monkey2.svg";
import "./Advantages.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Advantages = () => {
  return (
    <div className="advantages-page">
      <div className="main-container">
        <div className="advantages-container">
          <h1 data-aos="fade-up" data-aos-duration="1000">
            <span>BAYC-PAY</span> - универсальный
          </h1>
          <div className="ads-text" data-aos="fade-up" data-aos-duration="1000">
            <h1>платежный сервис</h1>
            <p>
              <span>Надежное и простое решение,</span> которое отвечает всем
              потребностям онлайн-бизнеса
            </p>
          </div>

          <div className="ad-hero-container">
            <div className="left-ads">
              <div className="l-ads-1" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
                <p>Инновации, адаптированные под бизнес</p>
                <img src={bullet} alt="" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300"/>
              </div>
              <div className="l-ads-2" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">
                <p>
                  Надёжность и безопасность<br />
                  <span>
                    Сильный акцент на защиту транзакций и соответствие требованиям
                    юрисдикций.
                  </span>
                </p>
                <img src={bullet} alt="" />
              </div>
            </div>

            <div className="center-ads" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="100">
              <div className="outter-circle">
                <div className="inner-circle">
                  <div className="main-circle">
                    <img src={hero} alt="hero" className="hero-ad" />
                  </div>
                </div>
              </div>
            </div>

            <div className="right-ads">
              <div className="ads-r1" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="400">
                <img src={bullet} alt="" />
                <p>
                  Широкая география<br />
                  <span>
                    Работаем в десятках стран, включая рынки с ограниченным доступом к
                    традиционным банкам.
                  </span>
                </p>
              </div>
              <div className="ads-r2" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="400">
                <img src={bullet} alt="" />
                <p>
                  Персональный подход<br />
                  <span>
                    Гибкие решения под конкретные ниши и бизнес-модели.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;