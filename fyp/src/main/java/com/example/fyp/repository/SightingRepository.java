package com.example.fyp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.fyp.model.Sighting;

@Repository
public interface SightingRepository extends JpaRepository<Sighting, Long>{

	@Query(value = "SELECT * FROM sightings ORDER BY id DESC", nativeQuery = true)
	List<Sighting> findSighting();
	
}
