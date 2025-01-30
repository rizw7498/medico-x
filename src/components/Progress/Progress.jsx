import React, { useState, useEffect } from "react";
import "./Progress.css";

const Progress = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollPercentage(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
    className="scroll-progress-bar"
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: `${scrollPercentage}%`,
      height: "4px", // Reduced height for mobile
      background: "linear-gradient(90deg, #3498db, #4CAF50)", // Gradient for visibility
      transition: "width 0.2s ease-out",
      zIndex: 9999,
      boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
      overflow: "hidden",
      }}
    />
  );
};

export default Progress;
