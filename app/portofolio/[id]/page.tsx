"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { arrayPorto } from "../../data/portofolio";

export default function PortofolioPage() {
  const [fade, setFade] = useState(false);
  const searchParams = useSearchParams();
  const category = searchParams?.get("category") || "";

  const filteredPorto = category
    ? arrayPorto.filter(
        (porto) => porto.category.toLowerCase() === category.toLowerCase()
      )
    : arrayPorto;

  useEffect(() => {
    setFade(true);
  }, [category]);

  return (
    <Suspense fallback={<div className="text-center text-white mt-20">Loading...</div>}>
      <main className="container mx-auto p-8">
        <h2 className="text-4xl mb-6 text-soft-brown">My Portfolio</h2>

        {/* Filter */}
        <div className="mb-6">
          <Link href="/portofolio" className="mr-4">
            All
          </Link>
          <Link href="/portofolio?category=Website" className="mr-4">
            Website
          </Link>
          <Link href="/portofolio?category=Mobile">
            Mobile
          </Link>
        </div>

        {/* Portfolio Grid */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-opacity duration-500 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          {filteredPorto.map((porto, index) => (
            <Link key={index} href={`/portofolio/${porto.id}`} className="group">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src={porto.image}
                  alt={porto.name}
                  width={300}
                  height={300}
                  className="object-cover w-full h-64"
                  unoptimized
                />
              </div>
              <h3 className="mt-2 text-sm font-medium">{porto.name}</h3>
              <p className="text-gray-400 text-xs">{porto.description}</p>
            </Link>
          ))}
        </div>
      </main>
    </Suspense>
  );
}
