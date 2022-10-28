const hello = require("./hello");
describe("My hello", () => {
  test("works", () => {
    expect(hello.hello()).toEqual("Hola mundo desde México, curso de Cloud y Devops, tarea 4.2 JavisStark otra oportunidad 3");
  });
});
