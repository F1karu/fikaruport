"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation"; // Import useSearchParams from next/navigation
import { arrayPorto } from "../../data/portofolio";

export default function Portofolio() {
  const [isMounted, setIsMounted] = useState(false);
  const [fade, setFade] = useState(false);  // State to control fade effect
  const searchParams = useSearchParams();  // Use the hook to access searchParams

  const category = searchParams?.get("category");  // Safely access category

  // Filter portofolio based on category
  const filteredPorto = category
    ? arrayPorto.filter((porto) => porto.category.toLowerCase() === category.toLowerCase())
    : arrayPorto;

  useEffect(() => {
    setIsMounted(true); // Start the fade-in animation after the component mounts
    setFade(true); // Start fade effect when component mounts or category changes
  }, [category]); // Dependency on category to trigger when the category changes

  // To reset fade-out and fade-in effect when category changes
  const handleFadeTransition = () => {
    setFade(false);  // Trigger fade-out
    setTimeout(() => {
      setFade(true);  // Trigger fade-in after delay
    }, 300);  // Delay should match fade-out duration
  };

  const handleDropdownClick = () => {
    const dropdown = document.querySelector(".dropdown");
    if (dropdown) {
      dropdown.classList.toggle("active");
    } else {
      console.warn("Dropdown element not found");
    }
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
          style={{ opacity: 1 }}
        />
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 h-screen relative z-100">
        <div className="flex items-center justify-between mb-8">

        <h2 className="text-4xl font-bold tracking-tight text-soft-brown relative z-100">
          My Portofolio
        </h2>

        <div className="dropdown" onClick={handleDropdownClick}>
            <span className="left-icon"></span>
            <span className="right-icon"></span>
            <span>Filter</span>
            <div className="items">
              <a href="/portofolio" className="dropdown-link" onClick={handleFadeTransition}>
                All
                <span></span>
              </a>
              <a
                href="/portofolio?category=Website"
                className="dropdown-link"
                onClick={handleFadeTransition}
              >
                Website
                <span></span>
              </a>
              <a
                href="/portofolio?category=Mobile"
                className="dropdown-link"
                onClick={handleFadeTransition}
              >
                Mobile
                <span></span>
              </a>
            </div>
          </div>
          </div>

        {/* Portfolio Items with fade animation */}
        <div className={`mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 transition-all duration-500 ease-in-out ${fade ? "opacity-100" : "opacity-0"}`}>
          {filteredPorto.map((porto, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 ease-in ${fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Link href={`/portofolio/${porto.id}`}>
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <Image
                    alt={porto.name}
                    src={porto.image}
                    width={100}
                    height={100}
                    unoptimized
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-soft-brown">{porto.name}</h3>
                    <p className="mt-1 text-sm text-gray-300">{porto.description}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
