function SocialIconSkeleton() {
  return (
    <div className="flex justify-center space-x-6 bg-[var(--bg-one)] p-4">
      {[...Array(4)].map((_, index) => (
        <div
          key={index}
          className="w-10 h-10 rounded-full bg-[var(--bg-two)] animate-pulse shadow-lg"
        />
      ))}
    </div>
  );
}

export default SocialIconSkeleton;
