import React from 'react';

interface CatalogHeaderProps {
  title: string;
  description: string;
}

export function CatalogHeader({ title, description }: CatalogHeaderProps) {
  return (
    <div className="mb-8">
      <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-3">
        {title}
      </h1>
      <p className="text-lg text-[var(--color-text-muted)]">
        {description}
      </p>
    </div>
  );
}



