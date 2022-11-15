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

import br.org.mellows.models.LivroInt;
import br.org.mellows.repositories.LivroIntRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(value = "/livros-interativos")
public class LivroIntController {
	@Autowired
	private LivroIntRepository livroIntRepository;

	@GetMapping
	public ResponseEntity<List<LivroInt>> findAll() {
		List<LivroInt> livrosInt = livroIntRepository.findAll();
		return ResponseEntity.ok().body(livrosInt);
	}

	@GetMapping(value = "/{id}")
	public ResponseEntity<LivroInt> findById(@PathVariable Long id) {
		LivroInt livrosInt = livroIntRepository.findById(id).get();
		return ResponseEntity.ok().body(livrosInt);
	}

	// CREATE
	@PostMapping
	public LivroInt createLivroInt(@RequestBody LivroInt livroInt) {
		return livroIntRepository.save(livroInt);
	}

	// UPDATE
	@PutMapping("{id}")
	public ResponseEntity<LivroInt> update(@PathVariable long id, @RequestBody LivroInt livroIntDetails) {
		LivroInt updateLivroInt = livroIntRepository.findById(id).get();
		updateLivroInt.setNome(livroIntDetails.getNome());
		updateLivroInt.setAutor(livroIntDetails.getAutor());
		updateLivroInt.setGenero(livroIntDetails.getGenero());
		updateLivroInt.setNivel(livroIntDetails.getNivel());
		livroIntRepository.save(updateLivroInt);
		return ResponseEntity.ok(updateLivroInt);
	}

	// DELETE
	@DeleteMapping("{id}")
	public ResponseEntity<HttpStatus> delete(@PathVariable long id) {
		LivroInt livroInt = livroIntRepository.findById(id).get();
		livroIntRepository.delete(livroInt);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);

	}
}
