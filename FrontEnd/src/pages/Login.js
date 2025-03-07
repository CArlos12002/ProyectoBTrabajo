import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Importar Bootstrap
import ProMatchLogo from "../assets/ProMatch.png"; // Importa el logo de ProMatch

const Login = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8080/auth/login", formData);
            localStorage.setItem("token", response.data.token);
            setMessage("Inicio de sesión exitoso");
            navigate("/dashboard");
        } catch (error) {
            setMessage("Error en el inicio de sesión, revisa tus credenciales.");
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="bg-white p-5 shadow-lg rounded text-center" style={{ width: "700px" }}>
                {/* Logo de ProMatch */}
                <img
                    src={ProMatchLogo}
                    alt="ProMatch Logo"
                    className="mb-4"
                    style={{ width: "150px" }} // Ajusta el tamaño del logo
                />

                {/* Título */}
                <h2 className="mb-4">¡Bienvenido de nuevo!</h2>

                {/* Formulario de inicio de sesión */}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Correo electrónico o teléfono"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            placeholder="Contraseña"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100 mb-4">
                        Iniciar Sesión
                    </button>
                </form>

                {/* Enlaces adicionales */}
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <a href="/forgot-password" className="text-decoration-none">
                        ¿Has olvidado tu contraseña?
                    </a>
                    <a href="/register/cliente" className="text-decoration-none">
                        ¿Eres nuevo? Regístrate
                    </a>
                </div>

                {/* Mensaje de error o éxito */}
                {message && <p className="mt-3 text-danger">{message}</p>}
            </div>
        </div>
    );
};

export default Login;