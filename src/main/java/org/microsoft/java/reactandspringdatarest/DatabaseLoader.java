package org.microsoft.java.reactandspringdatarest;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

    private final EmployeeRepository repository;

    public DatabaseLoader(final EmployeeRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... args) {
        this.repository.save(new Employee("SSS", "Intelli J", "License"));
    }
}
