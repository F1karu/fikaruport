"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Particles from "../components/particles"; // Importing the fixed Particles component
import Link from "next/link";
import TypedWrapper from "../components/TypedWrapper";
import profilePic from "../public/image/fotokecil.jpg";
import { motion } from "motion/react"

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Set mounted to true after component mounts
    setIsMounted(true);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
        }
      });
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className={`relative ${isMounted ? "animate-fadeIn" : "opacity-0"}`}>
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover  transition-all duration-500"
        src="/video/DarkPolygon.mp4"
        autoPlay
        loop
        muted
        style={{ opacity: 1 }}
      />

      {/* Main Content */}
      <div className="relative z-10 bg-gradient-to-b from-black/40 to-black/80  transition-all duration-500">
        {/* Hero Section */}
        <main className="container mx-auto">
          <section className="flex justify-center items-center p-10 h-screen">
            <div
              className="backdrop-blur-lg shadow-lg rounded-lg overflow-hidden flex flex-row w-full relative  transition-all duration-500 hover:scale-105"
              style={{ height: "400px", opacity: 0.9 }}
            >
              {/* Arrow Left */}
              <button className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 text-white p-2 rounded-full hover:bg-white/50  transition-all duration-300">
                &#8249;
              </button>

              {/* Image Section */}
              <div className="flex justify-center items-center w-1/4">
                <Image
                  src={profilePic}
                  alt="Profile Picture"
                  width={100}
                  height={100}
                  className="rounded-full w-64 h-64 object-cover  transition-all duration-500 "
                />
              </div>

              {/* Content Section */}
              <div className="w-2/4 p-4 flex flex-col justify-between">
                <h1 className="text-6xl font-bold text-soft-brown mb-7  transition-all duration-500">
                  <TypedWrapper
                    strings={["Hi, I'm Fikaru.", "Welcome!", "Let's Collaborate!"]}
                    typeSpeed={70}
                    backSpeed={60}
                    loop={true}
                  />
                </h1>
                <h2 className="text-6xl font-bold mb-7 text-white text-lg  transition-all duration-500">
                  A Frontend Developer
                </h2>
                <p className="mb-8 text-white text-lg  transition-all duration-500">
                  I craft the digital experiences users see and interact with. From beautiful
                  layouts to responsive designs, I turn ideas into engaging, user-friendly
                  interfaces that work seamlessly across all devices.
                </p>

                {/* New Sparkle Button */}
                <div className="sparkle-button-container">
                  <div className="sparkle-button">
                    <button
                      className=" transition-all duration-500"
                      onClick={() => (window.location.href = "/portofolio")} // Adjust the link as needed
                    >
                      <span className="spark"></span>
                      <span className="backdrop"></span>
                      <svg
                        className="sparkle"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.187 8.096L15 5.25L15.813 8.096C16.0231 8.83114 16.4171 9.50062 16.9577 10.0413C17.4984 10.5819 18.1679 10.9759 18.903 11.186L21.75 12L18.904 12.813C18.1689 13.0231 17.4994 13.4171 16.9587 13.9577C16.4181 14.4984 16.0241 15.1679 15.814 15.903L15 18.75L14.187 15.904C13.9769 15.1689 13.5829 14.4994 13.0423 13.9587C12.5016 13.4181 11.8321 13.0241 11.097 12.814L8.25 12L11.096 11.187C11.8311 10.9769 12.5006 10.5829 13.0413 10.0423C13.5819 9.50162 13.9759 8.83214 14.186 8.097L14.187 8.096Z"
                          fill="black"
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6 14.25L5.741 15.285C5.59267 15.8785 5.28579 16.4206 4.85319 16.8532C4.42059 17.2858 3.87853 17.5927 3.285 17.741L2.25 18L3.285 18.259C3.87853 18.4073 4.42059 18.7142 4.85319 19.1468C5.28579 19.5794 5.59267 20.1215 5.741 20.715L6 21.75L6.259 20.715C6.40725 20.1216 6.71398 19.5796 7.14639 19.147C7.5788 18.7144 8.12065 18.4075 8.714 18.259L9.75 18L8.714 17.741C8.12065 17.5925 7.5788 17.2856 7.14639 16.853C6.71398 16.4204 6.40725 15.8784 6.259 15.285L6 14.25Z"
                          fill="black"
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      <path
                          d="M6.5 4L6.303 4.5915C6.24777 4.75718 6.15472 4.90774 6.03123 5.03123C5.90774 5.15472 5.75718 5.24777 5.5915 5.303L5 5.5L5.5915 5.697C5.75718 5.75223 5.90774 5.84528 6.03123 5.96877C6.15472 6.09226 6.24777 6.24282 6.303 6.4085L6.5 7L6.697 6.4085C6.75223 6.24282 6.84528 6.09226 6.96877 5.96877C7.09226 5.84528 7.24282 5.75223 7.4085 5.697L8 5.5L7.4085 5.303C7.24282 5.24777 7.09226 5.15472 6.96877 5.03123C6.84528 4.90774 6.75223 4.75718 6.697 4.5915L6.5 4Z"
                          fill="black"
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>

                      <span className="text">Know me More</span>
                    </button>
                  </div>

                  {/* Particle Effect */}
                  <Particles />
                </div>
              </div>

              {/* Arrow Right */}
              <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 text-white p-2 rounded-full hover:bg-white/50  transition-all duration-300">
                &#8250;
              </button>
            </div>
          </section>
        


          {/* Story Section */}
          <section className="flex items-center p-10 h-screen ">
            <motion.div 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration:1}}
            className="w-3/4">
              <motion.h2 
              initial={{opacity: 0, y:-20}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration:0.5, delay:0.3}}
              className="text-white text-sm font-semibold uppercase mb-2">
                A Bit of My Story
              </motion.h2>
              <motion.h3 
              initial={{opacity: 0, y:-20}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration:0.5, delay:0.5}}
              className="text-3xl font-bold text-white mb-4">
                How it all began
              </motion.h3>
              <motion.p 
               initial={{opacity: 0}}
               whileInView={{opacity: 1}}
               transition={{duration:0.6, delay:0.8}}
              className="font-semibold text-white mb-4">
                I grew up with a curious, analytical, and problem-solving spirit
                in a home where the digital world was always within reach.
                My fascination with technology started at an early age,
                experimenting with computers and simple code.Now, I take every opportunity to create engaging digital
                experiences.
              </motion.p>
            </motion.div>
            <motion.div 
            initial={{opacity: 0, scale: 0.9}}
            whileInView={{opacity: 1, scale: 1}}
            transition={{duration:0.6}}
            className="w-1/4 m-12">
              <Image
                alt="Bakery shopping application"
                src="https://i.pinimg.com/564x/56/07/51/56075169f3befff95331d31bce2dd121.jpg"
                width={640}
                height={640}
              />
            </motion.div>
          </section>
        </main>
      </div>
    </div>
  );
}
