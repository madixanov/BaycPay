import china from "../../assets/flags/china.svg";
import uzbekistan from "../../assets/flags/uzbekistan.svg";
import denmark from "../../assets/flags/denmark.svg";
import europe from "../../assets/flags/europe.svg";
import france from "../../assets/flags/france.svg";
import russia from "../../assets/flags/russia.svg";
import sweden from "../../assets/flags/sweden.svg";
import turkey from "../../assets/flags/turkey.svg";
import uae from "../../assets/flags/uae.svg";
import uruguay from "../../assets/flags/urugay.svg"; // Исправлено

import "./Countries.css";
import { motion } from "framer-motion";

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
  uruguay,
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
          Наша цель — упростить глобальные онлайн-платежи, где бы вы ни находились.
          <br />
          От США и Европы до Азии и Южной Америки. Мы работаем там, где другим сложно.
        </p>
      </div>

      <div className="marquee-wrapper">
        <motion.div
          className="marquee-track"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          {[...flags, ...flags].map((flag, index) => (
            <div className="marquee-item" key={index}>
              <img src={flag} alt={`flag-${index}`} className="flag" />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="marquee-wrapper">
        <motion.div
          className="marquee-track reverse"
          animate={{ x: ["0%", "100%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
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
