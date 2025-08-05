"use client";

import { useState } from "react";
import CandleStage from "./celebration/CandleStage";
import MainStage from "./celebration/MainStage";

export default function CelebrationScreen() {
  const [stage, setStage] = useState("candle"); // stages: candle -> main

  return (
    <>
      {stage === "candle" && <CandleStage onBlow={() => setStage("main")} />}
      {stage === "main" && <MainStage />}
    </>
  );
}
