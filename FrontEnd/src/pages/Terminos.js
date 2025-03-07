import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Terminos = () => {
    useEffect(() => {
        document.title = "Términos y Condiciones - Tu Plataforma de Empleo";
    }, []);

    return (
        <div className="container mt-5 pt-5">
            <h1 className="text-center mb-4">Términos y Condiciones</h1>
            <p>Última actualización: [Fecha]</p>

            <section>
                <h2>1. Aceptación de los Términos</h2>
                <p>
                    Al acceder y utilizar nuestro sitio web, aceptas cumplir y estar sujeto a los siguientes términos y condiciones. Si no estás de acuerdo con alguna parte de estos términos, debes dejar de usar nuestro sitio inmediatamente.
                </p>
            </section>

            <section>
                <h2>2. Descripción del Servicio</h2>
                <p>
                    Nuestra plataforma conecta a empresas con candidatos en busca de empleo, ofreciendo herramientas para la publicación de ofertas y la postulación a las mismas.
                </p>
            </section>

            <section>
                <h2>3. Registro de Usuarios</h2>
                <p>
                    Para acceder a ciertas funciones, debes crear una cuenta proporcionando información veraz y actualizada. Eres responsable de mantener la confidencialidad de tus credenciales de acceso.
                </p>
            </section>

            <section>
                <h2>4. Uso Aceptable</h2>
                <p>
                    Te comprometes a utilizar el sitio de manera legal y ética, evitando:
                </p>
                <ul>
                    <li>Publicar contenido falso o engañoso.</li>
                    <li>Infringir derechos de propiedad intelectual.</li>
                    <li>Realizar actividades fraudulentas.</li>
                </ul>
            </section>

            <section>
                <h2>5. Contenido Generado por el Usuario</h2>
                <p>
                    Los usuarios pueden publicar contenido en el sitio. Al hacerlo, otorgas a nuestra plataforma una licencia para usar, modificar y mostrar dicho contenido según sea necesario para la prestación del servicio.
                </p>
            </section>

            <section>
                <h2>6. Propiedad Intelectual</h2>
                <p>
                    Todo el contenido y materiales del sitio, incluyendo textos, gráficos y logotipos, son propiedad de [Nombre de la Empresa] y están protegidos por las leyes de propiedad intelectual aplicables.
                </p>
            </section>

            <section>
                <h2>7. Limitación de Responsabilidad</h2>
                <p>
                    No garantizamos la exactitud o integridad de las ofertas de empleo publicadas. No somos responsables de cualquier daño derivado del uso del sitio.
                </p>
            </section>

            <section>
                <h2>8. Modificaciones de los Términos</h2>
                <p>
                    Nos reservamos el derecho de modificar estos términos en cualquier momento. Las modificaciones entrarán en vigor al ser publicadas en el sitio. Es tu responsabilidad revisar los términos periódicamente.
                </p>
            </section>

            <section>
                <h2>9. Ley Aplicable</h2>
                <p>
                    Estos términos se rigen por las leyes de [Tu País]. Cualquier disputa será resuelta en los tribunales competentes de [Tu Ciudad].
                </p>
            </section>

            <section>
                <h2>10. Contacto</h2>
                <p>
                    Si tienes preguntas sobre estos términos, puedes contactarnos en [correo electrónico de contacto].
                </p>
            </section>
        </div>
    );
};

export default Terminos;
