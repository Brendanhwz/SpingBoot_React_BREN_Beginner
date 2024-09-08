package net_javaguides.ems.controller;

import lombok.AllArgsConstructor;
import net_javaguides.ems.dto.EmployeeDto;
import net_javaguides.ems.service.EmployeeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/employees")
public class EmployeeController {

    private EmployeeService employeeService;

    //REST API (1) -> CREATING EMPLOYEE
    @PostMapping
    public ResponseEntity <EmployeeDto> createEmployee (@RequestBody EmployeeDto employeeDto) {
        EmployeeDto savedEmployee = employeeService.createEmployee(employeeDto);
        return new ResponseEntity<>(savedEmployee, HttpStatus.CREATED);
    }

    //REST API (2) -> Retrieving single employee by Id (PK)
    @GetMapping("{id}")
    public ResponseEntity <EmployeeDto> getEmployeeById (@PathVariable("id") Long employeeId) {
        EmployeeDto employeeDto = employeeService.getEmployeeById(employeeId);
        return ResponseEntity.ok(employeeDto);
    }

    //REST API (3) -> Retrieving all employees
    @GetMapping
    public ResponseEntity<List<EmployeeDto>> getAllEmployees () {
        List<EmployeeDto> employees = employeeService.getAllEmployees();
        return ResponseEntity.ok(employees);
    }

    //REST API (4) -> Updating existing employee record
    @PutMapping("{id}")
    public ResponseEntity<EmployeeDto> updateEmployee (@PathVariable("id") Long employeeId,
                                                       @RequestBody EmployeeDto updatedEmployee) {
        EmployeeDto updateEmployeeNew = employeeService.updateEmployee(employeeId, updatedEmployee);
        return ResponseEntity.ok(updateEmployeeNew);
    }

    //REST API (5) -> Delete single employee record from DB
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteEmployee (@PathVariable("id") Long employeeId) {
        employeeService.deleteEmployee(employeeId);
        return ResponseEntity.ok("Employee is successfully deleted from the records!");
    }
}
