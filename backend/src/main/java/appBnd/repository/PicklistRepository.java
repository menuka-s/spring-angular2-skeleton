package appBnd.repository;

import java.util.List;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import appBnd.model.Picklist;

public interface PicklistRepository extends PagingAndSortingRepository<Picklist, Integer> {

    List<Picklist> findByPickId(@Param("pickId") int pickId);

}