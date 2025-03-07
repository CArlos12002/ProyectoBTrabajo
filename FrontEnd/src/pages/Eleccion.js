import React from 'react';
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import ProMatchLogo from '../assets/ProMatch.png'; // Importa el logo
import '../styles/Eleccion.css'; // Importa el CSS

const Eleccion = () => {
    const navigate = useNavigate();

    return (
        <div className="register-container">
            {/* Logo de ProMatch */}
            <img
                src={ProMatchLogo}
                alt="ProMatch Logo"
                className="register-logo"
            />

            {/* Título y subtítulo */}
            <h1 className="register-title">Selecciona tu Tipo de Registro</h1>
            <p className="register-subtitle">
                Elige si te registras como candidato o como empresa
            </p>

            {/* Botones de registro */}
            <div className="register-buttons">
                <button
                    className="register-button candidato"
                    onClick={() => navigate("/register/cliente")}
                >
                    Registrar como Candidato
                </button>
                <button
                    className="register-button empresa"
                    onClick={() => navigate("/register/empresa")}
                >
                    Registrar como Empresa
                </button>
            </div>
        </div>
    );
};

export default Eleccion;