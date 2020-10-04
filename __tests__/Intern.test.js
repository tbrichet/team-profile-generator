const Intern = require("../lib/Intern.js");
const { getMaxListeners } = require("process");

test('captures school input', () => {
    const testSchool = "University of Arizona";
    const intern = new Intern("Joe", 22222, "joe@gmail.com", testSchool);

    expect(intern.school).toBe(testSchool);

});

test('getSchool function is working', () => {
    const testSchool = "University of Arizona";
    const intern = new Intern("Joe", 22222, "joe@gmail.com", testSchool);

    expect(intern.getSchool()).toBe(testSchool);
});

test('getRole function is working', () => {
    const testInternRole = "Intern";
    const testInternRoleFunction = new Intern("Joe", 22222, "joe@gmail.com", "Unversity of Arizona");

    expect(testInternRoleFunction.getRole()).toBe(testInternRole);

});