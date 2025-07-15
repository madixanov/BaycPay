// Statistics.jsx
import "./Statistics.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AnimatedNumber from "./AnimatedNumber";

AOS.init();

const Statistics = () => {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <div className="statistics-container">
      <h1>О нас в цифрах</h1>
      <div className="stats">
        <div className="stats-container" data-aos="fade-up" data-aos-duration="1000">
          <p className="stats-number"><AnimatedNumber value={89} /></p>
          <p className="stats-text">Стран присутствия</p>
        </div>
        <div className="stats-container" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
          <p className="stats-number"><AnimatedNumber value={100} />+</p>
          <p className="stats-text">Успешных проектов</p>
        </div>
        <div className="stats-container" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
          <p className="stats-number"><AnimatedNumber value={15} />+</p>
          <p className="stats-text">Экспертов</p>
        </div>
        <div className="stats-container" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
          <p className="stats-number">24/7</p>
          <p className="stats-text">Поддержка</p>
        </div>
        <div className="stats-container" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
          <p className="stats-number">с 2022</p>
          <p className="stats-text">Года на рынке</p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
