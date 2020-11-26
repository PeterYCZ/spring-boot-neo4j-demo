package com.learning.neodemo.api;

import com.learning.neodemo.movies.Genre;
import com.learning.neodemo.movies.GenreRepository;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @author Michael J. Simons
 */
@RestController
@RequestMapping("/api/v0/genres")
@Tag(name = "genres")
class GenreController {

	private final GenreRepository genreRepository;

	GenreController(GenreRepository genreRepository) {
		this.genreRepository = genreRepository;
	}

	@GetMapping
	List<Genre> genres() {
		return genreRepository.findAll();
	}
}
