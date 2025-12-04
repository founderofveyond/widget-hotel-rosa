import React from 'react';
import { getExperienceBySlug } from '@/lib/data/experiences';
import { ImageGallery } from '@/components/detail/ImageGallery';
import { ExperienceInfo } from '@/components/detail/ExperienceInfo';
import { BookingPanel } from '@/components/detail/BookingPanel';
import { IncludedSection } from '@/components/detail/IncludedSection';
import { MeetingPoint } from '@/components/detail/MeetingPoint';
import { CancellationPolicy } from '@/components/detail/CancellationPolicy';
import { ReviewsSection } from '@/components/detail/ReviewsSection';
import { SupplierInfo } from '@/components/detail/SupplierInfo';
import { notFound } from 'next/navigation';

export default function ExperienceDetailPage({
  params,
}: {
  params: { hotelSlug: string; experienceSlug: string };
}) {
  const { hotelSlug, experienceSlug } = params;
  const experience = getExperienceBySlug(hotelSlug, experienceSlug);
  
  if (!experience) {
    notFound();
  }
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          <ImageGallery images={experience.images} title={experience.title} />
        </div>
        <div className="lg:col-span-1">
          <div className="lg:sticky lg:top-20">
            <BookingPanel experience={experience} hotelSlug={hotelSlug} />
          </div>
        </div>
      </div>
      
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <ExperienceInfo experience={experience} />
          <IncludedSection
            included={experience.included}
            notIncluded={experience.notIncluded}
          />
          <MeetingPoint
            address={experience.meetingPoint.address}
            instructions={experience.meetingPoint.instructions}
          />
          <CancellationPolicy policy={experience.cancellationPolicy} />
          <ReviewsSection reviews={experience.reviews} />
        </div>
        <div className="lg:col-span-1">
          <SupplierInfo supplier={experience.supplier} />
        </div>
      </div>
    </div>
  );
}

