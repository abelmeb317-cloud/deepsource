export function NavLink({ children, href = "#" }) {
  return (
    <a
      href={href}
      className="relative group text-gray-700 font-medium transition-colors duration-200 hover:text-emerald-600"
    >
      {children}

      <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-emerald-600 transition-all duration-300 group-hover:w-full"></span>
    </a>
  );
}
