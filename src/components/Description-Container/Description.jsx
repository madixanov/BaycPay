import { motion } from "framer-motion";
import hero from "../../assets/images/hero.svg";
import "./Description.css";

const phrases = [
    "• Позвольте нам стать частью вашего финансового успеха",
];

const Description = () => {
    return (
        <div className="description-page">
            <div className="description-container">
                <p className="description-1">
                    <span>BAYC-PAY</span> — это надёжный партнёр для компаний и частных клиентов, ищущих быстрые способы приёма и отправки платежей по всему миру.
                </p>

                <img src={hero} alt="hero" className="description-image"/>

                <p className="description-2">
                    Обеспечивая уверенность и безопасность на каждом этапе вашего финансового пути<br /><br />
                    Мы предлагаем инновационные платежные решения, которые открывают новые возможности для вашего бизнеса и личных финансов. Команда экспертов позаботится о защите ваших интересов и безопасности транзакций.
                </p>
            </div>

            <div className="scroll-text-wrapper">
                <motion.div
                    className="scroll-track"
                    animate={{ x: ["0%", "-100%"] }}
                    transition={{
                        repeat: Infinity,
                        duration: 10,
                        ease: "linear"
                    }}
                >
                    <div className="scroll-content">
                        {[...phrases, ...phrases].map((text, index) => (
                            <span key={index}>{text}</span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Description;
