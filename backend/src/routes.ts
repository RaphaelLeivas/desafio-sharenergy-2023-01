import express from 'express';
import { ClientsController } from './controllers';

const routes = express.Router();

// client routes
// routes.get("/users", ClientsController.list);
// routes.get("/users/:id", ClientsController.get);
routes.post("/clients", ClientsController.create);
// routes.put("/users/:id", ClientsController.update);
// routes.delete("/users/:id", ClientsController.delete);

export default routes;
