import nasaLogo from "../assets/Nas.png";
import Confluence from "../assets/Confluence1.jpg";
import Visa from "../assets/Visa1.jpg";
import Sainsbury from "../assets/Sainsbury1.jpg";
import RedCloud from "../assets/RedCloud1.jpg";
import Tendo from "../assets/Tendo.jpg";

const TrustedCompanies = () => {
  const companies = [
    { name: "NASA", logo: nasaLogo },
    { name: "VISA", logo: Visa },
    { name: "Confluence", logo: Confluence },
    { name: "Sainsbury", logo: Sainsbury },
    { name: "RedCloud", logo: RedCloud },
    { name: "Tendo", logo: Tendo },
  ];

  return (
    <section className="py-16 text-center">
      <h2 className="text-3xl font-bold text-green-700">
        Trusted by 6,000+ companies
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-12 mt-10">
        {companies.map((company) => (
          <div key={company.name} className="flex flex-col items-center gap-2">
            <img
              src={company.logo}
              alt={company.name}
              className="h-30 w-auto grayscale hover:grayscale-0 transition duration-300"
            />

            {/* optional text under logo */}
            <span className="text-lg text-gray-600">{company.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustedCompanies;
