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
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

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
        <h1 data-aos="fade-up" data-aos-duration="1000">Мы объединяем мир</h1>
        <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
          Наша цель — упростить глобальные онлайн-платежи, где бы вы ни находились.<br />
          От США и Европы до Азии и Южной Америки. Мы работаем там, где другим сложно.
        </p>
      </div>

      <div className="marquee-wrapper">
        <div className="marquee-track">
          {[...flags, ...flags].map((flag, index) => (
            <div className="marquee-item" key={index}>
              <img src={flag} alt={`flag-${index}`} className="flag" />
            </div>
          ))}
        </div>
      </div>

      <div className="marquee-wrapper">
        <div className="marquee-track reverse">
          {[...countryNames, ...countryNames].map((name, index) => (
            <div className="marquee-country" key={index}>
              {name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Countries;
