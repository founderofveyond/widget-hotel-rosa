import React from 'react';
import '@/styles/widget.css';

export default function WidgetLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ margin: 0, padding: 0, background: 'transparent' }}>
      {children}
    </div>
  );
}

