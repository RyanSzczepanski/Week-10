const Intern = require("../lib/Intern");

test("Can Instantiate Intern", () => {
    i = new Intern();
    expect(typeof(i)).toBe("object");
})

test("Set Name of Intern", () => {
    name = "Ryan"
    i = new Intern(name);
    expect(i.name).toBe(name)
})

test("Set Id of Intern", () => {
    id = 1
    i = new Intern("foo", id);
    expect(i.id).toBe(id)
})

test("Set Email of Intern", () => {
    email = "user@email.com"
    i = new Intern("foo", 1, email);
    expect(i.email).toBe(email)
})

test("Set Office Number of Intern", () => {
    school = "Simsbury High School"
    i = new Intern("foo", 1, "user@email.com", school);
    expect(i.school).toBe(school)
})

test("Get Name of Intern", () => {
    name = "Ryan"
    i = new Intern(name);
    expect(i.getName()).toBe(name)
})

test("Get Id of Intern", () => {
    id = 1
    i = new Intern("foo", id);
    expect(i.getId()).toBe(id)
})

test("Get Email of Intern", () => {
    email = "user@email.com"
    i = new Intern("foo", 1, email);
    expect(i.getEmail()).toBe(email)
})

test("Get Office Number of Intern", () => {
    school = "Simsbury High School"
    i = new Intern("foo", 1, "user@email.com", school);
    expect(i.getSchool()).toBe(school)
})

test("getRole() returns \"Intern\"", () => {
    role = "Intern"
    i = new Intern();
    expect(i.getRole()).toBe(role)
})