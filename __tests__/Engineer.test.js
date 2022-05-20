const Engineer = require('../lib/Engineer');
const engineer = new Engineer('John', 2, 'john@john.com', 'github.com/john');

test("employee inheritence works", () => {
    expect(engineer.name).toBe('John');
    expect(engineer.id).toBe(2);
    expect(engineer.email).toBe('john@john.com');
})

test("getRole() is updated", () => {
    const role = engineer.getRole();
    expect(role).toBe('Engineer');
})


test("getGithub() returns the dudes github account", () => {
    const github = engineer.getGithub();
    expect(github).toBe('github.com/john');
})