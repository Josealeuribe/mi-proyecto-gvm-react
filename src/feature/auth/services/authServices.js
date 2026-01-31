export const authServices = {
  async createList(data) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(data);
    localStorage.setItem("users", JSON.stringify(users));
    return { success: true };
  },

  async login({ email, password }) {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const userFound = users.find(
      (u) => u.email === email && u.password === password
    );

    if (userFound) {
      localStorage.setItem("tokenGvm", "logged");
      return { success: true };
    }

    return { success: false, message: "Credenciales incorrectas" };
  },
};
