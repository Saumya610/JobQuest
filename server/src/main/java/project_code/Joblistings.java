package project_code;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Joblistings {
	
	@Id
	private String id;
	
	private String role,location,exp,comp;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getExp() {
		return exp;
	}

	public void setExp(String exp) {
		this.exp = exp;
	}

	public String getComp() {
		return comp;
	}

	public void setComp(String comp) {
		this.comp = comp;
	}
	public Joblistings(String id, String role, String location, String exp, String comp) {
		this.id = id;
		this.role = role;
		this.location = location;
		this.exp = exp;
		this.comp = comp;
	}

	

}
