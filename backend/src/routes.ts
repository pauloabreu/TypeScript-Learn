import { Router } from 'express';
import UserController from './Controllers/UserController'

const routes = Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.create);

routes.get('/', (req, res) => {
    return res.send('Hello World');
});

export default routes;