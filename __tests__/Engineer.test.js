const Engineer = require("../lib/Engineer.js");

test('captures github username', () => {
    const testGithub = "username";
    const engineer = new Engineer("Bob", 1111, "bob@gmail.com", testGithub);

    expect(engineer.github).toBe(testGithub);
});

test('getGithub function is working', () => {
    const testGithub = "username";
    const testGithubFunction = new Engineer("Bob", 11111, "bob@gmail.com", testGithub);

    expect(testGithubFunction.getGithub()).toBe(testGithub);
});

test('getRole function is working', () => {
    const testEngineerRole = "Engineer";
    const testEngineerRoleFunction = new Engineer("Bob", 11111, "bob@gmail.com", "username");

    expect(testEngineerRoleFunction.getRole()).toBe(testEngineerRole);
});