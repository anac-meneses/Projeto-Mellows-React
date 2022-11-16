package br.org.mellows.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import br.org.mellows.models.LivroInt;

public interface LivroIntRepository extends JpaRepository<LivroInt, Long> {

}