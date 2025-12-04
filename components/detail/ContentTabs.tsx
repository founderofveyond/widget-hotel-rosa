 'use client';

import React, { useState } from 'react';
import type { Experience } from '@/lib/data/types';
import { Tabs } from '@/components/ui/Tabs';
import { IncludedSection } from './IncludedSection';
import { MeetingPoint } from './MeetingPoint';
import { CancellationPolicy } from './CancellationPolicy';

interface ContentTabsProps {
  experience: Experience;
}

const TAB_OVERVIEW = 'overview';
const TAB_INCLUDED = 'included';
const TAB_DETAILS = 'details';

export function ContentTabs({ experience }: ContentTabsProps) {
  const [activeTab, setActiveTab] = useState<string>(TAB_OVERVIEW);

  const tabs = [
    { id: TAB_OVERVIEW, label: 'Overview' },
    { id: TAB_INCLUDED, label: "What's Included" },
    { id: TAB_DETAILS, label: 'Details' },
  ];

  return (
    <div className="space-y-4">
      <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

      {activeTab === TAB_OVERVIEW && (
        <div className="space-y-4">
          <p className="text-base text-[var(--color-text)] leading-relaxed whitespace-pre-line">
            {experience.fullDescription}
          </p>
        </div>
      )}

      {activeTab === TAB_INCLUDED && (
        <IncludedSection
          included={experience.included}
          notIncluded={experience.notIncluded}
        />
      )}

      {activeTab === TAB_DETAILS && (
        <div className="space-y-8">
          <MeetingPoint
            address={experience.meetingPoint.address}
            instructions={experience.meetingPoint.instructions}
          />
          <CancellationPolicy policy={experience.cancellationPolicy} />
        </div>
      )}
    </div>
  );
}


