'use client';

import React, { useState } from 'react';
import { getExperiencesByHotelSlug } from '@/lib/data/experiences';
import { getHotelBySlug } from '@/lib/data/hotels';
import { CatalogHeader } from '@/components/catalog/CatalogHeader';
import { CategoryFilter } from '@/components/catalog/CategoryFilter';
import { ExperienceGrid } from '@/components/catalog/ExperienceGrid';
import { notFound } from 'next/navigation';

type Category = 'all' | 'adventure' | 'food' | 'culture' | 'family' | 'wellness';

export default function CatalogPage({
  params,
}: {
  params: { hotelSlug: string };
}) {
  const { hotelSlug } = params;
  const hotel = getHotelBySlug(hotelSlug);
  const allExperiences = getExperiencesByHotelSlug(hotelSlug);
  
  if (!hotel || allExperiences.length === 0) {
    notFound();
  }
  
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  
  const filteredExperiences = selectedCategory === 'all'
    ? allExperiences
    : allExperiences.filter(exp => exp.category === selectedCategory);
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <CatalogHeader
        title={hotel.content.catalogTitle}
        description={hotel.content.catalogDescription}
      />
      <CategoryFilter
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <ExperienceGrid
        experiences={filteredExperiences}
        hotelSlug={hotelSlug}
      />
    </div>
  );
}

