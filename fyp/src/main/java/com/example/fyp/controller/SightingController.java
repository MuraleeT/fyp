package com.example.fyp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.fyp.model.Sighting;
import com.example.fyp.repository.SightingRepository;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class SightingController {
	
	@Autowired
	private SightingRepository sightingRepository;
	
	@GetMapping("/sightings")
	public List<Sighting> getAllSightings(){
		return sightingRepository.findAll();
	}
	
	@PostMapping("/sightings")
	public Sighting createSighting(@RequestBody Sighting sighting) {
		return sightingRepository.save(sighting);
	}
	
	

}
