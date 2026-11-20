import { useState } from 'react';
import { Sparkles } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
}

export function ResilientImage({
  src,
  alt,
  className = '',
  fallbackTitle = 'Lumière Beauty Studio',
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#EFE6DC] via-[#FAF6F1] to-[#E9D5D3] text-[#5C473E] p-6 text-center ${className}`}
      >
        <Sparkles className="w-6 h-6 text-[#945B58] mb-2" strokeWidth={1.5} aria-hidden="true" />
        <span className="font-editorial text-lg font-medium text-[#2B1C16]">{fallbackTitle}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
      loading="lazy"
    />
  );
}
