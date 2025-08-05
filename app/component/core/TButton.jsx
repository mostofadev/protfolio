import Link from "next/link";

// eslint-disable-next-line react/prop-types
function TButton({Icon, href, to, target, onClick, className, children }) {
  
  const baseClasses =
    "flex items-center bg-green-500 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:scale-105 transform transition-all duration-300";
  const classes = className ? `${baseClasses} ${className}` : baseClasses;

  return (
    <>
      {href && (
        <a href={href} className={classes} target={target}>
        {Icon}
          {children}
        </a>
      )}
      {to && (
        <Link href={to} className={classes}>
          {Icon}
          {children}
        </Link>
      )}
      {!to && !href && (
        <button onClick={onClick} className="flex items-center bg-green-500 text-white font-bold py-3 px-6 rounded-3xl shadow-md hover:scale-105 transform transition-all duration-300">
        {Icon}
          {children}
        </button>
      )}
    </>
  );
}

export default TButton;
