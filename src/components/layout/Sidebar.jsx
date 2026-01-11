import { NavLink } from "react-router-dom";
import { navItems } from "../../config/navigation";

function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-gray-300">
      <div className="px-6 py-4 text-xl font-bold text-blue-400">
        DevLink
      </div>

      <nav className="px-4 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end
            className={({ isActive }) =>
              `block px-4 py-2 rounded ${
                isActive
                  ? "bg-gray-700 text-white"
                  : "hover:bg-gray-700"
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;

