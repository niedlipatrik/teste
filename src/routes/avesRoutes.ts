import express, { Router } from 'express';

import avesController from '../controllers/avesController';

class AveRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', avesController.list);
        this.router.get('/:id', avesController.getOne);
        this.router.post('/', avesController.create);
        this.router.put('/:id', avesController.update);
        this.router.delete('/:id', avesController.delete);
    }

}

export default new AveRoutes().router;

