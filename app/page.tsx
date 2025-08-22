"use client";

import { useState, useEffect, useRef, lazy, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import TypedWrapper from "../components/TypedWrapper";
import profilePic from "../public/image/fotokecil.jpg";
import projectPic from "../public/image/projectall.png";
import { motion } from "motion/react";

// Lazy load Particles jika berat
const Particles = lazy(() => import("../components/particles"));

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
        }
      });
    });

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div className={`relative ${isMounted ? "animate-fadeIn" : "opacity-0"}`}>
      <video
        className="absolute top-0 left-0 w-full h-full object-cover transition-all duration-500"
        src="/video/DarkPolygon.mp4"
        autoPlay
        loop
        muted
      />

      <div className="relative z-10 bg-gradient-to-b from-black/40 to-black/80 transition-all duration-500">
        <main className="container mx-auto">
          {/* Hero Section */}
          <section className="flex justify-center items-center p-10 h-screen">
            <div className="backdrop-blur-lg shadow-lg rounded-lg overflow-hidden flex flex-row w-full relative transition-all duration-500 hover:scale-110" style={{height:"450px", opacity:0.9}}>
              {/* Profile Image */}
              <div className="flex justify-center items-center w-1/4">
                <Image src={profilePic} alt="Profile" width={100} height={100} className="rounded-full w-64 h-64 object-cover transition-all duration-500" />
              </div>

              {/* Content */}
              <div className="w-2/4 p-4 flex flex-col justify-between">
                <h1 className="text-6xl font-bold text-soft-brown mb-7 transition-all duration-500">
                  <TypedWrapper strings={["Hello, I'm Fikaru.", "Welcome!", "Let's Collaborate!"]} typeSpeed={70} backSpeed={60} loop />
                </h1>
                <h2 className="text-6xl font-bold mb-7 text-white text-lg transition-all duration-500">A Backend Developer</h2>
                <p className="mb-8 text-white text-lg transition-all duration-500">
                  I build the backbone of digital experiences...
                </p>

                {/* Button + Particles */}
                <div className="sparkle-button-container">
                  <div className="sparkle-button">
                    <button className="transition-all duration-500" onClick={() => window.location.href="/portofolio"}>
                      Know me More
                    </button>
                  </div>
                  <Suspense fallback={<div>Loading...</div>}>
                    <Particles />
                  </Suspense>
                </div>
              </div>
            </div>
          </section>

          {/* Story Section */}
          <section className="flex items-center p-10 h-screen">
            <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1}} className="w-3/4">
              <motion.h2 initial={{opacity:0, y:-20}} whileInView={{opacity:1, y:0}} transition={{duration:0.5, delay:0.3}} className="text-white text-sm font-semibold uppercase mb-2">A Bit of My Story</motion.h2>
              <motion.h3 initial={{opacity:0, y:-20}} whileInView={{opacity:1, y:0}} transition={{duration:0.5, delay:0.5}} className="text-3xl font-bold text-white mb-4">How it all began</motion.h3>
              <motion.p initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.6, delay:0.8}} className="font-semibold text-white mb-4">
                I grew up with a curious..
              </motion.p>
            </motion.div>
            <motion.div initial={{opacity:0, scale:0.9}} whileInView={{opacity:1, scale:1}} transition={{duration:0.6}} className="w-1/4 m-12">
              <Image alt="Project" src={projectPic} width={640} height={640} />
            </motion.div>
          </section>
        </main>
      </div>
    </div>
  );
}
