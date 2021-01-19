package project_code;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CVRepository  extends JpaRepository<CVData,Long>
{
	

	
}
