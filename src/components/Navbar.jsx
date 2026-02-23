import { NavLink, Link } from "react-router";

function Navbar() {
  return (
    <div className="w-full max-w-285 mx-auto">
      <div className="flex justify-between p-8">

        <Link to="/">
          <h1 className="text-lg font-semibold">
            Github Profile Visualizer
          </h1>
        </Link>

        <ul className="flex space-x-6 text-slate-300">

          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:text-[#3B82F6] ${
                  isActive ? "text-[#3B82F6]" : "text-[#F8FAFC]"
                } transition-colors duration-200`
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/repositories"
              className={({ isActive }) =>
                `hover:text-[#3B82F6] ${
                  isActive ? "text-[#3B82F6]" : "text-[#F8FAFC]"
                } transition-colors duration-200`
              }
            >
              Repositories
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/analysis"
              className={({ isActive }) =>
                `hover:text-[#3B82F6] ${
                  isActive ? "text-[#3B82F6]" : "text-[#F8FAFC]"
                } transition-colors duration-200`
              }
            >
              Analysis
            </NavLink>
          </li>

        </ul>
      </div>
    </div>
  );
}

export default Navbar;