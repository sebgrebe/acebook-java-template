package com.makersacademy.acebook.controller;

import com.makersacademy.acebook.model.User;
import com.makersacademy.acebook.service.UserServiceImplementation;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.beans.factory.annotation.Autowired;

@Controller
public class HomeController {

	@Autowired
	private UserServiceImplementation userService;

	@RequestMapping(value = "/")
	public String index() {
		return "index";
	}

	@PostMapping("/api/signup")
	public String addUser(@RequestBody User user) {
		System.out.println(user);
		userService.addUser(user);
		// UserService.save(user);
		return "index";
	}

}
