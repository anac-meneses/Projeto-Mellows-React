package br.org.mellows.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import br.org.mellows.models.Livro;

public interface LivroRepository extends JpaRepository<Livro, Long> {

}
