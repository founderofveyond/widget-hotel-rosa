'use client';

import React from 'react';

type Category = 'all' | 'adventure' | 'food' | 'culture' | 'family' | 'wellness';

interface CategoryFilterProps {
  selectedCategory: Category;
  onCategoryChange: (category: Category) => void;
}

const categories: { value: Category; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'adventure', label: 'Adventure' },
  { value: 'food', label: 'Food & Drink' },
  { value: 'culture', label: 'Culture' },
  { value: 'family', label: 'Family' },
  { value: 'wellness', label: 'Wellness' },
];

export function CategoryFilter({ selectedCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {categories.map(category => (
        <button
          key={category.value}
          onClick={() => onCategoryChange(category.value)}
          className={`
            px-4 py-2 rounded-full text-sm font-medium transition-colors
            ${
              selectedCategory === category.value
                ? 'bg-[var(--color-primary)] text-white'
                : 'bg-[var(--color-background-alt)] text-[var(--color-text)] hover:bg-[var(--color-border)]'
            }
          `}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}



