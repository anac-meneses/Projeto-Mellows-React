package br.org.mellows.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Livro extends Entidade {

	@Column(nullable = false)
	private String nome;
	@Column(nullable = false)
	private String autor;
	@Column(nullable = false)
	private String genero;

	@ManyToOne
	@JoinColumn(name = "idUsuario")
	private Usuario usuario;

	public Livro(String nome, String autor, String genero, Usuario usuario) {
		super();
		this.nome = nome;
		this.autor = autor;
		this.genero = genero;
		this.usuario = usuario;
	}

	public Livro() {
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getAutor() {
		return autor;
	}

	public void setAutor(String autor) {
		this.autor = autor;
	}

	public String getGenero() {
		return genero;
	}

	public void setGenero(String genero) {
		this.genero = genero;
	}

	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}

}
