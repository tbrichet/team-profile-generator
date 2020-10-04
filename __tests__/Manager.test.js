const Manager = require("../lib/Manager.js");

test('captures manager office number', () => {
    const testNumber = "555-555-5555";
    const manager = new Manager("Suzie", 33333, "suzie@gmail.com", testNumber);

    expect(manager.officeNumber).toBe(testNumber);
});

test('getOfficeNumber function is working', () => {
    const testNumber = "555-555-5555";
    const manager = new Manager("Suzie", 33333, "suzie@gmail.com", testNumber);

    expect(manager.getOfficeNumber()).toBe(testNumber);
});

test('getRole function is working', () => {
    const testManagerRole = "Manager";
    const testManagerRoleFunction = new Manager("Suzie", 33333, "suzie@gmail.com", "555-555-5555");

    expect(testManagerRoleFunction.getRole()).toBe(testManagerRole);
});