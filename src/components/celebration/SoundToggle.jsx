"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Volume2, VolumeX } from "lucide-react"; // ✅ Install lucide-react if not installed: npm install lucide-react

export default function SoundToggle({ isMuted, onToggle }) {
  return (
    <motion.button
      onClick={onToggle}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.2 }}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        background: "#fff",
        borderRadius: "50%",
        width: "60px",
        height: "60px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
        cursor: "pointer",
        zIndex: 200,
      }}
    >
      {isMuted ? (
        <VolumeX size={30} color="#ff4081" />
      ) : (
        <Volume2 size={30} color="#32CD32" />
      )}
    </motion.button>
  );
}
