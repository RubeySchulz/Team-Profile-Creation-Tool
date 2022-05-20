const Employee = require('../lib/Employee');
const employee = new Employee('John', 1, 'john@john.com');


test("Employee is created correctly", () => {

    expect(employee.name).toBe('John');
    expect(employee.id).toBe(1);
    expect(employee.email).toBe('john@john.com');
})

test("getName() should return the employee name", () => {
    const name = employee.getName();
    expect(name).toBe('John');
})

test("getID() should return employee id", () => {
    const id = employee.getId();
    expect(id).toBe(1);
})

test("getEmail() should return employee's email", () => {
    const email = employee.getEmail();
    expect(email).toBe('john@john.com');
})

test("getRole() should return employee's role", () => {
    const role = employee.getRole();
    expect(role).toBe('Employee');
})