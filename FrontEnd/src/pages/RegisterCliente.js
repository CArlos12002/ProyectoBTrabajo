import { useState } from "react";
import axios from "axios";

const RegisterCliente = () => {
    const [formData, setFormData] = useState({ nombre: "", email: "", contrasena: "" });
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8080/auth/register-cliente", formData);
            setMessage("Registro exitoso. ¡Ahora puedes iniciar sesión!");
        } catch (error) {
            setMessage("Error al registrar el usuario.");
        }
    };

    return (
        <div>
            <h2>Registro como Candidato</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="nombre" placeholder="Nombre" onChange={handleChange} required />
                <input type="email" name="email" placeholder="Correo Electrónico" onChange={handleChange} required />
                <input type="password" name="contrasena" placeholder="Contraseña" onChange={handleChange} required />
                <button type="submit">Registrarse</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default RegisterCliente;
