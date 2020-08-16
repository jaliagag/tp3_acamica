import { Service } from '../services/service';

export class LoginService {
    static async login (login) {
      return await Service.getQuery(
        `
        SELECT l.id_user, c.fullname, c.email, c.isAdmin
        FROM  customer c JOIN login l ON c.id = l.id_user
        WHERE l.username = ?
        AND l.pass = ?`,
          [login.username, login.pass]
      );
    }
  }