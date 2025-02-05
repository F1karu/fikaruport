'use client';
import { blogPosts } from '../../../data/blog';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { useState, useEffect } from 'react';

interface Params {
  slug: string;
}

export default function BlogPostPage({ params }: { params: Params | Promise<Params> }) {
  const [isVisible, setIsVisible] = useState(false); // State for fade-in effect
  const [resolvedParams, setResolvedParams] = useState<Params | null>(null);

  useEffect(() => {
    if (params instanceof Promise) {
      params.then((resolved) => {
        setResolvedParams(resolved);
      });
    } else {
      setResolvedParams(params);
    }

    const timer = setTimeout(() => setIsVisible(true), 100); // Trigger fade-in after mount
    return () => clearTimeout(timer); // Cleanup timer
  }, [params]);

  if (!resolvedParams) {
    return <div>Loading...</div>;
  }

  const post = blogPosts.find(post => post.slug === resolvedParams.slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="container mx-auto">
      <div
        className={`mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 h-screen 
        transform transition-all duration-700 ease-in
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} // Fade-in classes
      >
        <Link href="/blog" className="inline-block mb-6 text-soft-brown navbar-link">
          ← Back to Blog
        </Link>

        <h1 className="text-3xl font-bold mb-4 text-soft-brown">{post.title}</h1>
        <p className="text-white text-sm font-bold mb-4">{post.date}</p>
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </div>
  );
}
