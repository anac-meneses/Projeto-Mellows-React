package br.org.mellows.models;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Login extends Entidade {
	@Column(nullable = false)
	private String tipoLogin;
	
	@JsonIgnore
	@OneToMany(mappedBy = "login")
	private List<Usuario> usuarios = new ArrayList<Usuario>();

	public Login() {
		super();
	}

	public Login(String tipoLogin, List<Usuario> usuarios) {
		super();
		this.tipoLogin = tipoLogin;
		this.usuarios = usuarios;
	}

	public String getTipoLogin() {
		return tipoLogin;
	}

	public void setTipoLogin(String tipoLogin) {
		this.tipoLogin = tipoLogin;
	}

	public List<Usuario> getUsuarios() {
		return usuarios;
	}

	public void setUsuarios(List<Usuario> usuarios) {
		this.usuarios = usuarios;
	}

}
