interface ImagePlaceholderProps {
  label: string;
  /** Once a real screenshot exists, pass its path to render an <img> instead. */
  src?: string;
  alt?: string;
  className?: string;
}

export function ImagePlaceholder({ label, src, alt = "", className = "" }: ImagePlaceholderProps) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className={`h-full w-full object-cover ${className}`}
        loading="lazy"
      />
    );
  }

  return (
    <div
      className={`flex h-full w-full flex-col items-center justify-center gap-3 border border-dashed border-border-strong bg-surface ${className}`}
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-faint"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="m21 15-5-5L5 21" />
      </svg>
      <span className="px-4 text-center text-[10.5px] tracking-[0.06em] text-faint uppercase">
        {label}
      </span>
    </div>
  );
}
