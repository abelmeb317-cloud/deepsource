const Footer = () => {
  return (
    <footer className="bg-green-950 text-white py-16 px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        {/* BRAND */}
        <div>
          <h3 className="text-xl font-bold mb-4">DeepSource</h3>
          <p className="text-green-200 text-sm leading-relaxed">
            Secure your code with modern DevSecOps tools built for teams.
          </p>
        </div>

        {/* PRODUCT */}
        <div>
          <h4 className="font-semibold mb-4 text-green-100">Product</h4>
          <ul className="space-y-2 text-green-200 text-sm">
            <li className="hover:text-white cursor-pointer transition">SAST</li>
            <li className="hover:text-white cursor-pointer transition">SCA</li>
            <li className="hover:text-white cursor-pointer transition">
              Code Quality
            </li>
          </ul>
        </div>

        {/* RESOURCES */}
        <div>
          <h4 className="font-semibold mb-4 text-green-100">Resources</h4>
          <ul className="space-y-2 text-green-200 text-sm">
            <li className="hover:text-white cursor-pointer transition">
              Documentation
            </li>
            <li className="hover:text-white cursor-pointer transition">Blog</li>
            <li className="hover:text-white cursor-pointer transition">
              Customers
            </li>
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h4 className="font-semibold mb-4 text-green-100">Company</h4>
          <ul className="space-y-2 text-green-200 text-sm">
            <li className="hover:text-white cursor-pointer transition">
              About
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Careers
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Contact
            </li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-green-800 text-sm text-green-300 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} DeepSource. All rights reserved.</p>

        <div className="flex gap-6">
          <span className="hover:text-white cursor-pointer transition">
            Privacy
          </span>
          <span className="hover:text-white cursor-pointer transition">
            Terms
          </span>
          <span className="hover:text-white cursor-pointer transition">
            Security
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
