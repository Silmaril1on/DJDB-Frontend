const HorizontalLine = ({ className, color = "default" }) => {
  const colorSchemes = {
    default: {
      start: "rgba(224, 238, 241, 0.10)",
      middle: "rgba(224, 238, 241, 0.644)",
      end: "rgba(224, 238, 241, 0.10)",
    },
    pink: {
      start: "rgba(255, 61, 129, 0.10)",
      middle: "#ff3d81",
      end: "rgba(255, 61, 129, 0.10)",
    },
    purple: {
      start: "rgba(155, 89, 255, 0.10)",
      middle: "#9b59ff",
      end: "rgba(155, 89, 255, 0.10)",
    },
    green: {
      start: "rgba(74, 255, 216, 0.10)",
      middle: "#4affd7",
      end: "rgba(74, 255, 216, 0.10)",
    },
  };

  // Get the selected color scheme
  const selectedColor = colorSchemes[color] || colorSchemes.default;

  return (
    <svg height="2" width="100%" className={className}>
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={selectedColor.start} />
          <stop offset="50%" stopColor={selectedColor.middle} />
          <stop offset="100%" stopColor={selectedColor.end} />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="100%" height="1.5" fill="url(#gradient)" />
    </svg>
  );
};

export default HorizontalLine;
