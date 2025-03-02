const PinkSvg = () => {
  return (
    <svg width="100%" height="100%" className="absolute inset-0 z-0">
      <rect
        stroke="url(#pink)"
        fill="none"
        width="100%"
        height="100%"
        strokeWidth={1.5}
        rx="0"
      />
      <defs>
        <linearGradient id="pink" x1="0%" y1="100%">
          <stop offset="0%" stopColor="rgba(255, 61, 129, 0.10)" />
          <stop offset="50.1%" stopColor="#ff3d81" />
          <stop offset="100%" stopColor="rgba(255, 61, 129, 0.10)" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default PinkSvg;
