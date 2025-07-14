import { motion } from "framer-motion";
import china from "../../assets/flags/china.svg";
import uzbekistan from "../../assets/flags/uzbekistan.svg";
import denmark from "../../assets/flags/denmark.svg";
import europe from "../../assets/flags/europe.svg";
import france from "../../assets/flags/france.svg";
import russia from "../../assets/flags/russia.svg";
import sweden from "../../assets/flags/sweden.svg";
import turkey from "../../assets/flags/turkey.svg";
import uae from "../../assets/flags/uae.svg";
import urugay from "../../assets/flags/urugay.svg";
import "./Countries.css";

const flags = [
  china,
  uzbekistan,
  denmark,
  europe,
  france,
  russia,
  sweden,
  turkey,
  uae,
  urugay,
];

const countryNames = [
  "Европа",
  "Страны СНГ",
  "Россия",
  "Африка",
  "Южная Америка",
  "Азия",
];

const Countries = () => {
  return (
    <div className="countries-container">
      <div className="countries-text">
        <h1>Мы объединяем мир</h1>
        <p>
          Наша цель — упростить глобальные онлайн-платежи, где бы вы ни
          находились. От США и Европы до Азии и Южной Америки. Мы работаем там,
          где другим сложно.
        </p>
      </div>

      {/* ⚐ Флаги — бесшовная анимация влево */}
      <div className="marquee-wrapper">
        <motion.div
          className="marquee-track"
          animate={{ x: "-50%" }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            duration: 30,
          }}
        >
          {[...flags, ...flags].map((flag, index) => (
            <div className="marquee-item" key={index}>
              <img src={flag} alt={`flag-${index}`} className="flag"/>
            </div>
          ))}
        </motion.div>
      </div>

      {/* 🌍 Названия — бесшовная анимация вправо */}
      <div className="marquee-wrapper">
        <motion.div
          className="marquee-track reverse"
          animate={{ x: ["-50%", "0"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            duration: 30,
          }}
        >
          {[...countryNames, ...countryNames].map((name, index) => (
            <div className="marquee-country" key={index}>
              {name}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Countries;
