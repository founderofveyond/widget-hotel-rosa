import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Experience } from '@/lib/data/types';
import { formatPrice, formatDuration } from '@/lib/utils/formatters';
import { Card } from '@/components/ui/Card';

interface ExperienceCardProps {
  experience: Experience;
  hotelSlug: string;
}

export function ExperienceCard({ experience, hotelSlug }: ExperienceCardProps) {
  return (
    <Link href={`/book/${hotelSlug}/${experience.slug}`}> 
      <Card className="overflow-hidden h-full flex flex-col hover:shadow-xl transition-shadow">
        <div className="relative w-full h-48 overflow-hidden">
          <Image
            src={experience.images[0]}
            alt={experience.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-4 flex-1 flex flex-col">
          <div className="mb-2">
            <span className="inline-block px-2 py-1 text-xs font-medium bg-[var(--color-background-alt)] text-[var(--color-text-muted)] rounded capitalize">
              {experience.category}
            </span>
          </div>
          <h3 className="text-xl font-semibold text-[var(--color-text)] mb-2 line-clamp-2">
            {experience.title}
          </h3>
          <p className="text-sm text-[var(--color-text-muted)] mb-4 line-clamp-2 flex-1">
            {experience.shortDescription}
          </p>
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-[var(--color-border)]">
            <div className="flex items-center space-x-4 text-sm text-[var(--color-text-muted)]">
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {formatDuration(experience.durationMinutes)}
              </span>
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                {experience.supplier.rating.toFixed(1)}
              </span>
            </div>
            <div className="text-lg font-bold text-[var(--color-primary)]">
              {formatPrice(experience.priceCents, experience.currency)}
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}



