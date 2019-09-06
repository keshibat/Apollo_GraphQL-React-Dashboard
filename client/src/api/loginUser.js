const LOGIN_URL = "https://dev.gofar.co/api/users/login";
const fetch = require("isomorphic-fetch");

async function loginUser(email, password) {
  const loginResult = await fetch(LOGIN_URL, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify({
      email,
      password
    })
  });

  const loginResultJSON = await loginResult.json();

  return loginResultJSON;
}

module.exports = {
  loginUser
};
