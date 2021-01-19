package project_code;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Table(name="ToLogin")
@Entity
public class ToLogin {
	
	@Id
	private String emailid;
	
	private String password;

	public String getEmailid() {
		return emailid;
	}

	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	public ToLogin(String emailid, String password) {
		this.emailid = emailid;
		this.password = password;
	}
	
}
