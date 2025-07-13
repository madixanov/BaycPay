import { motion } from "framer-motion";
import logo1 from "../../assets/brands/logo1.svg";
import logo2 from "../../assets/brands/logo2.svg";
import logo3 from "../../assets/brands/logo3.svg";
import logo4 from "../../assets/brands/logo4.svg";
import "./BrandsScroll.css";

const logos = [logo1, logo2, logo3, logo4];

const BrandsScroll = () => {
  return (
    <div className="brands-scroll-container">
      <motion.div
        className="brands-track"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
      >
        {[...logos, ...logos].map((logo, index) => (
          <div className="brand-logo" key={index}>
            <img src={logo} alt={`brand-${index}`} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default BrandsScroll;
