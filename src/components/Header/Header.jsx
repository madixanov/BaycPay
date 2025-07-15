import "./Header.css";
import baycpayLogo from "../../assets/images/baycpay-logo.svg";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import scrollToId from "../../utils/ScrollToId";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setSCrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setSCrolled(window.scrollY > 1);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    })// не забудь указать menuOpen в зависимости

    useEffect(() => {
        if (menuOpen) {
            document.body.classList.add("no-scroll");
            document.documentElement.classList.add("no-scroll"); // <html>
        } else {
            document.body.classList.remove("no-scroll");
            document.documentElement.classList.remove("no-scroll");
        }

        return () => {
            document.body.classList.remove("no-scroll");
            document.documentElement.classList.remove("no-scroll");
        };
    }, [menuOpen]);





    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <>
            <header className={`${scrolled ? "scrolled" : "transparent"}`}>
                <div className="main-container">
                    <div className={`header`}>
                        <div className="header-left">
                            <div className="header-burger" onClick={toggleMenu}>
                            {menuOpen ? "✖" : "☰"}</div>

                            <div className="header-nav-links header-left-links">
                                <p onClick={() => scrollToId("description")}>Кто мы</p>
                                <p onClick={() => scrollToId("brands")}>Платежные системы</p>
                                <p onClick={() => scrollToId("advantages")}>Преимущества</p>
                            </div>
                        </div>

                        <div className="header-logo-container">
                            <img src={baycpayLogo} alt="BAYCPAY" />
                        </div>

                        <div className="header-nav-links header-right-links">
                            <p onClick={() => scrollToId("partners")}>С кем работаем</p>
                            <p onClick={() => scrollToId("statistics")}>Новости</p>
                            <p onClick={() => scrollToId("countries")}>Отзывы</p>
                            <p onClick={() => scrollToId("contact")}>Контакты</p>
                        </div>
                    </div>
                </div>
            </header>

            <AnimatePresence>
            {menuOpen && (
                <motion.div
                className="header-mobile-menu"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                >
                <p onClick={() => {scrollToId("description"); setMenuOpen(false);}}>Кто мы</p>
                <p onClick={() => {scrollToId("brands"); setMenuOpen(false);}}>Платежные системы</p>
                <p onClick={() => {scrollToId("advantages"); setMenuOpen(false);}}>Преимущества</p>
                <p onClick={() => {scrollToId("partners"); setMenuOpen(false);}}>С кем работаем</p>
                <p onClick={() => {scrollToId("statistics"); setMenuOpen(false);}}>Новости</p>
                <p onClick={() => {scrollToId("countries"); setMenuOpen(false);}}>Отзывы</p>
                <p onClick={() => {scrollToId("contact"); setMenuOpen(false);}}>Контакты</p>
                </motion.div>
            )}
            </AnimatePresence>
        </>
);
}

export default Header;
