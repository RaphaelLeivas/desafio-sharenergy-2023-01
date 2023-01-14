import express from 'express';
import { ClientsController } from './controllers';

const routes = express.Router();

// client routes
routes.get('/clients', ClientsController.list);
routes.get('/clients/:id', ClientsController.getById);
routes.post('/clients', ClientsController.create);
routes.put("/clients/:id", ClientsController.updateById);
routes.delete("/clients/:id", ClientsController.deleteById);

export default routes;
