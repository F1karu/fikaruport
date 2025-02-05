"use client";
import { useState, useEffect } from "react";
import { AlertInfo } from "@/components/alert";

const TestAlert = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setFade(true);
  }, []);

  const handleFadeTransition = () => {
    setFade(false);
    setTimeout(() => {
      setFade(true);
    }, 300);
  };

  return (
    <main
      className={`container mx-auto ${isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transition-all duration-700 ease-in`}
    >
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/video/DarkPolygon.mp4"
        autoPlay
        loop
        muted
        style={{ opacity: 0.5 }}
      />
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 h-screen relative z-100">
        {/* Flex container for title and dropdown */}
        <div className="flex items-center justify-between mb-8"></div>

        <div
          className={`m-10 ${fade ? "opacity-100" : "opacity-0"} transition-opacity duration-700 ease-in-out`}
        >
          <AlertInfo type="info" title="Alert Info">
            Ini adalah alert dengan tipe info
          </AlertInfo>
          <AlertInfo type="success" title="Alert Success">
            Ini adalah alert dengan tipe success
          </AlertInfo>
          <AlertInfo type="warning" title="Alert Warning">
            Ini adalah alert dengan tipe warning
          </AlertInfo>
          <AlertInfo type="danger" title="Alert Danger">
            Ini adalah alert dengan tipe danger
          </AlertInfo>
        </div>
      </div>
    </main>
  );
};

export default TestAlert;
