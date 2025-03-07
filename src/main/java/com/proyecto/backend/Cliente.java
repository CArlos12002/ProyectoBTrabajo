package com.proyecto.backend;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Cliente {

    @Id  // Definimos la clave primaria
    private Long id;

    private String nombre;
    private String email;

    // Getters y setters necesarios para JPA
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}

