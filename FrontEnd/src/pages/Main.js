import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Main.css";
import ProMatchLogo from "../assets/ProMatch.png";
import AnalisisMain from "../assets/AnalisisMain.png";
import CvEjeUno from "../assets/CvEje.png";
import LoopingWords from "./LoopingWords";

const Main = () => {
    const navigate = useNavigate();
    const logoRef = useRef(null);
    const [busqueda, setBusqueda] = useState({
        puesto: "",
        ubicacion: ""
    });

    useEffect(() => {
        const logo = logoRef.current;

        gsap.set(logo, {
            position: "fixed",
            top: "50%",
            left: "50%",
            x: "-50%",
            y: "-50%",
            width: "80%",
            opacity: 1,
        });

        gsap.to(logo, {
            width: "150px", // Cambia este valor para hacer la imagen más pequeña
            top: "40px",
            left: "120px",
            duration: 1.5,
            ease: "power2.out",
            delay: 1,
            onComplete: () => {
                gsap.to(".main-content", { opacity: 1, duration: 0.5 });
            },
        });
    }, []);

    const handleBuscar = (e) => {
        e.preventDefault();
        console.log("Búsqueda actual:", busqueda);
        // Aquí implementarás la conexión con Quarkus posteriormente
    };

    return (
        <div className="container-fluid position-relative">
            <img
                ref={logoRef}
                src={ProMatchLogo}
                alt="Logo"
                className="logo"
                style={{ opacity: 0 }}
            />

            <div className="main-content" style={{ opacity: 0 }}>
                {/* Contenido principal */}
                <div className="container mt-5 pt-5">
                    {/* Fila de las imágenes */}
                    <div className="row align-items-center mb-5">
                        <div className="col-md-6">
                            <img
                                src={CvEjeUno}
                                alt="CV Ejemplo"
                                className="img-fluid rounded shadow"
                            />
                        </div>
                        <div className="col-md-6">
                            <img
                                src={AnalisisMain}
                                alt="Análisis"
                                className="img-fluid rounded shadow"
                            />
                        </div>
                    </div>

                    {/* Fila del Analizador de CV y Buscador */}
                    <div className="row align-items-center">
                        {/* Analizador de CV */}
                        <div className="col-md-6">
                            <div className="analysis-section bg-light p-4 rounded shadow">
                                <h3 className="mb-3">Analiza tu CV</h3>
                                <p className="lead mb-4">
                                    Descubre en qué áreas de la industria tienes más probabilidades
                                    de ser contratado y mejora tu perfil profesional.
                                </p>
                                <button className="btn btn-secondary btn-lg w-100">
                                    Analizar Ahora
                                </button>
                            </div>
                        </div>

                        {/* Buscador */}
                        <div className="col-md-6">
                            <form onSubmit={handleBuscar} className="mb-5">
                                <div className="row g-3">
                                    <div className="col-12">
                                        <input
                                            type="text"
                                            className="form-control form-control-lg"
                                            placeholder="Puesto o palabra clave"
                                            value={busqueda.puesto}
                                            onChange={(e) => setBusqueda({...busqueda, puesto: e.target.value})}
                                        />
                                    </div>
                                    <div className="col-12">
                                        <input
                                            type="text"
                                            className="form-control form-control-lg"
                                            placeholder="Ubicación"
                                            value={busqueda.ubicacion}
                                            onChange={(e) => setBusqueda({...busqueda, ubicacion: e.target.value})}
                                        />
                                    </div>
                                    <div className="col-12">
                                        <button
                                            type="submit"
                                            className="btn btn-primary btn-lg w-100"
                                        >
                                            Buscar Empleo
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {/* LoopingWords */}
                <div className="looping-words-container mt-5">
                    <LoopingWords />
                </div>
            </div>
        </div>
    );
};

export default Main;



