import { Button } from "./Button";
import { NavLink } from "./Navlink";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-12 py-5">
      <h1 className="text-xl font-bold text-green-700">deepsource</h1>

      <div className="hidden md:flex gap-8">
        <NavLink>Platform</NavLink>
        <NavLink>Directory</NavLink>
        <NavLink>Customers</NavLink>
        <NavLink>Pricing</NavLink>
        <NavLink>Docs</NavLink>
      </div>

      <div className="flex gap-4">
        <Button variant="outline">Log In</Button>
        <Button>Sign Up</Button>
        <Button variant="ghost">Contact Sales</Button>

        {/* <button className="border px-4 py-2 rounded">Sign Up</button> */}

        {/* <button className="bg-green-700 text-white px-4 py-2 rounded">
          Contact Sales
        </button> */}
      </div>
    </nav>
  );
};

export default Navbar;
