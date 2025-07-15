import { motion } from "framer-motion";

const phrases = [
    "• Позвольте нам стать частью вашего финансового успеха",
];

const ScrollText = () => {
    return (
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
    )
}

export default ScrollText;