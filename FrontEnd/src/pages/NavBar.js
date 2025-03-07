import { useNavigate } from "react-router-dom";
import ProMatchLogo from "../assets/ProMatch.png"; // Importa la imagen del logo

const NavBar = () => {
    const navigate = useNavigate();

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm" style={{ height: "90px" }}> {/* Aumentamos la altura */}
            <div className="container-fluid">
                {/* Logo de la aplicación */}
                <a className="navbar-brand" href="/">
                    <img
                        src={ProMatchLogo}
                        alt="ProMatch Logo"
                        style={{ height: "90px", width: "160px" }} // Ajusta el tamaño de la imagen
                    />
                </a>

                {/* Botones de navegación */}
                <div className="d-flex align-items-center">
                    <button className="btn btn-link text-dark me-3" onClick={() => navigate("/")}>
                        Página de Inicio
                    </button>
                    <button className="btn btn-link text-dark me-3" onClick={() => navigate("/register")}>
                        Estadísticas
                    </button>
                    <button className="btn btn-primary me-3 px-4 py-2" onClick={() => navigate("/Eleccion")}>
                        Mi CV
                    </button>
                    <button className="btn btn-outline-primary px-4 py-2" onClick={() => navigate("/login")}>
                        Iniciar Sesión
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;