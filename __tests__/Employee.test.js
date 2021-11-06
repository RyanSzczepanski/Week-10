const Employee = require("../lib/Employee");

test("Can Instantiate Employee", () => {
    e = new Employee();
    expect(typeof(e)).toBe("object");
})

test("Set Name of Employee", () => {
    name = "Ryan"
    e = new Employee(name);
    expect(e.name).toBe(name)
})

test("Set Id of Employee", () => {
    id = 1
    e = new Employee("foo", id);
    expect(e.id).toBe(id)
})

test("Set Email of Employee", () => {
    email = "user@email.com"
    e = new Employee("foo", 1, email);
    expect(e.email).toBe(email)
})

test("Get Name of Employee", () => {
    name = "Ryan"
    e = new Employee(name);
    expect(e.getName()).toBe(name)
})

test("Get Id of Employee", () => {
    id = 1
    e = new Employee("foo", id);
    expect(e.getId()).toBe(id)
})

test("Get Email of Employee", () => {
    email = "user@email.com"
    e = new Employee("foo", 1, email);
    expect(e.getEmail()).toBe(email)
})

test("getRole() returns \"Employee\"", () => {
    role = "Employee"
    e = new Employee();
    expect(e.getRole()).toBe(role)
})