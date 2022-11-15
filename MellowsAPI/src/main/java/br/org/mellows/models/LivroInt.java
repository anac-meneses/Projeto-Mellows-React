package br.org.mellows.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "livroInt")
public class LivroInt extends Entidade {

	@Column(nullable = false)
	private String nome;
	@Column(nullable = false)
	private String autor;
	@Column(nullable = false)
	private String genero;
	@Column(nullable = false)
	private String nivel;

	public LivroInt() {
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


	public LivroInt(String nivel) {
		this.nivel = nivel;
	}

	public String getNivel() {
		return nivel;
	}

	public void setNivel(String nivel) {
		this.nivel = nivel;
	}

}