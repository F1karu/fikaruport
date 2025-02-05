import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ['i.pinimg.com'], // Tambahkan domain sumber gambar eksternal
  },
};

export default nextConfig;
