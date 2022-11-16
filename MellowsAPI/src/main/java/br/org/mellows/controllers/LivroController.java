package br.org.mellows.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.org.mellows.models.Livro;
import br.org.mellows.models.Usuario;
import br.org.mellows.repositories.LivroRepository;
import br.org.mellows.repositories.UsuarioRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(value = "/livros")
public class LivroController {

	@Autowired
	private LivroRepository livroRepository;

	@Autowired
	private UsuarioRepository usuarioRepository;

	@GetMapping
	public ResponseEntity<List<Livro>> findAll() {
		List<Livro> livros = livroRepository.findAll();
		return ResponseEntity.ok().body(livros);
	}

	@GetMapping(value = "/{id}")
	public ResponseEntity<Livro> findById(@PathVariable Long id) {
		Livro livros = livroRepository.findById(id).get();
		return ResponseEntity.ok().body(livros);
	}

	// CREATE
	@PostMapping
	public Livro createLivro(@RequestBody Livro livro) {
		return livroRepository.save(livro);
	}

	// UPDATE
	@PutMapping("{id}")
	public ResponseEntity<Livro> update(@PathVariable long id, @RequestBody Livro livroDetails) {
		Livro updateLivro = livroRepository.findById(id).get();
		Usuario usuario = usuarioRepository.findById(livroDetails.getUsuario().getId()).get();
		updateLivro.setNome(livroDetails.getNome());
		updateLivro.setAutor(livroDetails.getAutor());
		updateLivro.setGenero(livroDetails.getGenero());
		updateLivro.setUsuario(usuario);
		livroRepository.save(updateLivro);
		return ResponseEntity.ok(updateLivro);
	}

	// DELETE
	@DeleteMapping("{id}")
	public ResponseEntity<HttpStatus> delete(@PathVariable long id) {
		Livro livro = livroRepository.findById(id).get();
		livroRepository.delete(livro);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);

	}
}
