package com.proyecto.backend;

public class UsuarioService {

    private UsuarioRepository usuarioRepository;

    public UsuarioService() {
        this.usuarioRepository = new UsuarioRepository();  // Inicializa el repositorio
    }

    public Usuario crearUsuario(Usuario usuario) {
        // Lógica para crear un nuevo usuario
        return usuarioRepository.guardarUsuario(usuario);
    }

    public boolean validarLogin(String email, String contrasena) {
        // Validar el inicio de sesión (simulado)
        Usuario usuario = usuarioRepository.obtenerUsuarioPorEmail(email);
        if (usuario != null && usuario.getContrasena().equals(contrasena)) {
            return true;
        }
        return false;
    }
}

