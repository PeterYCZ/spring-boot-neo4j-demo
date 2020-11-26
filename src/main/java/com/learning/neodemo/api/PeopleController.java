package com.learning.neodemo.api;

import com.learning.neodemo.movies.PeopleRepository;
import com.learning.neodemo.movies.Person;
import io.swagger.v3.oas.annotations.tags.Tag;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

/**
 * @author Michael J. Simons
 */
@RestController
@RequestMapping("/api/v0/people")
@Tag(name = "people")
class PeopleController {

	private final PeopleRepository peopleRepository;

	PeopleController(PeopleRepository peopleRepository) {
		this.peopleRepository = peopleRepository;
	}

	@GetMapping("/bacon")
	List<Person> getBaconPeople(@RequestParam String name1, @RequestParam String name2) {
		List<Person> baconPeople = peopleRepository.findBaconPeopleBetween(name1, name2);
		if (baconPeople.isEmpty()) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No bacon people found");
		}
		return baconPeople;
	}
}
