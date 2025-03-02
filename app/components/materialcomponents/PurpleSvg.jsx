const PurpleSvg = () => {
  return (
    <svg width="100%" height="100%" className="absolute inset-0 z-0">
      <rect
        stroke="url(#purple)"
        fill="none"
        width="100%"
        height="100%"
        strokeWidth={1.5}
        rx="0"
      />
      <defs>
        <linearGradient id="purple" x1="0%" y1="100%">
          <stop offset="0%" stopColor="rgba(155, 89, 255, 0.100)" />
          <stop offset="50.1%" stopColor="#9b59ff" />
          <stop offset="100%" stopColor="rgba(155, 89, 255, 0.100)" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default PurpleSvg;
