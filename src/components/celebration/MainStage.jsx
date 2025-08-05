"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import PhotoSlideshow from "./PhotoSlideshow";
import { Volume2, VolumeX } from "lucide-react";

const balloonImages = [
  "/balloons/b1.png",
  "/balloons/b2.png",
  "/balloons/b3.png",
  "/balloons/b4.png",
  "/balloons/b5.png",
  "/balloons/b6.png",
  "/balloons/b7.png",
];

const slides = [
  { image: "/photos/pic (1).jpeg", text: " Today a cute, sweet ,kind hearted woman is celebrating her birthday and that's you🥰🤩😇, Many Many Happy Returns of the day Sahithi ❤️" },
  { image: "/photos/pic (2).jpeg", text: "You came unexpectedly in my life but I never expected that I will get a kind-hearted sister like you. 🌟" },
  { image: "/photos/pic (3).jpeg", text: "You are always special to me. You have a separate place in my heart 💕" },
  { image: "/photos/pic (4).jpeg", text: "You deserve all the happiness in the world. I will always be with you forever. 🎂" },
  { image: "/photos/pic (5).jpeg", text: "Today is your bday so enjoy it to the fullest heartfully and happily.🥳" },
  { image: "/photos/pic (6).jpeg", text: "Have that smile on your face every time 😁, Birthday gaa chicken akada naku🤧😋" },
  { image: "/photos/pic (7).jpeg", text: "Once again Happy Birthday Chinni 💖🐣" },
];

// ✅ Balloons Animation
function Balloons() {
  return (
    <>
      {Array.from({ length: 12 }).map((_, i) => {
        const img = balloonImages[Math.floor(Math.random() * balloonImages.length)];
        const randomLeft = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = 12 + Math.random() * 8;

        return (
          <motion.img
            key={i}
            src={img}
            alt="Balloon"
            initial={{ top: "100vh", opacity: 0 }}
            animate={{ top: "-20vh", opacity: 1 }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "easeOut",
            }}
            style={{
              position: "absolute",
              left: `${randomLeft}%`,
              width: "110px",
              height: "auto",
              opacity: 1,
              filter: "drop-shadow(0 3px 6px rgba(0,0,0,0.4))",
            }}
          />
        );
      })}
    </>
  );
}

// ✅ Continuous Confetti
function Confetti() {
  return (
    <>
      {Array.from({ length: 60 }).map((_, i) => {
        const randomLeft = Math.random() * 100;
        const color = `hsl(${Math.random() * 360}, 80%, 60%)`;
        const rotation = Math.random() * 360;

        return (
          <motion.div
            key={i}
            initial={{ top: "-20px", rotate: rotation }}
            animate={{ top: "100vh", rotate: rotation + 720 }}
            transition={{
              duration: 4 + Math.random() * 4,
              delay: Math.random() * 4,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              position: "absolute",
              left: `${randomLeft}%`,
              width: 8,
              height: 14,
              backgroundColor: color,
              borderRadius: "2px",
            }}
          />
        );
      })}
    </>
  );
}

// ✅ Confetti Burst
function ConfettiBurst() {
  return (
    <>
      {Array.from({ length: 80 }).map((_, i) => {
        const randomX = Math.random() * 100;
        const randomY = Math.random() * 100;
        const color = `hsl(${Math.random() * 360}, 80%, 60%)`;

        return (
          <motion.div
            key={i}
            initial={{ top: "50%", left: "50%", scale: 0 }}
            animate={{
              top: `${randomY}%`,
              left: `${randomX}%`,
              scale: 1,
              opacity: 0,
            }}
            transition={{ duration: 2, ease: "easeOut" }}
            style={{
              position: "absolute",
              width: 10,
              height: 10,
              backgroundColor: color,
              borderRadius: "50%",
              zIndex: 100,
            }}
          />
        );
      })}
    </>
  );
}

