export default function TableHeadCell({ children, className = "" }) {
    return <th className={`px-6 py-4 ${className}`}>{children}</th>;
  }