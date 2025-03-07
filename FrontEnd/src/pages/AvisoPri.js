import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AvisoPrivacidad = () => {
    useEffect(() => {
        document.title = "Aviso de Privacidad - Tu Plataforma de Empleo";
    }, []);

    return (
        <div className="container mt-5 pt-5">
            <h1 className="text-center mb-4">Aviso de Privacidad</h1>
            <p>Última actualización: [Fecha]</p>

            <section>
                <h2>1. Identidad y Domicilio del Responsable</h2>
                <p>
                    <strong>[Nombre de la Empresa]</strong>, con domicilio en [Dirección completa], es responsable del tratamiento de sus datos personales conforme a lo dispuesto por la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP).
                </p>
            </section>

            <section>
                <h2>2. Datos Personales Recabados</h2>
                <p>
                    Los datos personales que recabamos incluyen:
                </p>
                <ul>
                    <li>Datos de identificación: nombre completo, fecha de nacimiento, género, estado civil, nacionalidad.</li>
                    <li>Datos de contacto: dirección, número de teléfono, correo electrónico.</li>
                    <li>Datos laborales: historial laboral, referencias profesionales, experiencia.</li>
                    <li>Datos académicos: nivel educativo, instituciones académicas, certificaciones.</li>
                    <li>Datos financieros: información sobre expectativas salariales y prestaciones.</li>
                    <li>Datos sensibles: estado de salud, antecedentes penales (estos serán recabados únicamente con su consentimiento expreso).</li>
                </ul>
            </section>

            <section>
                <h2>3. Finalidades del Tratamiento de Datos</h2>
                <p>
                    Sus datos personales serán utilizados para las siguientes finalidades:
                </p>
                <h3>Finalidades Primarias</h3>
                <ul>
                    <li>Evaluar su perfil y experiencia para procesos de reclutamiento y selección.</li>
                    <li>Verificar la información proporcionada y realizar estudios socioeconómicos y psicométricos.</li>
                    <li>Contactarlo para informarle sobre el estado de su postulación o futuras oportunidades laborales.</li>
                </ul>
                <h3>Finalidades Secundarias</h3>
                <ul>
                    <li>Mantenerlo en nuestra base de datos para considerarlo en futuros procesos de selección.</li>
                    <li>Realizar análisis estadísticos y encuestas para mejorar nuestros servicios de reclutamiento.</li>
                </ul>
                <p>
                    Si no desea que sus datos sean tratados para las finalidades secundarias, puede manifestar su negativa enviando un correo a [correo electrónico de contacto].
                </p>
            </section>

            <section>
                <h2>4. Transferencia de Datos Personales</h2>
                <p>
                    Sus datos personales podrán ser compartidos con terceros nacionales o extranjeros en los siguientes casos:
                </p>
                <ul>
                    <li><strong>Empresas afiliadas o subsidiarias:</strong> para considerarlo en vacantes dentro del grupo corporativo.</li>
                    <li><strong>Proveedores de servicios:</strong> para la realización de estudios socioeconómicos, evaluaciones psicométricas u otros relacionados con el proceso de selección.</li>
                    <li><strong>Autoridades competentes:</strong> en los casos legalmente previstos para el cumplimiento de obligaciones legales.</li>
                </ul>
                <p>
                    Nos comprometemos a que las transferencias se realicen con medidas de seguridad adecuadas, garantizando la confidencialidad de sus datos.
                </p>
            </section>

            <section>
                <h2>5. Derechos ARCO</h2>
                <p>
                    Usted tiene derecho a:
                </p>
                <ul>
                    <li><strong>Acceder</strong> a sus datos personales que poseemos.</li>
                    <li><strong>Rectificar</strong> sus datos en caso de ser inexactos o incompletos.</li>
                    <li><strong>Cancelar</strong> sus datos cuando considere que no son necesarios para las finalidades mencionadas.</li>
                    <li><strong>Oponerse</strong> al tratamiento de sus datos para fines específicos.</li>
                </ul>
                <p>
                    Para ejercer estos derechos, puede enviar una solicitud al correo [correo electrónico de contacto] o acudir a nuestro domicilio. Su solicitud deberá contener:
                </p>
                <ul>
                    <li>Nombre completo y datos de contacto.</li>
                    <li>Documentos que acrediten su identidad o representación legal.</li>
                    <li>Descripción clara del derecho que desea ejercer.</li>
                    <li>Cualquier otro documento que facilite la localización de sus datos.</li>
                </ul>
                <p>
                    Atenderemos su solicitud en los plazos establecidos por la LFPDPPP.
                </p>
            </section>

            <section>
                <h2>6. Medidas de Seguridad</h2>
                <p>
                    Implementamos medidas de seguridad administrativas, técnicas y físicas para proteger sus datos personales contra daño, pérdida, alteración, destrucción o uso no autorizado. Solo el personal autorizado tiene acceso a sus datos y está obligado a mantener la confidencialidad de los mismos.
                </p>
            </section>

            <section>
                <h2>7. Uso de Tecnologías de Rastreo</h2>
                <p>
                    Le informamos que en nuestro sitio web utilizamos cookies y otras tecnologías para mejorar su experiencia de usuario. Estas tecnologías pueden recabar datos como:
                </p>
                <ul>
                    <li>Tipo de navegador y sistema operativo.</li>
                    <li>Páginas web visitadas.</li>
                    <li>Enlaces accedidos.</li>
                    <li>Dirección IP.</li>
                </ul>
                <p>
                    Estos datos se utilizan para fines estadísticos y de mejora del servicio. Puede deshabilitar el uso de estas tecnologías a través de la configuración de su navegador; sin embargo, esto puede afectar algunas funcionalidades del sitio.
                </p>
            </section>

            <section>
                <h2>8. Modificaciones al Aviso de Privacidad</h2>
                <p>
                    Nos reservamos el derecho de realizar modificaciones o actualizaciones al presente Aviso de Privacidad en cualquier momento, para reflejar cambios en nuestras prácticas de manejo de información, derivadas de nuevos requerimientos legales, nuestras propias necesidades por los productos o servicios que ofrecemos, o por otras causas. Estas modificaciones estarán disponibles al público a través de los siguientes medios:
                </p>
                <ul>
                    <li>En nuestra página web: [URL de la página web]</li>
                    <li>Vía correo electrónico, a la dirección más reciente que nos haya proporcionado</li>
                    <li>Mediante anuncios visibles en nuestras oficinas o establecimientos</li>
                </ul>
                <p>
                    Recomendamos revisar periódicamente este Aviso de Privacidad para estar informado sobre cualquier cambio. El uso continuo de nuestros servicios después de la publicación de modificaciones constituye su aceptación a dichos cambios.
                </p>
            </section>
        </div>
    );
};

export default AvisoPrivacidad;
