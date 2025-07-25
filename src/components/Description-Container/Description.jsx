import { motion } from "framer-motion";
import hero from "../../assets/images/hero.svg";
import "./Description.css";
import ScrollText from "./ScrollText";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Description = () => {
    return (
        <div className="description-page">
            <div className="main-container">
                <div className="description-container">
                    <p className="description-1" data-aos="fade-right" data-aos-duration="1000">
                        <span>BAYC-PAY</span> — это надёжный партнёр для компаний и частных клиентов, ищущих быстрые способы приёма и отправки платежей по всему миру.
                    </p>

                    <img src={hero} alt="hero" className="description-image" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000" loading="eager" />

                    <p className="description-2" data-aos="fade-left" data-aos-duration="1000">
                        Обеспечивая уверенность и безопасность на каждом этапе вашего финансового пути<br /><br />
                        Мы предлагаем инновационные платежные решения, которые открывают новые возможности для вашего бизнеса и личных финансов. Команда экспертов позаботится о защите ваших интересов и безопасности транзакций.
                    </p>
                </div>
            </div>
            <ScrollText />
        </div>
    );
};

export default Description;
