import useScrollReveal from '../../hooks/useScrollReveal';

/**
 * Wraps children in a scroll-triggered fade-and-rise. Use `delay` (ms) to stagger
 * siblings. Renders as any element via the `as` prop.
 */
export default function Reveal({ children, as: Tag = 'div', delay = 0, className = '', ...props }) {
  const { ref, visible } = useScrollReveal();

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </Tag>
  );
}
