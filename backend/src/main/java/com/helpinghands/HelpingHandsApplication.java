package com.helpinghands;

import com.helpinghands.model.ERole;
import com.helpinghands.model.Role;
import com.helpinghands.repository.RoleRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class HelpingHandsApplication {

	public static void main(String[] args) {
		SpringApplication.run(HelpingHandsApplication.class, args);
	}

	@Bean
	CommandLineRunner initRoles(RoleRepository roleRepository) {
		return args -> {
			if (roleRepository.count() == 0) {
				roleRepository.save(new Role(ERole.ROLE_ADMIN));
				roleRepository.save(new Role(ERole.ROLE_USER));
				roleRepository.save(new Role(ERole.ROLE_VOLUNTEER));
				roleRepository.save(new Role(ERole.ROLE_DONOR));
				roleRepository.save(new Role(ERole.ROLE_NGO));
				System.out.println("Default roles seeded into database.");
			}
		};
	}
}
