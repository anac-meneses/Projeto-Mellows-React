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

import br.org.mellows.models.Login;
import br.org.mellows.models.Usuario;
import br.org.mellows.repositories.LoginRepository;
import br.org.mellows.repositories.UsuarioRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(value = "/usuarios")
public class UsuarioController {
	@Autowired
	private UsuarioRepository usuarioRepository;

	@Autowired
	private LoginRepository loginRepository;

	@GetMapping
	public ResponseEntity<List<Usuario>> findAll() {
		List<Usuario> usuario = usuarioRepository.findAll();
		return ResponseEntity.ok().body(usuario);
	}

	@GetMapping(value = "/{id}")
	public ResponseEntity<Usuario> findById(@PathVariable Long id) {
		Usuario usuario = usuarioRepository.findById(id).get();
		return ResponseEntity.ok().body(usuario);
	}

	// CREATE
	@PostMapping
	public Usuario createUsuario(@RequestBody Usuario usuario) {
		return usuarioRepository.save(usuario);
	}

	// UPDATE
	@PutMapping("{id}")
	public ResponseEntity<Usuario> update(@PathVariable long id, @RequestBody Usuario usuarioDetails) {
		Usuario updateUsuario = usuarioRepository.findById(id).get();
		Login login = loginRepository.findById(usuarioDetails.getLogin().getId()).get();
		updateUsuario.setNome(usuarioDetails.getNome());
		updateUsuario.setDataNascimento(usuarioDetails.getDataNascimento());
		updateUsuario.setEmail(usuarioDetails.getEmail());
		updateUsuario.setSenha(usuarioDetails.getSenha());
		updateUsuario.setLogin(login);
		usuarioRepository.save(updateUsuario);
		return ResponseEntity.ok(updateUsuario);
	}

	// DELETE
	@DeleteMapping("{id}")
	public ResponseEntity<HttpStatus> delete(@PathVariable long id) {
		Usuario usuario = usuarioRepository.findById(id).get();
		usuarioRepository.delete(usuario);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);

	}
}
