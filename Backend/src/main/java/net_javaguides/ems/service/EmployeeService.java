package net_javaguides.ems.service;

import net_javaguides.ems.dto.EmployeeDto;
import net_javaguides.ems.entity.Employee;

import java.util.List;

public interface EmployeeService {
    EmployeeDto createEmployee (EmployeeDto employeeDto);

    EmployeeDto getEmployeeById (Long employeeId);

    List<EmployeeDto> getAllEmployees ();

    EmployeeDto updateEmployee (Long employeeId, EmployeeDto updatedEmployee);

    void deleteEmployee (Long employeeId);

}
