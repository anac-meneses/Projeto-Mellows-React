package br.org.mellows.models;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Usuario extends Entidade {

	@Column(nullable = false)
	private String nome;
	@Column(nullable = false, name = "dataNascimento")
	@DateTimeFormat(iso = ISO.DATE)
	private LocalDate dataNascimento;

	@Column(nullable = false)
	private String senha;
	@Column(nullable = false)
	private String email;

	@JsonIgnore
	@OneToMany(mappedBy = "usuario")
	private List<Livro> livros = new ArrayList<Livro>();
	
	@ManyToOne
	@JoinColumn(name = "idLogin")
	private Login login;

	public Usuario() {
	}

	public Usuario(String nome, LocalDate dataNascimento, String senha, String email, List<Livro> livros, Login login) {
		super();
		this.nome = nome;
		this.dataNascimento = dataNascimento;
		this.senha = senha;
		this.email = email;
		this.livros = livros;
		this.login = login;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public LocalDate getDataNascimento() {
		return dataNascimento;
	}

	public void setDataNascimento(LocalDate dataNascimento) {
		this.dataNascimento = dataNascimento;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Login getLogin() {
		return login;
	}

	public void setLogin(Login login) {
		this.login = login;
	}

	public List<Livro> getLivros() {
		return livros;
	}

	public void setLivros(List<Livro> livros) {
		this.livros = livros;
	}

}
