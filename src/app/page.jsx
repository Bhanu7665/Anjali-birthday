"use client";

import { useState } from "react";
import CountdownWithParticles from "@/components/CountdownWithParticles";
import CelebrationScreen from "@/components/CelebrationScreen";

export default function Home() {
  const [showCelebration, setShowCelebration] = useState(false);

  return (
    <div style={{ minHeight: "100vh", overflow: "hidden" }}>
      {!showCelebration ? (
        <CountdownWithParticles
          targetDateString="2025-08-07T00:00:00" // ✅ Set for 7th Aug at midnight
          onCountdownEnd={() => setShowCelebration(true)} // Switch to celebration
        />
      ) : (
        <CelebrationScreen />
      )}
    </div>
  );
}
