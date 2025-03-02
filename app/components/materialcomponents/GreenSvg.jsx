const GreenSvg = () => {
  return (
    <svg width="100%" height="100%" className="absolute inset-0 z-0">
      <rect
        stroke="url(#green)"
        fill="none"
        width="100%"
        height="100%"
        strokeWidth={1.5}
        rx="0"
      />
      <defs>
        <linearGradient id="green" x1="0%" y1="100%">
          <stop offset="0%" stopColor="rgba(74, 255, 216, 0.100)" />
          <stop offset="50.1%" stopColor="#4affd7" />
          <stop offset="100%" stopColor="rgba(74, 255, 216, 0.100)" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default GreenSvg;
