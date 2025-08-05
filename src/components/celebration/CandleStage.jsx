"use client";

import { motion } from "framer-motion";

export default function CandleStage({ onBlow }) {
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        transition: "all 0.8s ease-in-out",
      }}
    >
      {/* Candle */}
      <div style={{ position: "relative", width: "50px", height: "150px" }}>
        {/* Candle body */}
        <div
          style={{
            backgroundColor: "#fff5e1",
            width: "50px",
            height: "150px",
            borderRadius: "10px",
            marginTop: "40px",
          }}
        ></div>

        {/* Flame animation */}
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.1, 0.9, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
          style={{
            width: "30px",
            height: "50px",
            background: "radial-gradient(circle, #ffbb00, #ff6f00)",
            borderRadius: "50% 50% 50% 50%",
            position: "absolute",
            top: "-40px",
            left: "10px",
            filter: "blur(2px)",
          }}
        />
      </div>

      <motion.h1
        style={{ fontSize: "28px", marginTop: "40px" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        Make a wish and blow the candle!
      </motion.h1>

      <motion.button
        onClick={onBlow}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{
          marginTop: "30px",
          padding: "12px 24px",
          fontSize: "18px",
          backgroundColor: "#ff4081",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Blow Candle
      </motion.button>
    </div>
  );
}
