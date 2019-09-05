import { loginUser } from "./loginUser";

describe("Login User API", () => {
  it("should login correctly", async () => {
    const loginResult = await loginUser("fgghffgh@gofar.co", "Falcon1");
    expect(typeof loginResult.id).toEqual("string");
  });

  it("should login correctly", async () => {
    const loginResult = await loginUser("fake@gofar.co", "Falcon1");
    expect(typeof loginResult.id).not.toEqual("string");
  });
});
