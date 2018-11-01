package com.makersacademy.acebook.model;

import static org.hamcrest.CoreMatchers.*;
import static org.junit.Assert.*;
import org.junit.Before;
import com.makersacademy.acebook.model.User;
import org.junit.Test;

public class UserTest {

    private User user;

    @Before
    public void beforeEachTest() {
        user = new User("name_test","email_test","password_test");
    }

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

    @Test
    public void setEncryptedPassword() {
        String oldPassword = user.getPassword();
        user.setEncryptedPassword();
        assertThat(user.getPassword(), is(not(oldPassword)));
    }

}
