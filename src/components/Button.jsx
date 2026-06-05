export function Button({ children, variant = "primary" }) {
  const base =
    "px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-sm";

  const styles = {
    primary:
      "bg-gradient-to-r from-emerald-500 to-green-600 text-white hover:from-emerald-600 hover:to-green-700 shadow-md",

    outline: " bg-gradient-to-r border border-gray-300 text-gray-700 hover",

    ghost:
      "text-gray-700 bg-white border border-gray-200 hover:border-emerald-400 hover:text-emerald-600 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all duration-300",
  };

  return <button className={`${base} ${styles[variant]}`}>{children}</button>;
}
