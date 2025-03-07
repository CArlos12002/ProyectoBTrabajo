package com.proyecto.backend;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/api/register")
public class RegisterResource {

    private UsuarioService usuarioService;

    public RegisterResource() {
        this.usuarioService = new UsuarioService();
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response registrarUsuario(Usuario usuario) {
        Usuario nuevoUsuario = usuarioService.crearUsuario(usuario);
        return Response.status(201).entity(nuevoUsuario).build();  // Devuelve el usuario creado
    }
}

