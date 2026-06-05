const ComparisonTable = () => {
  const tools = [
    { id: "deepsource", name: "DeepSource", featured: true },
    { id: "sonarqube", name: "SonarQube", featured: false },
    { id: "snyk", name: "Snyk", featured: false },
  ];

  const features = [
    {
      name: "Code Quality Analysis",
      deepsource: true,
      sonarqube: true,
      snyk: false,
    },
    {
      name: "AI-Powered Code Assist",
      deepsource: true,
      sonarqube: false,
      snyk: false,
    },
    {
      name: "Real-time Security Scanning",
      deepsource: true,
      sonarqube: true,
      snyk: true,
    },
    {
      name: "Automated PR Fixes",
      deepsource: true,
      sonarqube: false,
      snyk: false,
    },
  ];

  const CheckIcon = () => (
    <span className="flex items-center justify-center w-full">
      <svg
        className="w-5 h-5 text-emerald-600 bg-emerald-100 rounded-full p-0.5"
        fill="none"
        stroke="currentColor"
        strokeWidth={3}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 12.75l6 6 9-13.5"
        />
      </svg>
    </span>
  );

  const CrossIcon = () => (
    <span className="flex items-center justify-center w-full">
      <svg
        className="w-4 h-4 text-gray-400"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </span>
  );

  return (
    <section className="max-w-6xl mx-auto py-24 px-6">
      {/* TITLE */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-900">
          Compare DevSecOps Tools
        </h2>
      </div>

      {/* TABLE WRAPPER (CENTER + FIT) */}
      <div className="overflow-x-auto flex justify-center">
        <table className="w-full max-w-5xl border border-slate-200 rounded-2xl overflow-hidden shadow-lg">
          {/* HEADER */}
          <thead className="bg-slate-50">
            <tr>
              <th className="p-5 text-left text-slate-500 font-bold">
                Features
              </th>

              {tools.map((tool) => (
                <th
                  key={tool.id}
                  className={`p-5 text-center font-semibold ${
                    tool.featured
                      ? "text-blue-600 bg-blue-50"
                      : "text-slate-700"
                  }`}
                >
                  {tool.featured && (
                    <div className="text-[10px] mb-1 text-blue-600 font-bold">
                      FEATURED
                    </div>
                  )}
                  {tool.name}
                </th>
              ))}
            </tr>
          </thead>

          {/* BODY */}
          <tbody className="divide-y divide-slate-100">
            {features.map((row, i) => (
              <tr key={i} className="hover:bg-slate-50 transition">
                {/* LEFT TEXT */}
                <td className="p-5 text-slate-800 font-medium">{row.name}</td>

                {/* CENTER ICONS */}
                {tools.map((tool) => (
                  <td key={tool.id} className="p-5 text-center">
                    {row[tool.id] ? <CheckIcon /> : <CrossIcon />}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ComparisonTable;
