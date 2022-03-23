package com.example.fyp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.fyp.model.Sighting;

@Repository
public interface SightingRepository extends JpaRepository<Sighting, Long>{

	
	
	
}
