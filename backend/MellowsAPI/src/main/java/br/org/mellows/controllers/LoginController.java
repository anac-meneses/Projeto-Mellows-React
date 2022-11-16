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
import br.org.mellows.repositories.LoginRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(value = "/login")
public class LoginController {
	@Autowired
	private LoginRepository loginRepository;
	
	@GetMapping
	public ResponseEntity<List<Login>> findAll() {		
		List<Login> login = loginRepository.findAll();		
		return ResponseEntity.ok().body(login);
	}
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<Login> findById(@PathVariable Long id) {		
		Login login = loginRepository.findById(id).get();		
		return ResponseEntity.ok().body(login);
	}
	
	// CREATE
    @PostMapping
    public Login createLogin(@RequestBody Login login) {    	
        return loginRepository.save(login);
    }
    
    // UPDATE
    @PutMapping("{id}")
    public ResponseEntity<Login> update(@PathVariable long id,@RequestBody Login loginDetails) {
    	Login updateLogin = loginRepository.findById(id).get();
    	updateLogin.setTipoLogin(loginDetails.getTipoLogin());
    	loginRepository.save(updateLogin);
        return ResponseEntity.ok(updateLogin);
    }
    
    // DELETE
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> delete(@PathVariable long id) {
    	Login login = loginRepository.findById(id).get();
    	loginRepository.delete(login);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }
}
