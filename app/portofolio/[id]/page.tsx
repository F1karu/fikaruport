"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { arrayPorto } from "../../../data/portofolio";

// Separate component that uses useSearchParams
function PortfolioContent() {
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
    <main className="container mx-auto p-8">
      <h2 className="text-4xl mb-6 text-soft-brown">My Portfolio</h2>

      {/* Filter */}
      <div className="mb-6">
        <Link href="/portofolio" className="mr-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
          All
        </Link>
        <Link href="/portofolio?category=Website" className="mr-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
          Website
        </Link>
        <Link href="/portofolio?category=Mobile" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
          Mobile
        </Link>
      </div>

      {/* Portfolio Grid */}
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-opacity duration-500 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        {filteredPorto.map((porto, index) => (
          <Link key={index} href={`/portofolio/${porto.id}`} className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="relative overflow-hidden rounded-t-lg">
              <Image
                src={porto.image || "/api/placeholder/300/200"}
                alt={porto.name}
                width={300}
                height={200}
                className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300"
                unoptimized
              />
            </div>
            <div className="p-4">
              <h3 className="mt-2 text-lg font-semibold text-gray-800">{porto.name}</h3>
              <p className="text-gray-600 text-sm mt-1">{porto.description}</p>
              <span className="inline-block mt-3 px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                {porto.category}
              </span>
            </div>
          </Link>
        ))}
      </div>
      
      {filteredPorto.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No projects found in this category.</p>
        </div>
      )}
    </main>
  );
}

// Main page component with Suspense boundary
export default function PortofolioPage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading portfolio...</p>
        </div>
      </div>
    }>
      <PortfolioContent />
    </Suspense>
  );
}