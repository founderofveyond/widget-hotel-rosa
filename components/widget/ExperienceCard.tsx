import type { Experience } from '@/lib/widget/types';

interface Props {
  experience: Experience;
  buttonText: string;
  bookingUrl: string;
}

function formatPrice(cents: number, currency: string): string {
  return new Intl.NumberFormat('en-EU', {
    style: 'currency',
    currency,
  }).format(cents / 100);
}

function formatDuration(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  if (hours === 0) return `${mins}min`;
  if (mins === 0) return `${hours}h`;
  return `${hours}h ${mins}m`;
}

export default function ExperienceCard({
  experience,
  buttonText,
  bookingUrl,
}: Props) {
  const handleClick = () => {
    if (typeof window !== 'undefined') {
      window.open(bookingUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="trv-card">
      {/* Image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={experience.imageUrl}
        alt={experience.title}
        className="trv-card-image"
        onError={(e) => {
          // Fallback image
          // eslint-disable-next-line no-param-reassign
          e.currentTarget.src =
            'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop';
        }}
      />

      {/* Body */}
      <div className="trv-card-body">
        <span className="trv-card-category">{experience.category}</span>
        <h3 className="trv-card-title">{experience.title}</h3>
        <p className="trv-card-description">{experience.description}</p>

        {/* Footer */}
        <div className="trv-card-footer">
          <div className="trv-card-meta">
            <span>⏱ {formatDuration(experience.durationMinutes)}</span>
          </div>
          <div className="trv-card-price">
            {formatPrice(experience.priceCents, experience.currency)}
          </div>
        </div>

        {/* CTA Button */}
        <button
          type="button"
          className="trv-button trv-button-full"
          onClick={handleClick}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}


