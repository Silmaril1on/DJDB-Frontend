const VerticalLine = ({ className }) => {
  return (
    <svg height="100%" width="2" className={className}>
      <defs>
        <linearGradient id="gradient" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="rgba(224, 238, 241, 0.10)" />
          <stop offset="50%" stopColor="rgba(224, 241, 225, 0.644)" />
          <stop offset="100%" stopColor="rgba(224, 238, 241, 0.10)" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="1.5" height="100%" fill="url(#gradient)" />
    </svg>
  );
};

export default VerticalLine;
