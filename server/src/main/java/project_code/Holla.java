package project_code;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.zip.Deflater;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.ResponseEntity.BodyBuilder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import whatever.demo.Item;


@CrossOrigin(origins = "*")
@RestController
public class Holla {

	private LoginRepository lr;
	private AppFormRepository afr;
	private CVRepository cvr;
	private JobListingRepository r;
	  
	  @Autowired 
	  public void setR(JobListingRepository r)
	  {
	   System.out.println("hey wiring has happened");
	  this.r = r; }
	  
	 

	@Autowired
	public void setLr(LoginRepository lr) {
		 System.out.println("hey wiring has happened");
		this.lr = lr;
	}
	
	@Autowired
	public void setCvr(CVRepository cvr) {
		 System.out.println("hey wiring has happened");
		this.cvr = cvr;
	}
	
	@Autowired
	public void setAfr(AppFormRepository afr) {
		 System.out.println("hey wiring has happened");
		this.afr = afr;
	}

	@PostMapping("/login")
	public List<ToLogin> getLoginDetails(@RequestBody() ToLogin x )
	{
		return lr.findByEmailidAndPassword(x.getEmailid(),x.getPassword());
						
	}
	
	@PostMapping("/upload")
	public BodyBuilder uploadCV(@RequestParam("imageFile") MultipartFile file) throws IOException
	{
		System.out.println("Original Image Byte Size - " + file.getBytes().length);
		CVData img = new CVData(file.getOriginalFilename(), file.getContentType(),compressBytes(file.getBytes()));
		cvr.save(img);
		return ResponseEntity.status(HttpStatus.OK);
						
	}
	
	 @PostMapping("/insert") 
	  public String f3(@RequestBody() Joblistings x) {
	  String result = "failed";
	  r.save(x);
	  result ="passed";
	  
	  return result;
	  
	  }
	 

@GetMapping("/select") 
public Joblistings getItemDetails(@RequestParam("x") String x) 
{
	 Joblistings i =null; 
	 Optional<Joblistings> y = r.findById(x);
if(y.isPresent())
{ 
	  i = y.get();

} 
else i =new Joblistings("","","","","");

return i;

}

@GetMapping("/selectall") 
public List<Joblistings> getDetailsforAll()
{
return r.findAll();
}

@GetMapping("/byloc")
public List<Joblistings>  getJobsBasedOnLocation(@RequestParam("x")String location)
{ 
	  return r.findJobsByLocation(location); } 


	
	// compress the image bytes before storing it in the database
	public static byte[] compressBytes(byte[] data) 
	{
	   Deflater deflater = new Deflater();
	   deflater.setInput(data);
	   deflater.finish();
	   ByteArrayOutputStream outputStream = new ByteArrayOutputStream(data.length);
	   byte[] buffer = new byte[1024];
	   while (!deflater.finished()) {
	   int count = deflater.deflate(buffer);
	   outputStream.write(buffer, 0, count);
	}
	try {
	   outputStream.close();
	} catch (IOException e) {
	}
	   System.out.println("Compressed Image Byte Size - " + outputStream.toByteArray().length);
	   return outputStream.toByteArray();
	}
	
	// Method to uncompress the image bytes before returning it to the angular application
	
	
	@PostMapping("/appform")
	public ApplicationForm f9(@RequestBody() ApplicationForm x)
	{
		afr.save(x);
		return x;
	}
	
}

