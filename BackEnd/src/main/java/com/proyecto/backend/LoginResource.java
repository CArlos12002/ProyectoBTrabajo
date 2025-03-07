package com.proyecto.backend;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/login")
public class LoginResource {

    private UsuarioService usuarioService;

    public LoginResource() {
        this.usuarioService = new UsuarioService();
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response login(Usuario usuario) {
        boolean loginExitoso = usuarioService.validarLogin(usuario.getEmail(), usuario.getContrasena());
        if (loginExitoso) {
            return Response.status(200).entity("Inicio de sesión exitoso").build();
        } else {
            return Response.status(401).entity("Credenciales incorrectas").build();
        }
    }
}

