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

      {/* Portfolio Grid */}
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-opacity duration-500 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        {filteredPorto.map((porto, index) => (
          <div key={index} className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
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
              
              {/* Action Buttons */}
              <div className="mt-4 flex flex-col space-y-2">
                <Link 
                  href={`/portofolio/${porto.id}`} 
                  className="px-4 py-2 bg-blue-500 text-white text-center rounded hover:bg-blue-600 transition-colors"
                >
                  View Details
                </Link>
                
                {/* GitHub Button */}
                {porto.github && (
                  <a 
                    href={porto.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="px-4 py-2 bg-gray-800 text-white text-center rounded hover:bg-gray-900 transition-colors flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    View on GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
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