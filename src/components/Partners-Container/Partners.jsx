import "./Partners.css"
import partners from "../../assets/images/partners.svg"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Partners = () => {
    return (
        <div className="partners-page">
            <div className="main-container">
                <div className="partners-container" >
                    <h1>Предоставляем работу<br />
                    через <span>платежные системы:</span></h1>
                    <div className="partners">
                        <div className="container" data-aos="zoom-in" data-aos-duration="1000">
                            <p>Южная Америка:</p>
                            <img src={partners} alt="partners" />
                        </div>
                        <div className="container" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="100">
                            <p>Азия:</p>
                            <img src={partners} alt="partners" />
                        </div>
                        <div className="container" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200">
                            <p>Европа:</p>
                            <img src={partners} alt="partners" />
                        </div>
                        <div className="container" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300">
                            <p>Страны СНГ:</p>
                            <img src={partners} alt="partners" />
                        </div>
                        <div className="container" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="400">
                            <p>Россия:</p>
                            <img src={partners} alt="partners" />
                        </div>
                        <div className="container" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="500">
                            <p>Африка:</p>
                            <img src={partners} alt="partners" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export  default Partners;