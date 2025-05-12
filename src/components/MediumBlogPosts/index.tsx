import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface BlogPost {
  title: string;
  description: string;
  imageUrl?: string;
  url: string;
  date?: string;
}

// This would typically come from an API or CMS
const recentPosts: BlogPost[] = [
  {
    title: "Scalable Data Migration: Moving from Monoliths to Composable Architecture",
    description: "A guide explaining the capabilities of our Data Migration tool.",
    imageUrl: "/Medium-Logo.jpg",
    url: "https://medium.com/@apilets/scalable-data-migration-moving-from-monoliths-to-composable-architecture-ff032b1f98ff",
  },
  {
    title: "Apache Kafka 101: The Complete Guide to What It Is and When to Use It",
    description: "A comprehensive guide to Apache Kafka, including its key features, use cases, and best practices.",
    imageUrl: "/Medium-Logo.jpg",
    url: "https://medium.com/@apilets/apache-kafka-101-the-complete-guide-to-what-it-is-and-when-to-use-it-88676383c829",
  }
];

export function MediumBlogPosts() {
  return (
    <section className="py-16 center bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest from Our Blog</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with our latest insights on MACH architecture, headless commerce, and cloud-native development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post, index) => (
            <article key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48">
                {post.imageUrl && (
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">
                  {post.date ? new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  }) : ''}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  <Link href={post.url} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.description}
                </p>
                <Link
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                >
                  Read on Medium
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link
            href="https://medium.com/@apilets"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-800 transition-colors"
          >
            View All Articles
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
} 