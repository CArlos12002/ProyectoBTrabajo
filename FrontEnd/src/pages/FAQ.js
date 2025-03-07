import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min"; // Bootstrap JS para el acordeón

const FAQ = () => {
    useEffect(() => {
        document.title = "Preguntas Frecuentes - Canalizador de Empleo";
    }, []);

    return (
        <div className="faq-container">
            <div className="container mt-5 pt-5">
                <h2 className="text-center mb-4 fw-bold text-dark">Preguntas Frecuentes</h2>

                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="accordion shadow-lg bg-white rounded p-4" id="faqAccordion">
                            {/* Pregunta 1 */}
                            <div className="accordion-item border-0 mb-3 faq-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button bg-white text-dark shadow-sm rounded collapsed faq-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                                        ¿Cómo me registro en la plataforma?
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body text-muted">
                                        Para registrarte, haz clic en "Registrarme" en la parte superior derecha, elige si eres candidato o empresa y llena el formulario.
                                    </div>
                                </div>
                            </div>

                            {/* Pregunta 2 */}
                            <div className="accordion-item border-0 mb-3 faq-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button bg-white text-dark shadow-sm rounded collapsed faq-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                                        ¿Cómo puedo postularme a un empleo?
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body text-muted">
                                        Una vez registrado, busca empleos en la plataforma y haz clic en "Postularme" en la oferta que te interese.
                                    </div>
                                </div>
                            </div>

                            {/* Pregunta 3 */}
                            <div className="accordion-item border-0 mb-3 faq-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button bg-white text-dark shadow-sm rounded collapsed faq-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                                        ¿Las empresas pueden hacer exámenes a los candidatos?
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body text-muted">
                                        Sí, las empresas pueden habilitar un examen al momento de crear una oferta de empleo.
                                    </div>
                                </div>
                            </div>

                            {/* Pregunta 4 */}
                            <div className="accordion-item border-0 mb-3 faq-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button bg-white text-dark shadow-sm rounded collapsed faq-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour">
                                        ¿Es gratis usar la plataforma?
                                    </button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body text-muted">
                                        Sí, los candidatos pueden registrarse y postularse sin costo. Algunas funciones premium pueden requerir suscripción.
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
