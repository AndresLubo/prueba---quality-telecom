const pgClient = require(".././database/DBclient.js");

class AuthService {
  async findByUser(user) {
    const response = await pgClient.query(
      `select * from public."Auth" where "Auth".user='${user}';`
    );

    if (response.rows.length === 0)
      throw { error: "No se ha encontrado el usuario indicado" };

    return response.rows;
  }

  async getUser(user, password) {
    const User = await this.findByUser(user);

    const isMatch = password === User[0].password;
    if (!isMatch) throw { error: "Credenciales incorrectas" };

    return User;
  }
}

module.exports = AuthService;
