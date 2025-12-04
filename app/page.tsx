import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Traverum Booking Platform
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          White-label experience booking platform
        </p>
        <div className="space-x-4">
          <Link
            href="/book/demo"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            View Full Page Experience
          </Link>
          <Link
            href="/widget/demo"
            className="inline-block px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
          >
            View Widget
          </Link>
        </div>
      </div>
    </div>
  );
}
