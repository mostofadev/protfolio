"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function PMenu() {
  const pathname = usePathname();

  const navigators = [
    { name: "All", to: "/portfolio/all" },
    { name: "Frontend", to: "/portfolio/frontend" },
    { name: "Backend", to: "/portfolio/backend" },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div>
      <nav className="bg-[var(--bg-one)] text-white p-4">
        <ul className="flex justify-center space-x-6">
          {navigators.map((item) => {
            const isActive = pathname === item.to;

            return (
              <li
                key={item.name}
                className="transition duration-300 cursor-pointer"
              >
                <Link
                  href={item.to}
                  className={classNames(
                    isActive
                      ? "bg-green-500 text-white"
                      : "text-[var(--text-one)] hover:bg-gray-700 hover:text-white",
                    "rounded-md px-3 py-2 text-sm font-medium"
                  )}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default PMenu;
