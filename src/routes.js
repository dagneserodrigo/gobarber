import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Rodrigo Dagnese',
    email: 'dagnese.rodrigo@gmail.com',
    password_hash: 'aaa123',
  });

  return res.json(user);
});

export default routes;
