const Employee = require("../lib/Employee.js");

test('creates employee name and ID', () => {

    const employee = new Employee("Bob", 11111, "bob@gmail.com");

    // Employee name is a String
    expect(employee.name).toEqual(expect.any(String))

    // Employee ID is a number
    expect(employee.id).toEqual(expect.any(Number));
});

test('confirm employee email', () => {
    const testEmail = "bob@gmail.com";
    const employeeTwo = new Employee("Bob", 11111, testEmail);
    
    expect(employeeTwo.email).toBe(testEmail);
});

test('getName function is working', () => {
    const testName = "Bob";
    const testNameFunction = new Employee(testName, 1111, "bob@gmail.com");
    expect(testNameFunction.getName()).toBe(testName);
});

test('getID function is working', () => {
    const testId = 11111;
    const testIdFunction = new Employee("Bob", testId, "bob@gmail.com");
    expect(testIdFunction.getId()).toBe(testId);
});

test('getEmail function is working', () => {
    const testEmail = "bob@gmail.com";
    const testEmailFunction = new Employee("Bob", 11111, testEmail);
    expect(testEmailFunction.getEmail()).toBe(testEmail);
});

test('getRole function is working', () => {
    const testRole = "Employee";
    const testRoleFunction = new Employee("Bob", 11111, "bob@gmail.com");
    expect(testRoleFunction.getRole()).toBe(testRole);
});


