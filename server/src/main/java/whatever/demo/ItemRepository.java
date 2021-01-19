package whatever.demo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemRepository  extends JpaRepository<Item,Integer>
{
	@Query("from Item where price < :x")
	List<Item> findItemsOnPrice(@Param("x") int j);

}
