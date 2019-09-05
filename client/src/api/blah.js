const { loginUser } = require("./loginUser");

async function test() {
  const loginResult = await loginUser("fgghffgh@gofar.co", "Falcon1");
  console.log(loginResult);
}

test();
