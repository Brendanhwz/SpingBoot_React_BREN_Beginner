package net_javaguides.ems.service.impl;

import lombok.AllArgsConstructor;
import net_javaguides.ems.dto.EmployeeDto;
import net_javaguides.ems.entity.Employee;
import net_javaguides.ems.exception.ResourceNotFoundException;
import net_javaguides.ems.mapper.EmployeeMapper;
import net_javaguides.ems.repository.EmployeeRepository;
import net_javaguides.ems.service.EmployeeService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

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

    @Override
    public EmployeeDto getEmployeeById(Long employeeId) {
        Employee employee = employeeRepository.findById(employeeId)
                .orElseThrow(() -> new ResourceNotFoundException("Employee is not exist with given id: " + employeeId));
        return EmployeeMapper.mapToEmployeeDto(employee);
    }

    @Override
    public List<EmployeeDto> getAllEmployees() {
        List <Employee> allEmployees = employeeRepository.findAll();
        //Transforming the JPA Entity into DTO in a collection <List>
        return allEmployees.stream().map((Employee) -> EmployeeMapper.mapToEmployeeDto(Employee)).collect(Collectors.toUnmodifiableList());
    }
}
