'use client';

import React from 'react';

interface TabsProps {
  tabs: { id: string; label: string }[];
  activeTab: string;
  onTabChange: (id: string) => void;
}

export function Tabs({ tabs, activeTab, onTabChange }: TabsProps) {
  return (
    <div className="border-b border-[var(--color-border)] mb-4">
      <nav className="flex gap-6">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onTabChange(tab.id)}
              className={[
                'pb-2 text-sm font-medium transition-colors whitespace-nowrap',
                isActive
                  ? 'border-b-2 border-[var(--color-primary)] text-[var(--color-primary)]'
                  : 'border-b-2 border-transparent text-[var(--color-text-muted)] hover:text-[var(--color-text)]',
              ].join(' ')}
            >
              {tab.label}
            </button>
          );
        })}
      </nav>
    </div>
  );
}


