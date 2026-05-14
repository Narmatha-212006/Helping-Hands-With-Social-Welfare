package com.helpinghands.controller;

import com.helpinghands.model.User;
import com.helpinghands.payload.request.LoginRequest;
import com.helpinghands.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.Map;

@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:5173", "http://localhost:8080", "http://localhost:8081"})
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    UserRepository userRepository;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request){
       User user = userRepository
       .findByUsername(request.getUsername())
       .orElse(null);

       if(user == null){
          return ResponseEntity.badRequest()
          .body("User not found");
       }

       if(!user.getPassword().equals(request.getPassword())){
          return ResponseEntity.badRequest()
          .body("Invalid credentials");
       }

        Map<String, Object> response = new HashMap<>();
        response.put("token", "dummy-jwt-token-for-" + user.getUsername());
        response.put("id", user.getId());
        response.put("username", user.getUsername());
        response.put("email", user.getEmail());
        response.put("role", user.getRole());

       return ResponseEntity.ok(response);
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user){
        user.setStatus("ACTIVE");
        userRepository.save(user);
        return ResponseEntity.ok("Registration successful");
    }
}
