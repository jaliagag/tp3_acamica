import Router from 'express';
import {LoginController} from '../controllers/login.controller';

export const router = Router()

router.post('/', async (req, res) => {
  const {username, pass} = req.body;

  if (!username || !pass)
    return res
      .status(400)
      .send({ error: 'Bad request.', message: 'You must log in username and password.' });

  try {
    const token = await LoginController.login(username, pass);

    if (token){
      res.status(200).json({ message: 'You logged in successfully.', token });
    } else{
      res
        .status(401)
        .send({ error: 'Unauthorized.', message: 'Username or password invalid.' })
    }
  } catch (error){
    res.status(500).json({
      error: 'Something went wrong.',
      message: error
    });
  }
});