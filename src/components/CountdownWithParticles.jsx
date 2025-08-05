"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Heart, Gift, Cake, Star } from "lucide-react";

// Floating hearts background
function FloatingHearts() {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const colors = ["#ec4899", "#f472b6", "#f9a8d4", "#f87171", "#c084fc", "#d8b4fe"];
    const newHearts = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: 20 + Math.random() * 20,
      duration: 10 + Math.random() * 20,
      delay: Math.random() * 5,
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}>
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          style={{ position: "absolute", left: `${heart.x}%`, top: `${heart.y}%` }}
          animate={{
            y: [0, -30, 0],
            x: [0, 10, -10, 0],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Heart
            style={{
              width: `${heart.size}px`,
              height: `${heart.size}px`,
              color: heart.color,
              opacity: 0.7,
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}

// Calculate remaining time
function calculateTimeLeft(targetDate) {
  const difference = targetDate - new Date();

  if (difference <= 0) {
    return null; // countdown finished
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

export default function CountdownWithParticles({
  targetDateString = "2025-08-07T00:00:00", // ✅ Default set to 7th August 2025
  onCountdownEnd,
}) {
  const targetDate = new Date(targetDateString);
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft(targetDate);
      setTimeLeft(newTimeLeft);

      if (!newTimeLeft) {
        clearInterval(timer);
        if (onCountdownEnd) onCountdownEnd();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, onCountdownEnd]);

  const icons = [
    <Heart key="heart" color="#ec4899" />,
    <Gift key="gift" color="#9333ea" />,
    <Cake key="cake" color="#f43f5e" />,
    <Star key="star" color="#eab308" />,
  ];

  const containerStyle = {
    position: "relative",
    zIndex: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    borderRadius: "20px",
    backgroundColor: "white",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    minWidth: "280px",
  };

  const countdownCardStyle = {
    background: "linear-gradient(to bottom, #fdf2f8, #ede9fe)",
    borderRadius: "15px",
    padding: "12px",
    width: "80px",
    height: "80px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "8px",
    border: "1px solid #fbcfe8",
    boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
  };

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(to bottom, #ffe4e6, #f3e8ff)",
        overflow: "hidden",
      }}
    >
      <FloatingHearts />

      <motion.div
        style={containerStyle}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.h1
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            color: "#db2777",
            marginBottom: "12px",
          }}
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        >
          Your Special Day is Almost Here 💕
        </motion.h1>

        <p style={{ color: "#6b21a8", fontSize: "14px", marginBottom: "16px" }}>
          Counting down to {targetDate.toDateString()} 🎉
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "8px",
          }}
        >
          {timeLeft ? (
            Object.entries(timeLeft).map(([unit, value], index) => (
              <motion.div
                key={unit}
                style={countdownCardStyle}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <div style={{ fontSize: "22px", fontWeight: "bold", color: "#7e22ce" }}>
                  {value}
                </div>
                <div style={{ fontSize: "12px", color: "#db2777", textTransform: "capitalize" }}>
                  {unit}
                </div>
                <div style={{ marginTop: "4px" }}>{icons[index % icons.length]}</div>
              </motion.div>
            ))
          ) : (
            <p style={{ fontSize: "18px", color: "#db2777", fontWeight: "bold" }}>It's time!</p>
          )}
        </div>
      </motion.div>
    </div>
  );
}
