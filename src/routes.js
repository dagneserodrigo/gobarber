import { Router } from 'express';
import authMiddleware from './middlewares/auth';
import AuthenticationController from './app/controllers/AuthenticationController';
import UserController from './app/controllers/UserController';

const routes = new Router();

routes.post('/login', AuthenticationController.store);

routes.use(authMiddleware);
routes.post('/users', UserController.store);

export default routes;
