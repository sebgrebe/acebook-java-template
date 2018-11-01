package com.makersacademy.acebook.service;

import com.makersacademy.acebook.model.User;
import com.makersacademy.acebook.service.UserService;
import com.makersacademy.acebook.repository.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

@Service
public class UserServiceImplementation implements UserService {
    @Autowired
    private UserRepository userRepository;

    public void addUser(User user) {
      userRepository.save(user);
    }
}
