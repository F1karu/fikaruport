"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { arrayPorto } from "../../../data/portofolio";

type Porto = {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  github?: string;
};

export default function ProjectDetail() {
  const params = useParams();
  const idParam = params?.id;
  const idStr = Array.isArray(idParam) ? idParam[0] : idParam;

  const [porto, setPorto] = useState<Porto | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!idStr) return;
    const foundPorto = arrayPorto.find((p) => p.id === parseInt(idStr)) || null;
    setPorto(foundPorto);
    setIsVisible(true);
  }, [idStr]);

  if (!porto) return <div className="text-center mt-20 text-white">Project not found</div>;

  return (
    <div className="container mx-auto p-4">
      <div
        className={`mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          transition-all duration-700 ease-in`}
      >
        <Link href="/portofolio" className="inline-block mb-6 text-soft-brown navbar-link">
          ← Back to Portfolio
        </Link>
        <p className="font-semibold text-sm text-soft-brown text-center">{porto.category}</p>
        <h1 className="text-2xl font-bold text-white text-center">{porto.name}</h1>
        <p className="mb-4 text-center">{porto.description}</p>

        <div className="flex flex-col items-center gap-6">
          <Image
            alt={porto.name}
            src={porto.image}
            width={500}
            height={500}
            className="rounded-lg"
            unoptimized
          />
          {porto.github && (
            <a
              href={porto.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-soft-brown text-white rounded-lg shadow-md hover:bg-brown-700 transition"
            >
              View on GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
