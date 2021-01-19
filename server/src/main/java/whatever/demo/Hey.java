package whatever.demo;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Hey {
	
	
	private ItemRepository  r;
	
	@Autowired
	public void setR(ItemRepository r) {
		
		System.out.println("hey wiring has happened");
		this.r = r;
	}

	@PostMapping("/dml")
	public String f3(@RequestBody() Item x)
	{
		
		//this function we will make changes tomorrow.
		String result = "failed";
		r.save(x);//repository method to save..
		result ="passed";//no exception occurred.
		
		return result;
		
		
	}
	
	
	@GetMapping("/abc123")
	public Item getItemDetails(@RequestParam("x") int x)
	{
		Item i =null;
		Optional<Item> y = r.findById(x);
		if(y.isPresent())
		{
			i = y.get();
			
		}
		else
			i =new Item(0,0);
		
		
		return i;
			
	}
	
	
	@GetMapping("/pqr")
	public List<Item> getItemDetailsLessThanPrice(@RequestParam("x")int price)
	{
		 return r.findItemsOnPrice(price);
	}
	
	

}
