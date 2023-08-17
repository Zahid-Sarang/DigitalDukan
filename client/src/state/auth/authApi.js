export function createUser(userData) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8000/users", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function checkUser(logInfo) {
  return new Promise(async (resolve, reject) => {
    const email = logInfo.email;
    const password = logInfo.password;
    const response = await fetch("http://localhost:8000/users?email=" + email);
    const data = await response.json();
    if (data.length) {
      if (password === data[0].password) {
        resolve({ data: data[0] });
      } else {
        reject("Wrong credentials");
      }
    } else {
      reject("No user found");
    }
  });
}

