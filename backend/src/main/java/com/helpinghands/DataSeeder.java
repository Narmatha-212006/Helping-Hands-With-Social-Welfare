package com.helpinghands;

import com.helpinghands.model.ERole;
import com.helpinghands.model.Role;
import com.helpinghands.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataSeeder implements CommandLineRunner {

    @Autowired
    private RoleRepository roleRepository;

    @Override
    public void run(String... args) throws Exception {
        seedRoles();
    }

    private void seedRoles() {
        if (roleRepository.count() == 0) {
            roleRepository.save(new Role(ERole.ROLE_USER));
            roleRepository.save(new Role(ERole.ROLE_ADMIN));
            roleRepository.save(new Role(ERole.ROLE_VOLUNTEER));
            roleRepository.save(new Role(ERole.ROLE_DONOR));
            roleRepository.save(new Role(ERole.ROLE_NGO));
        }
    }
}
