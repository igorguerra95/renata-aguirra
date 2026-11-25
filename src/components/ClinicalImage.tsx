import { useState } from 'react';
import { Activity } from 'lucide-react';

interface ClinicalImageProps {
  src: string;
  alt: string;
  fallbackTitle: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
}

export function ClinicalImage({
  src,
  alt,
  fallbackTitle,
  className = '',
  imgClassName = '',
  priority = false,
}: ClinicalImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center gap-3 bg-clinical-band p-8 text-center ${className}`}
        role="img"
        aria-label={alt}
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border-quartz bg-surface-elevated text-primary-deep">
          <Activity className="h-5 w-5" aria-hidden="true" />
        </div>
        <p className="font-display text-sm font-medium text-foreground">{fallbackTitle}</p>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-surface ${className}`}>
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        onError={() => setHasError(true)}
        className={`h-full w-full object-cover ${imgClassName}`}
      />
    </div>
  );
}
