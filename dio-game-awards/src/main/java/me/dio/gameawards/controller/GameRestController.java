package me.dio.gameawards.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import me.dio.gameawards.domain.model.Game;
import me.dio.gameawards.service.GameService;

@RestController
public class GameRestController {
	
	@Autowired
	private GameService businessLayer;
	
	@GetMapping("games")
	public ResponseEntity<List<Game>> findAll() {
		return ResponseEntity.ok(this.businessLayer.findAll());
	}

	
}
