import React from 'react';

export function Footer() {
  return (
    <footer className="bg-[var(--color-background-alt)] border-t border-[var(--color-border)] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-sm text-[var(--color-text-muted)]">
            Powered by <span className="font-semibold text-[var(--color-primary)]">Traverum</span>
          </p>
          <div className="flex space-x-6 text-sm text-[var(--color-text-muted)]">
            <a href="#" className="hover:text-[var(--color-primary)] transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-[var(--color-primary)] transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-[var(--color-primary)] transition-colors">
              Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}



