const request = require("supertest");

describe("hello.js response", () => {
  it("Check if hello.js returns the correct response.", async () => {
    const res = await request("https://demo-five-ashy.vercel.app").get("/hello");
    const data = res.text;
    expect(data).toBe("Welcome to Emirates");
  });
});
