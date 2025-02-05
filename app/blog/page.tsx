"use client";

import Link from "next/link";
import "../globals.css";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { blogPosts } from "../../data/blog";

export default function BlogPage() {
  const [isMounted, setIsMounted] = useState(false);
  const [fade, setFade] = useState(false);
  const searchParams = useSearchParams();

  const category = searchParams?.get("category");

  const filteredBlogs = category
    ? blogPosts.filter((porto) => porto.category.toLowerCase() === category.toLowerCase())
    : blogPosts;

  useEffect(() => {
    setIsMounted(true);
    setFade(true);
  }, [category]);

  const handleFadeTransition = () => {
    setFade(false);
    setTimeout(() => {
      setFade(true);
    }, 300);
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
      className={`container mx-auto ${
        isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } transition-all duration-700 ease-in`}
    >
      {/* Background Video */}
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
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-soft-brown">Blog Posts</h1>
          {/* Dropdown */}
          <div className="dropdown" onClick={handleDropdownClick}>
            <span className="left-icon"></span>
            <span className="right-icon"></span>
            <span>Filter</span>
            <div className="items">
              <a href="/blog" className="dropdown-link" onClick={handleFadeTransition}>
                All
                <span></span>
              </a>
              <a
                href="/blog?category=Coding"
                className="dropdown-link"
                onClick={handleFadeTransition}
              >
                Coding
                <span></span>
              </a>
              <a
                href="/blog?category=Fun"
                className="dropdown-link"
                onClick={handleFadeTransition}
              >
                Fun
                <span></span>
              </a>
            </div>
          </div>
        </div>
        {/* Blog List */}
        <div
          className={`grid gap-6 transition-all duration-500 ease-in-out ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          {filteredBlogs.map((post, index) => (
            <div
              key={post.id}
              className={`border border-gray-200 p-4 rounded-lg transform transition-all duration-700 ease-in ${
                fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-xl font-semibold mb-2 text-soft-brown navbar-link">
                  {post.title}
                </h2>
              </Link>
              <p className="text-white text-sm font-semibold mb-2">{post.date}</p>
              <p>{post.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
