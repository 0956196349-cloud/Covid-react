import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <img src="/banner.jpeg" alt="Covid19 Banner" style={{ width: "150%" }} />
      <h1>Impacto del covid en la sociedad</h1>

      <nav>
        <Link to="/">Inicio</Link> |{" "}
        <Link to="/noticias">Noticias</Link> |{" "}
        <Link to="/mortandad">Mortandad</Link>
      </nav>
    </header>
  );
}

export default Header;
