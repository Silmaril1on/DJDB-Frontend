const BlackSvg = () => {
  return (
    <svg width="100%" height="100%" className="absolute inset-0 z-0">
      <rect
        stroke="url(#black)"
        fill="none"
        width="100%"
        height="100%"
        strokeWidth={1.5}
        rx="0"
      />
      <defs>
        <linearGradient id="black" x1="0%" y1="100%">
          <stop offset="0%" stopColor="rgba(32, 31, 32, 0.212)" />
          <stop offset="50.1%" stopColor="rgb(5, 5, 5)" />
          <stop offset="100%" stopColor="rgba(32, 31, 32, 0.212)" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default BlackSvg;
