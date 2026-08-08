interface VerticalAnnotationProps {
  children: React.ReactNode;
  className?: string;
}

export const VerticalAnnotation = ({ children, className = '' }: VerticalAnnotationProps) => {
  return (
    <div className={`hidden md:block ${className}`}>
      <span className="text-[10px] tracking-[0.5em] text-neutral-600 uppercase" style={{ writingMode: 'vertical-rl' }}>
        {children}
      </span>
    </div>
  );
};
