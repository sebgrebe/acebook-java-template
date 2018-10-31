package com.makersacademy.acebook.model;

import static org.hamcrest.CoreMatchers.containsString;
import static org.junit.Assert.*;

import com.makersacademy.acebook.model.User;
import org.junit.Test;

public class UserTest {

    private User user = new User("name_test","email_test","password_test");


    @Test
    public void getUsername() {
        System.out.println(user);
        assertEquals("name_test",user.getUsername());
    }

    @Test
    public void getEmail() {
        assertEquals("email_test",user.getEmail());
    }

    @Test
    public void getPassword() {
        assertEquals("password_test",user.getPassword());
    }

}
