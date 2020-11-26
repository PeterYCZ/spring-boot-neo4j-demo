package com.learning.neodemo.movies;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.neo4j.driver.Driver;
import org.neo4j.driver.Session;
import org.springframework.stereotype.Service;

/**
 * @author Michael Hunger
 * @author Mark Angrish
 * @author Jennifer Reif
 * @author Michael J. Simons
 */
@Service
public class MovieService {

	private final MovieRepository movieRepository;

	MovieService(MovieRepository movieRepository) {
		this.movieRepository = movieRepository;
	}

	public List<Movie> getDirectedBy(String name) {
		return movieRepository.findAllByDirectorsName(name);
	}

	public List<Movie> getActedInBy(String name) {
		return movieRepository.findAllByActorsPersonName(name);
	}


}
