package com.proyecto.backend;

public class UsuarioRepository {

    public Usuario guardarUsuario(Usuario usuario) {
        // Aquí iría la lógica para guardar el usuario en la base de datos.
        // Por ejemplo, usando JDBC o algún ORM como Hibernate
        System.out.println("Usuario guardado: " + usuario.getNombre());
        return usuario;  // Retorna el usuario guardado
    }

    public Usuario obtenerUsuarioPorEmail(String email) {
        // Aquí iría la lógica para obtener el usuario de la base de datos por email
        return null;  // Simulación de retorno (esto debe ser implementado con DB real)
    }
}

