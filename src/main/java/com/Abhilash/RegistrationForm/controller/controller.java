package com.Abhilash.RegistrationForm.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;


@Controller
public class controller {
	@GetMapping("/")
	public String RegForm(Model model) {
		Student student=new Student();
		model.addAttribute("student", student);
		return "index";
	}
	@PostMapping("/studata")
	public String submit_form(@ModelAttribute("student") Student student) {
		return "formDetails";
	}
}
