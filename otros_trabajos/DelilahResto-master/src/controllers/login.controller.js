import {LoginService} from "../services/login.service";
import config from '../config/config';
import jwt from 'jsonwebtoken';
import {Login} from "../models/login.model";

export class LoginController{

  static async login(username, pass) {

    const loginObj = new Login(username, pass);
    const findUser = await LoginService.login(loginObj);

    if (findUser.length === 1) {
      try{
        const token = jwt.sign(findUser[0], config.JWT.PRIVATE_KEY);
        return token;
      }

      catch(error) {
        console.log('Cannot generate token:' + error);
        return null;
      }
    }
    else {
      return null;
    }
  }

  // const signIn = async (req, res) => {
  //   const { body } = req;
  //   const creds = await _authService.signIn(body);
  //   return res.status(200).send(creds);
  // }

}