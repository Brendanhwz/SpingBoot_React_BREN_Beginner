package net_javaguides.ems.repository;

import net_javaguides.ems.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository <Employee, Long> {
    //Initial commit in setting up EmployeeRepository interface
}
