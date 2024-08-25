package net_javaguides.ems.service;

import net_javaguides.ems.dto.EmployeeDto;
import net_javaguides.ems.entity.Employee;

public interface EmployeeService {
    EmployeeDto createEmployee (EmployeeDto employeeDto);
}
