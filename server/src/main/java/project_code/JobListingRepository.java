package project_code;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface JobListingRepository  extends JpaRepository<Joblistings,String>
{
	@Query("from Joblistings where location = :x")
	List<Joblistings> findJobsByLocation(@Param("x") String j);

}
