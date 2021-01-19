package whatever.demo;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Item {
	
	@Id
	private int itemno;
	
	private int price;

	public int getItemno() {
		return itemno;
	}

	public void setItemno(int itemno) {
		this.itemno = itemno;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	public Item() {
		// TODO Auto-generated constructor stub
	}

	public Item(int itemno, int price) {

		this.itemno = itemno;
		this.price = price;
	}
	
	

}