// ✅ String Lights
function StringLights() {
  const lightColors = ["#FFD700", "#FF69B4", "#87CEFA", "#32CD32", "#FFA500"];
  const bulbCount = 18;

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        padding: "0 4%",
        zIndex: 10,
      }}
    >
      {Array.from({ length: bulbCount }).map((_, i) => {
        const color = lightColors[Math.floor(Math.random() * lightColors.length)];
        const wireHeight = i % 2 === 0 ? 100 : 70;
        const swayDuration = 3 + Math.random() * 2;

        return (
          <motion.div
            key={i}
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{
              duration: swayDuration,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              transformOrigin: "top center",
            }}
          >
            <div
              style={{
                width: "2px",
                height: `${wireHeight}px`,
                backgroundColor: "#333",
              }}
            />
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{
                duration: 1.2 + Math.random(),
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                width: "28px",
                height: "28px",
                backgroundColor: color,
                borderRadius: "50%",
                boxShadow: `0 0 20px ${color}`,
                marginTop: "0px",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "-10px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "14px",
                  height: "10px",
                  backgroundColor: "#333",
                  borderRadius: "2px",
                }}
              />
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}

// ✅ Name Animation
function NameAnimation({ name, onComplete }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "9px",
        marginTop: "200px",
        zIndex: 20,
        fontFamily: "'Arial Rounded MT Bold', Arial, sans-serif",
        color: "#d63384", // ✅ Updated color
        textShadow: "2px 2px 6px rgba(0,0,0,0.3)",
      }}
    >
      {name.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: index * 0.25,
            type: "spring",
            stiffness: 200,
          }}
          style={{
            fontSize: "62px",
            fontWeight: "700",
          }}
          onAnimationComplete={() => {
            if (index === name.length - 1 && onComplete) {
              onComplete();
            }
          }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
}

export default function MainStage() {
  const [showBurst, setShowBurst] = useState(false);
  const [showSlideshow, setShowSlideshow] = useState(false);
  const [resetTrigger, setResetTrigger] = useState(false);
  const [firstRun, setFirstRun] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    if (!audioRef.current) {
      const audio = new Audio("/birthday.mp3");
      audio.loop = true;
      audio.muted = true;
      audio.play().catch(() => console.log("Autoplay blocked"));
      audioRef.current = audio;
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  const toggleSound = () => {
    if (audioRef.current) {
      const newMutedState = !isMuted;
      setIsMuted(newMutedState);
      audioRef.current.muted = newMutedState;
      if (!newMutedState) {
        audioRef.current.play().catch(() => console.log("Play blocked"));
      }
    }
  };

  const restartSequence = () => {
    setShowSlideshow(false);
    setShowBurst(false);
    setTimeout(() => setResetTrigger((prev) => !prev), 500);
  };

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
        background: "linear-gradient(to bottom, #fff8f0, #ffe4e6)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <StringLights />
      <Balloons />
      <Confetti />
      {showBurst && <ConfettiBurst />}

      <AnimatePresence>
        {!showSlideshow && (
          <>
            <motion.img
              key="banner"
              src="/banner.png"
              alt="Happy Birthday"
              style={{
                width: "350px",
                position: "absolute",
                top: "150px",
              }}
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              key="name-animation"
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <NameAnimation
                key={resetTrigger}
                name="SAHITHI"
                onComplete={() => {
                  setShowBurst(true);
                  const delay = firstRun ? 40000 : 30000; // ✅ 40s first time, 30s after
                  setTimeout(() => {
                    setShowSlideshow(true);
                    setFirstRun(false);
                  }, delay);
                }}
              />
            </motion.div>

            <motion.img
              key="cake"
              src="/cake1.gif"
              alt="Birthday Cake"
              style={{
                width: "280px",
                marginTop: "30px",
              }}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              exit={{ opacity: 0 }}
            />
          </>
        )}
      </AnimatePresence>

      {showSlideshow && (
        <PhotoSlideshow slides={slides} onComplete={restartSequence} />
      )}

      {/* ✅ Sound Toggle Button */}
      <motion.button
        onClick={toggleSound}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
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
    </div>
  );
}
