package project_code;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Table(name="ApplicationForm")
@Entity
public class ApplicationForm {
	
	@Id
	private String email;
	
	private String fmname,lname,mdname,add1,city,state,country,
	typ,mode,choice,phoneno;
	
	private int zipcode;
	private Date start,till;
	
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getFmname() {
		return fmname;
	}
	public void setFmname(String fmname) {
		this.fmname = fmname;
	}
	public String getLname() {
		return lname;
	}
	public void setLname(String lname) {
		this.lname = lname;
	}
	public String getMdname() {
		return mdname;
	}
	public void setMdname(String mdname) {
		this.mdname = mdname;
	}
	public String getAdd1() {
		return add1;
	}
	public void setAdd1(String add1) {
		this.add1 = add1;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public String getTyp() {
		return typ;
	}
	public void setTyp(String typ) {
		this.typ = typ;
	}
	public String getMode() {
		return mode;
	}
	public void setMode(String mode) {
		this.mode = mode;
	}
	public String getChoice() {
		return choice;
	}
	public void setChoice(String choice) {
		this.choice = choice;
	}
	public int getZipcode() {
		return zipcode;
	}
	public void setZipcode(int zipcode) {
		this.zipcode = zipcode;
	}
	public String getPhoneno() {
		return phoneno;
	}
	public void setPhoneno(String phoneno) {
		this.phoneno = phoneno;
	}
	public Date getStart() {
		return start;
	}
	public void setStart(Date start) {
		this.start = start;
	}
	public Date getTill() {
		return till;
	}
	public void setTill(Date till) {
		this.till = till;
	}
	public ApplicationForm(String email, String fmname, String lname, String mdname, String add1, String city,
			String state, String country, String typ, String mode, String choice, int zipcode, String phoneno, Date start,
			Date till) {
		super();
		this.email = email;
		this.fmname = fmname;
		this.lname = lname;
		this.mdname = mdname;
		this.add1 = add1;
		this.city = city;
		this.state = state;
		this.country = country;
		this.typ = typ;
		this.mode = mode;
		this.choice = choice;
		this.zipcode = zipcode;
		this.phoneno = phoneno;
		this.start = start;
		this.till = till;
	}
	

	

}
