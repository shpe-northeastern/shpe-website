import { NavLink } from "react-router";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/events", label: "Events" },
  { to: "/donations", label: "Donations" },
  { to: "/projects", label: "Projects" },
];

export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main navigation">
        <NavLink to="/" className="site-name">
          SHPE Northeastern
        </NavLink>

        <div className="nav-links">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}
