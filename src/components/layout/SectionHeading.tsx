interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  label?: string;
  id?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({ title, subtitle, label, id, align = 'left' }: SectionHeadingProps) {
  const centered = align === 'center';

  return (
    <div
      className={
        centered
          ? 'mb-14 flex flex-col items-center text-center'
          : 'mb-14 flex flex-col items-start'
      }
    >
      {label && (
        <span className="section-label mb-3 inline-flex items-center gap-2">
          <span
            className="inline-block h-px w-6 bg-gradient-purple"
            aria-hidden="true"
          />
          {label}
        </span>
      )}
      <h2
        id={id}
        className="section-title text-3xl md:text-4xl"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-lg text-text-secondary">{subtitle}</p>
      )}
    </div>
  );
}
