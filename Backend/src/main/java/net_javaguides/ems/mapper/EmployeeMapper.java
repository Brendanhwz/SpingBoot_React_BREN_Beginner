package net_javaguides.ems.mapper;

import net_javaguides.ems.dto.EmployeeDto;
import net_javaguides.ems.entity.Employee;

public class EmployeeMapper {
    //From class JPA Entity to Class DTO
    public static EmployeeDto mapToEmployeeDto (Employee employee) {
        return new EmployeeDto (
                employee.getId(),
                employee.getFirstName(),
                employee.getLastName(),
                employee.getEmail()
        );
    }
    //From class DTO to class JPA Entity
    public static Employee mapToEmployee (EmployeeDto employeeDto) {
        return new Employee (
            employeeDto.getId(),
            employeeDto.getFirstName(),
            employeeDto.getLastName(),
            employeeDto.getEmail()
        );
    }

} 
