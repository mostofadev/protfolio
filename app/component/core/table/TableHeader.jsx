export default function TableHeader({ children }) {
    return (
      <thead className="bg-gray-100 text-xs uppercase tracking-wider text-gray-600">
        {children}
      </thead>
    );
  }