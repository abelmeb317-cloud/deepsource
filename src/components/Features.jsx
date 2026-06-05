const Features = () => {
  const features = [
    "SAST",
    "SCA",
    "Code Quality",
    "IaC Security",
    "Code Coverage",
  ];

  return (
    <section className="max-w-7xl mx-auto py-24 px-8">
      {/* TITLE */}
      <h2 className="text-4xl md:text-5xl font-bold mb-14 text-gray-900">
        Secure every commit
      </h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE FEATURES */}
        <div className="space-y-4">
          {features.map((item) => (
            <div
              key={item}
              className="group border border-gray-200 bg-white p-5 rounded-xl shadow-sm hover:shadow-md hover:border-emerald-400 transition-all duration-300 cursor-pointer"
            >
              <span className="text-gray-700 font-medium group-hover:text-emerald-600 transition">
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE DASHBOARD UI */}
        <div className="relative h-96 rounded-2xl bg-emerald-200 border border-gray-200 shadow-lg overflow-hidden p-6">
          {/* Top bar */}
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-semibold text-gray-700">Security Dashboard</h3>

            <span className="inline-block bg-white/25 text-blue-900 px-3 py-1 rounded-full text-md backdrop-blur animate-pulse">
              Live
            </span>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-emerald-50 border">
              <p className="text-sm text-gray-500">SAST Issues</p>
              <p className="text-2xl font-bold text-emerald-700">12</p>
            </div>

            <div className="p-4 rounded-xl bg-green-50 border">
              <p className="text-sm text-gray-500">SCA Alerts</p>
              <p className="text-2xl font-bold text-green-700">5</p>
            </div>

            <div className="p-4 rounded-xl bg-gray-50 border">
              <p className="text-sm text-gray-500">Coverage</p>
              <p className="text-2xl font-bold text-gray-800">87%</p>
            </div>

            <div className="p-4 rounded-xl bg-gray-50 border">
              <p className="text-sm text-gray-500">Commits</p>
              <p className="text-2xl font-bold text-gray-800">248</p>
            </div>
          </div>

          {/* Fake chart */}
          <div className="mt-6 h-24 rounded-lg bg-gradient-to-r from-emerald-200 via-green-200 to-emerald-300 opacity-70"></div>
        </div>
      </div>
    </section>
  );
};

export default Features;
