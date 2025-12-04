import React from 'react';
import { Experience } from '@/lib/data/types';
import { formatPrice, formatDuration } from '@/lib/utils/formatters';

interface ExperienceInfoProps {
  experience: Experience;
}

export function ExperienceInfo({ experience }: ExperienceInfoProps) {
  const averageRating = experience.reviews.reduce((sum, review) => sum + review.rating, 0) / experience.reviews.length;
  
  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="px-3 py-1 text-sm font-medium bg-[var(--color-background-alt)] text-[var(--color-text-muted)] rounded-full capitalize">
            {experience.category}
          </span>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-5 h-5 ${i < Math.round(averageRating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="ml-2 text-sm text-[var(--color-text-muted)]">
              {averageRating.toFixed(1)} ({experience.reviews.length} reviews)
            </span>
          </div>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">
          {experience.title}
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--color-text-muted)]">
          <span className="flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {formatDuration(experience.durationMinutes)}
          </span>
          <span className="flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Up to {experience.maxParticipants} participants
          </span>
          <span className="text-2xl font-bold text-[var(--color-primary)]">
            {formatPrice(experience.priceCents, experience.currency)}
          </span>
        </div>
      </div>
      
      <div className="prose max-w-none">
        <p className="text-lg text-[var(--color-text)] leading-relaxed whitespace-pre-line">
          {experience.fullDescription}
        </p>
      </div>
    </div>
  );
}



