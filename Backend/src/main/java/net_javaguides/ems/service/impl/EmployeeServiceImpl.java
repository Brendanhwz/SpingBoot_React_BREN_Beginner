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

    @Override
    public EmployeeDto updateEmployee(Long employeeId, EmployeeDto updatedEmployee) {
        //Calling Hibernate JpaRepository API method to find record
        Employee employee = employeeRepository.findById(employeeId).orElseThrow(
                () -> new ResourceNotFoundException("Employee is not exist with given id: " + employeeId)
        );
        //Setting existing jpa entity with updated values from supplied @RequestBody
        //20240908 including fix to set only set values in @RequestBody and keeping the rest persisted in DB
        if (updatedEmployee.getFirstName() != null) {
            employee.setFirstName(updatedEmployee.getFirstName());
        }
        if (updatedEmployee.getLastName() != null) {
            employee.setLastName(updatedEmployee.getLastName());
        }
        if (updatedEmployee.getEmail() != null) {
            employee.setEmail(updatedEmployee.getEmail());
        }
        Employee saveUpdatedEmployee = employeeRepository.save(employee);

        return EmployeeMapper.mapToEmployeeDto(saveUpdatedEmployee);
    }

    @Override
    public void deleteEmployee(Long employeeId) {
        Employee employee = employeeRepository.findById(employeeId).orElseThrow(
                () -> new ResourceNotFoundException("Employee is not exist with given id: " + employeeId)
        );
        employeeRepository.deleteById(employeeId);
    }
}
