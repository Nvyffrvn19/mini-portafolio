import { NavLink } from "react-router-dom";

const enlaces = [
  { to: "/", texto: "Inicio" },
  { to: "/sobre-mi", texto: "Sobre mí" },
  { to: "/habilidades", texto: "Habilidades" },
  { to: "/proyectos", texto: "Proyectos" },
  { to: "/contacto", texto: "Contacto" },
];

function Header() {
  return (
    <header className="header">
      <span className="logo">MiniProtafolio</span>
      <nav>
        <ul className="menu">
          {enlaces.map((e) => (
            <li key={e.to}>
              <NavLink
                to={e.to}
                end={e.to === "/"}
                className={({ isActive }) => (isActive ? "activo" : "")}
              >
                {e.texto}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;