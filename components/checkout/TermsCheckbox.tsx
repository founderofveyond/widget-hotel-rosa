'use client';

import React from 'react';

interface TermsCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  error?: string;
}

export function TermsCheckbox({ checked, onChange, error }: TermsCheckboxProps) {
  return (
    <div>
      <label className="flex items-start space-x-3 cursor-pointer">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="mt-1 w-5 h-5 rounded border-[var(--color-border)] text-[var(--color-primary)] focus:ring-[var(--color-primary)] focus:ring-offset-0"
        />
        <span className="text-sm text-[var(--color-text)]">
          I agree to the{' '}
          <a href="#" className="text-[var(--color-primary)] hover:underline">
            Terms and Conditions
          </a>{' '}
          and{' '}
          <a href="#" className="text-[var(--color-primary)] hover:underline">
            Privacy Policy
          </a>
        </span>
      </label>
      {error && (
        <p className="mt-1.5 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}



