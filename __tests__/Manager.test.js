const Manager = require('../lib/Manager');
const manager = new Manager('John', 2, 'john@john.com', 1);

test("employee inheritence works", () => {
    expect(manager.name).toBe('John');
    expect(manager.id).toBe(2);
    expect(manager.email).toBe('john@john.com');
})

test("getRole() is updated", () => {
    const role = manager.getRole();
    expect(role).toBe('Manager');
})


test("getOffice() returns the dudes office number", () => {
    const officeNumber = manager.getOffice();
    expect(officeNumber).toBe(1);
})