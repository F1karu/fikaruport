"use client";

import { useEffect, useState, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { arrayPorto } from "../../data/portofolio";

// Separate component that uses useSearchParams
function PortfolioContent() {
  const [isMounted, setIsMounted] = useState(false);
  const [fade, setFade] = useState(false);
  const [dropdownActive, setDropdownActive] = useState(false);

  const searchParams = useSearchParams();
  const category = searchParams?.get("category");

  const filteredPorto = category
    ? arrayPorto.filter((porto) => porto.category.toLowerCase() === category.toLowerCase())
    : arrayPorto;

  useEffect(() => {
    setIsMounted(true);
    setFade(false); // trigger fade-out
    const timeout = setTimeout(() => setFade(true), 50); // fade-in
    return () => clearTimeout(timeout);
  }, [category]);

  return (
    <main
      className={`relative w-full min-h-screen overflow-hidden transition-all duration-700 ease-in
        ${isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/video/DarkPolygon.mp4"
        autoPlay
        loop
        muted
        style={{ opacity: 1 }}
      />

      {/* Content */}
      <div className="relative z-[50] mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-4xl font-bold tracking-tight text-soft-brown">My Portfolio</h2>

          {/* Dropdown */}
          <div
            className={`dropdown relative cursor-pointer ${dropdownActive ? "active" : ""}`}
            onClick={() => setDropdownActive(!dropdownActive)}
          >
            <span className="left-icon"></span>
            <span className="right-icon"></span>
            <span>Filter</span>

            <div
              className={`items absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg overflow-hidden transition-all duration-300
              ${dropdownActive ? "opacity-100 visible" : "opacity-0 invisible"}`}
            >
              <Link
                href="/portofolio"
                className="dropdown-link block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                All
              </Link>
              <Link
                href="/portofolio?category=Website"
                className="dropdown-link block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Website
              </Link>
              <Link
                href="/portofolio?category=Mobile"
                className="dropdown-link block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Mobile
              </Link>
            </div>
          </div>
        </div>

        {/* Portfolio Items */}
        <div
          className={`mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8
          transition-all duration-500 ease-in-out ${fade ? "opacity-100" : "opacity-0"}`}
        >
          {filteredPorto.map((porto, index) => (
            <div
              key={porto.id}
              className={`group relative transition-all duration-700 ease-in
                ${fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Link href={`/portofolio/${porto.id}`}>
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <Image
                    alt={porto.name}
                    src={porto.image}
                    width={300}
                    height={200}
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

// Main page component with Suspense boundary
export default function PortofolioPage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center h-screen bg-gray-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-soft-brown mx-auto"></div>
          <p className="mt-4 text-soft-brown">Loading portfolio...</p>
        </div>
      </div>
    }>
      <PortfolioContent />
    </Suspense>
  );
}