import express from 'express';
import { ClientsController, UsersController } from './controllers';

const routes = express.Router();

// user routes
routes.get('/users', UsersController.list);
routes.get('/users/:id', UsersController.getById);
routes.post('/users', UsersController.create);
routes.put('/users/:id', UsersController.updateById);
routes.delete('/users/:id', UsersController.deleteById);

// client routes
routes.get('/clients', ClientsController.list);
routes.get('/clients/:id', ClientsController.getById);
routes.post('/clients', ClientsController.create);
routes.put('/clients/:id', ClientsController.updateById);
routes.delete('/clients/:id', ClientsController.deleteById);

export default routes;
