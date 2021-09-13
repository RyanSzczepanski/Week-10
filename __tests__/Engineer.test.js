const Engineer = require("../lib/Engineer");

test("Can Instantiate Engineer", () => {
    e = new Engineer();
    expect(typeof(e)).toBe("object");
})

test("Set Name of Engineer", () => {
    name = "Ryan"
    e = new Engineer(name);
    expect(e.name).toBe(name)
})

test("Set Id of Engineer", () => {
    id = 1
    e = new Engineer("foo", id);
    expect(e.id).toBe(id)
})

test("Set Email of Engineer", () => {
    email = "user@email.com"
    e = new Engineer("foo", 1, email);
    expect(e.email).toBe(email)
})

test("Set Github of Engineer", () => {
    github = "user.github.com"
    e = new Engineer("foo", 1, "user@email.com", github);
    expect(e.github).toBe(github)
})

test("Get Name of Engineer", () => {
    name = "Ryan"
    e = new Engineer(name);
    expect(e.getName()).toBe(name)
})

test("Get Id of Engineer", () => {
    id = 1
    e = new Engineer("foo", id);
    expect(e.getId()).toBe(id)
})

test("Get Email of Engineer", () => {
    email = "user@email.com"
    e = new Engineer("foo", 1, email);
    expect(e.getEmail()).toBe(email)
})

test("Get Github of Engineer", () => {
    github = "user.github.com"
    e = new Engineer("foo", 1, "user@email.com", github);
    expect(e.getGithub()).toBe(github)
})

test("getRole() returns \"Engineer\"", () => {
    role = "Engineer"
    e = new Engineer();
    expect(e.getRole()).toBe(role)
})