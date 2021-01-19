package project_code;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface AppFormRepository extends JpaRepository<ApplicationForm,String>
{
	@Query("from ToLogin where emailid = ?1 AND password=?2")
	List<ApplicationForm> findByEmailidAndPassword(String emaild, String password);

	
}


