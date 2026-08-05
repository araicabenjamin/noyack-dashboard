"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [isClicking, setIsClicking] = useState(false);
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    const handleMouseDown = () => {
      setIsClicking(true);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      className="custom-cursor"
      animate={{
        left: position.x,
        top: position.y,
      }}
      transition={{
        duration: 0.15,
        ease: "easeOut",
      }}
    />
  );
};

export default CustomCursor;
