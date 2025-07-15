// AnimatedNumber.jsx
import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

const AnimatedNumber = ({ value, duration = 2 }) => {
  const count = useMotionValue(0);
  const spring = useSpring(count, { duration, stiffness: 80, damping: 20 });
  const rounded = useTransform(spring, (latest) => Math.round(latest));

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      count.set(value);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
    </span>
  );
};

export default AnimatedNumber;
