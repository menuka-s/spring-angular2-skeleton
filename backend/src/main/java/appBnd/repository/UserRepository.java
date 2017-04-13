package appBnd.repository;

import java.util.List;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import appBnd.model.User;

public interface UserRepository extends PagingAndSortingRepository<User, Integer> {

    List<User> findByName(@Param("name") String name);

}