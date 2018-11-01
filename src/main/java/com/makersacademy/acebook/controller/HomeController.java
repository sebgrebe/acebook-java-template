package com.makersacademy.acebook.controller;

import com.makersacademy.acebook.model.User;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class HomeController {

	@RequestMapping(value = "/")
	public String index() {
		return "index";
	}

	@PostMapping("/api/signup")
	public String signup(@RequestBody User user) {
		System.out.println(user);
		return "index";
	}

}
