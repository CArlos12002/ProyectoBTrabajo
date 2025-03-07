import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
    return (
        <footer className="bg-white py-5"> {/* Aumenté el padding vertical (py-3 a py-5) */}
            <div className="container">
                {/* Línea negra con sombra */}
                <div
                    style={{
                        borderTop: "1px solid black",
                        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                        marginBottom: "2rem" /* Espaciado adicional debajo de la línea */
                    }}
                />

                <div className="row d-flex justify-content-between">
                    <div className="col-md-3">
                        <h5>Candidatos</h5>
                        <a href="/faq" className="d-block text-muted">Preguntas frecuentes</a>
                    </div>
                    <div className="col-md-3 text-center">
                        <h5>Reclutadores</h5>
                        <a href="/register/cliente" className="d-block text-muted">Publicar vacante</a>
                        <a href="#" className="d-block text-muted">Preguntas frecuentes</a>
                    </div>
                    <div className="col-md-3 text-end">
                        <h5>Nosotros</h5>
                        <a href="/WhoWeAre" className="d-block text-muted">¿Quienes somos?</a>
                        <a href="#" className="d-block text-muted">Únete a nuestro equipo</a>
                    </div>
                </div>

                <div className="mt-5 text-muted text-center"> {/* Aumenté el margen superior (mt-3 a mt-5) */}
                    <a href="/Terminos" className="mx-3">Términos y condiciones</a>
                    <a href="/AvisoPri" className="mx-3">Aviso de privacidad</a>
                    <p className="mt-3">© 2025 Canalizador de Empleo. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;


