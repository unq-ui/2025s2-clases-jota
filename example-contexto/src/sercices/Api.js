import Storage from "./Storage";

// Los timeouts son para simular llamadas reales a una API remota!!!!

const login = async (username, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "user" && password === "pass") {
        Storage.setToken("fake-jwt-token");
        resolve({ user: { id: 1, name: "John Doe" } });
      } else {
        reject("Invalid credentials");
      }
    }, 2000);
  });
};

const getUser = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ user: { id: 1, name: "John Doe" } });
    }, 2000);
  });
};

const Api = {
  login,
  getUser
};

export default Api;
