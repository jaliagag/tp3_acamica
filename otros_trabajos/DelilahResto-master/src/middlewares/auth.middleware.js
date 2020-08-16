import jwt from 'jsonwebtoken';
import config from '../config/config';

// const sign = config.JWT.PRIVATE_KEY;

export const userIsAdmin = (req, res, next) => {
  
    const bearerHeader = req.headers['authorization'];
  
    if(typeof bearerHeader !== 'undefined'){
  
      try {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
  
        const data = jwt.verify(bearerToken, config.JWT.PRIVATE_KEY)
     
        
        if (!data.isAdmin) {
          next();
        } else {
          res
            .status(403)
            .send({ error: 'Forbidden.', message: 'Access denied.' })
        }
      } catch (error) {
        res
          .status(401)
          .send({ error: 'Unauthorized.', message: 'Not authorized. Error: ' + error })
      }
    } else {
      res
        .status(401)
        .send({ error: 'Unauthorized.', message: 'Invalid token.' });
    }
}






/*
export const authenticationMiddelwares = {
    userAuthentication: (req, res, next) => {
        console.log('User authentication middleware');
        try{
            const token = req.headers.authorization.split(' ')[1];
            const data = jwt.verify(token, sign);
            next();
        } catch (error) {
            res.status(401).json({ error: 'Unauthorized', message: 'Invalid token. You must login first' });
        }
    },

    getUserDataFromToken: (header) => {
        const token = header.split(' ')[1];
        const data = jwt.verify(token, sign);
        return data;
    },

    adminAuthentication: (req, res, next) => {
        try{
            const token = req.headers.authorization.split(' ')[1];
            const data = jwt.verify(token, sign);
            if(data.isAdmin !== 0) {
                console.log('User with administration permissions');
                next();
            } else {
                res.status(403).json({ error: 'Unauthorized', message: 'Not authorized' });
                console.log('User with no administration permissions');
            }

        } catch(error) {
            res.status(401).json({ error: 'Unauthorized', message: 'Invalid token' });
        }
    }
}
*/