import "./Header.css";
import baycpayLogo from "../../assets/images/baycpay-logo.svg";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setSCrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setSCrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    })

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <header className={`header ${scrolled ? "scrolled" : "transparent"}`}>
            <div className="header-left">
                <div className="header-burger" onClick={toggleMenu}>
                    {menuOpen ? "✖" : "☰"}
                </div>

                <div className="header-nav-links header-left-links">
                    <p>Кто мы</p>
                    <p>Платежные системы</p>
                    <p>Преимущества</p>
                </div>
            </div>

            <div className="header-logo-container">
                <img src={baycpayLogo} alt="BAYCPAY" />
            </div>

            <div className="header-nav-links header-right-links">
                <p>С кем работаем</p>
                <p>Новости</p>
                <p>Отзывы</p>
                <p>Контакты</p>
            </div>

            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        className="header-mobile-menu"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <p>Кто мы</p>
                        <p>Платежнык системы</p>
                        <p>Преимущества</p>
                        <p>С кем работаем</p>
                        <p>Новости</p>
                        <p>Отзывы</p>
                        <p>Контакты</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
