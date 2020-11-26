package com.learning.neodemo.api;

import com.learning.neodemo.movies.Movie;
import com.learning.neodemo.movies.MovieService;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @author Michael J. Simons
 */
@RestController
@RequestMapping("/api/v0/movies")
@Tag(name = "movies")
class MovieController {

	private final MovieService movieService;

	MovieController(MovieService movieService) {
		this.movieService = movieService;
	}

	@GetMapping("/directed_by/{name}")
	List<Movie> getDirectedBy(@PathVariable String name) {
		return movieService.getDirectedBy(name);
	}

	@GetMapping("/acted_in_by/{name}")
	List<Movie> getActedInBy(@PathVariable String name) {
		return movieService.getActedInBy(name);
	}

}
