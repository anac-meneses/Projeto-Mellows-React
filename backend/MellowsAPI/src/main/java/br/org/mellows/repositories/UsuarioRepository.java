package br.org.mellows.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import br.org.mellows.models.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

}