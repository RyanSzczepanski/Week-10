const Manager = require("../lib/Manager");

test("Can Instantiate Manager", () => {
    m = new Manager();
    expect(typeof(m)).toBe("object");
})

test("Set Name of Manager", () => {
    name = "Ryan"
    m = new Manager(name);
    expect(m.name).toBe(name)
})

test("Set Id of Manager", () => {
    id = 1
    m = new Manager("foo", id);
    expect(m.id).toBe(id)
})

test("Set Email of Manager", () => {
    email = "user@email.com"
    m = new Manager("foo", "1", email);
    expect(m.email).toBe(email)
})

test("Set Office Number of Manager", () => {
    officeNumber = 1
    m = new Manager("foo", "1", "user@email.com", officeNumber);
    expect(m.officeNumber).toBe(officeNumber)
})

test("Get Name of Manager", () => {
    name = "Ryan"
    m = new Manager(name);
    expect(m.getName()).toBe(name)
})

test("Get Id of Manager", () => {
    id = 1
    m = new Manager("foo", id);
    expect(m.getId()).toBe(id)
})

test("Get Email of Manager", () => {
    email = "user@email.com"
    m = new Manager("foo", "1", email);
    expect(m.getEmail()).toBe(email)
})

test("Get Office Number of Manager", () => {
    officeNumber = 1
    m = new Manager("foo", "1", "user@email.com", officeNumber);
    expect(m.getOfficeNumber()).toBe(officeNumber)
})

test("getRole() returns \"Manager\"", () => {
    role = "Manager"
    m = new Manager();
    expect(m.getRole()).toBe(role)
})