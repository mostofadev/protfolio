export const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={`${className} absolute left-0 z-10 text-[var(--text-one)] bg-[var(--bg-one)] bg-opacity-50 p-4 rounded-full hover:bg-opacity-70 transition-all duration-300`}
      style={{ ...style }}
      onClick={onClick}
      aria-label="Previous"
    >
      <span className="text-xl">&lt;</span>
    </button>
  );
};

export const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={`${className} absolute right-0 z-10 text-[var(--text-one)] bg-[var(--bg-one)] bg-opacity-50 p-4 rounded-full hover:bg-opacity-70 transition-all duration-300`}
      style={{ ...style }}
      onClick={onClick}
      aria-label="Next"
    >
      <span className="text-xl">&gt;</span>
    </button>
  );
};
