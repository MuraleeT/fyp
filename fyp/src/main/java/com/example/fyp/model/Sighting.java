package com.example.fyp.model;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "sightings")
public class Sighting {

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "animal")
	private String animal;
	
	@Column(name = "area")
	private String area;	
	
	@Column(name = "location")
	private String location;

	@Column(name = "time")
	private String time;
	
	@Column(name = "user_id")
	private String userId;
	
	
	public Sighting() {
		
		
		
	}
	
	public Sighting(String animal, String location, String area, String time, String userId) {
		super();
		this.animal = animal;
		this.area = area;
		this.location = location;
		this.time = time;
		this.userId = userId;
	}
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getAnimal() {
		return animal;
	}
	public void setAnimal(String animal) {
		this.animal = animal;
	}
	public String getArea() {
		return area;
	}
	public void setArea(String area) {
		this.area = area;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserID(String userId) {
		this.userId = userId;
	}
	
}
