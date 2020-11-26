package com.learning.neodemo.movies;

import org.springframework.data.repository.Repository;

import java.util.List;

/**
 * @author Michael J. Simons
 */
public interface GenreRepository extends Repository<Genre, Long> {

	List<Genre> findAll();
}
