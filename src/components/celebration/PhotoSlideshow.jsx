"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function PhotoSlideshow({ slides, onComplete }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCollage, setShowCollage] = useState(false);

  useEffect(() => {
    if (currentIndex < slides.length) {
      const timer = setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
      }, 10000); // 10 seconds per slide
      return () => clearTimeout(timer);
    } else {
      setShowCollage(true);
      const collageTimer = setTimeout(() => {
        if (onComplete) onComplete();
      }, 10000); // Show collage for 10s
      return () => clearTimeout(collageTimer);
    }
  }, [currentIndex, slides.length, onComplete]);

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 50,
        background: "rgba(255, 248, 240, 0.95)",
        padding: "20px",
      }}
    >
      {!showCollage ? (
        <AnimatePresence mode="wait">
          {slides[currentIndex] && ( // ✅ Safe check to avoid undefined
            <motion.div
              key={slides[currentIndex].image}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                maxWidth: "90%",
                flexWrap: "wrap",
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1.2 }}
            >
              {/* Photo */}
              <motion.img
                src={slides[currentIndex].image}
                alt="Memory"
                style={{
                  maxWidth: "45%",
                  maxHeight: "70vh",
                  borderRadius: "16px",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
                  flexShrink: 0,
                }}
              />

              {/* Text Box */}
              <motion.div
                style={{
                  background: "#fff",
                  borderRadius: "12px",
                  padding: "20px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                  fontSize: "1.2rem",
                  color: "#444",
                  fontFamily: "'Arial Rounded MT Bold', Arial, sans-serif",
                  maxWidth: "40%",
                  lineHeight: "1.6",
                  flexShrink: 1,
                }}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                {slides[currentIndex].text}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "12px",
            padding: "20px",
            width: "100%",
            maxWidth: "900px",
          }}
        >
          {slides.map((slide, i) => (
            <img
              key={i}
              src={slide.image}
              alt={`Memory ${i}`}
              style={{
                width: "100%",
                borderRadius: "12px",
                boxShadow: "0 6px 16px rgba(0,0,0,0.3)",
              }}
            />
          ))}
        </motion.div>
      )}
    </div>
  );
}
