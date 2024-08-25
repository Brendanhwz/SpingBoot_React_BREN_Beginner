package net_javaguides.ems.service.impl;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import net_javaguides.ems.dto.EmployeeDto;
import net_javaguides.ems.entity.Employee;
import net_javaguides.ems.mapper.EmployeeMapper;
import net_javaguides.ems.repository.EmployeeRepository;
import net_javaguides.ems.service.EmployeeService;
import org.springframework.stereotype.Service;

@AllArgsConstructor

@Service
public class EmployeeServiceImpl implements EmployeeService {

    private EmployeeRepository employeeRepository;

    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {
        Employee employee = EmployeeMapper.mapToEmployee(employeeDto);
        Employee savedEmployee =  employeeRepository.save(employee);
        return EmployeeMapper.mapToEmployeeDto(savedEmployee);
    }
}
