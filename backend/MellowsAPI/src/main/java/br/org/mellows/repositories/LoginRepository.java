package br.org.mellows.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import br.org.mellows.models.Login;

public interface LoginRepository extends JpaRepository<Login, Long> {

}