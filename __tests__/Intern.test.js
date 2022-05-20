const Intern = require('../lib/Intern');
const intern = new Intern('John', 2, 'john@john.com', 'Harvard');

test("employee inheritence works", () => {
    expect(intern.name).toBe('John');
    expect(intern.id).toBe(2);
    expect(intern.email).toBe('john@john.com');
})

test("getRole() is updated", () => {
    const role = intern.getRole();
    expect(role).toBe('Intern');
})

test("getSchool() returns the dudes school", () => {
    const school = intern.getSchool();
    expect(school).toBe('Harvard');
})