"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaTiktok, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";
import logo from "../public/image/FIKARU.png";

interface HeaderProps {
  className?: string; // Add className to the component props
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const [isScroll, setIsScroll] = useState(false);

  // Scroll listener untuk mengatur blur navbar
  useEffect(() => {
    const handleScroll = () => setIsScroll(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`relative ${className}`}> {/* Apply className here */}
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/video/DarkPolygon.mp4"
        autoPlay
        loop
        muted
        style={{ opacity: 1 }}
      />

      {/* Main Content */}
      <div className="relative z-10 bg-gradient-to-b from-black/40 to-black/80 mb-4">
        {/* Navbar */}
        <nav
          className={`fixed top-0 w-full px-5 py-4 flex items-center justify-between z-50 transition-all ${
            isScroll
              ? "backdrop-blur-md shadow-md"
              : "bg-transparent backdrop-blur-none"
          }`}
        >
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Image
              src={logo}
              alt="FIKARU Logo"
              width={120}
              height={120}
              className="rounded-full"
              priority
              style={{ width: '100%', height: 'auto' }}
            />
          </div>

          {/* Navigation Links */}
          <ul className="hidden md:flex space-x-8">
            {[
              { name: "Profile", path: "/"  },
              { name: "Portofolio", path: "/portofolio" },

              
            ].map((item, idx) => (
              <li key={idx}>
                <Link href={item.path} className="navbar-link">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/62895801006521"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <FaWhatsapp size={20} />
            </a>
            <a
              href="https://instagram.com/cristiano"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <FaInstagram size={20} />
            </a>
            <a
    href="mailto:dzulfikarky@gmail.com"
    className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-300"
  >
    Contact Me
  </a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
