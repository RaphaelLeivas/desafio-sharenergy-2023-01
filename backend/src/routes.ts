import express from 'express';
import { ClientsController, UsersController, AuthController } from './controllers';
import { AuthMiddleware } from './middlewares';

const routes = express.Router();

// login routes
routes.post('/login', AuthController.login);
routes.get('/profile', AuthMiddleware.verifyToken, AuthController.profile);

// user routes
routes.get('/users', UsersController.list);
routes.get('/users/:_id', UsersController.getById);
routes.post('/users', UsersController.create);
routes.put('/users/:_id', UsersController.updateById);
routes.delete('/users/:_id', UsersController.deleteById);

// client routes
routes.get('/clients', ClientsController.list);
routes.get('/clients/:_id', ClientsController.getById);
routes.post('/clients', ClientsController.create);
routes.put('/clients/:_id', ClientsController.updateById);
routes.delete('/clients/:_id', ClientsController.deleteById);

export default routes;
