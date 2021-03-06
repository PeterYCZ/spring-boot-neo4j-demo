package com.learning.neodemo.movies;

import org.springframework.data.neo4j.core.schema.RelationshipProperties;
import org.springframework.data.neo4j.core.schema.TargetNode;

import java.util.ArrayList;
import java.util.List;

/**
 * @author Michael J. Simons
 */
@RelationshipProperties
public class Actor {

	@TargetNode
	private final Person person;

	private List<String> roles = new ArrayList<>();

	public Actor(Person person) {
		this.person = person;
	}

	public List<String> getRoles() {
		return roles;
	}

	public void setRoles(List<String> roles) {
		this.roles = roles;
	}

	public Person getPerson() {
		return person;
	}
}
