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
        this.router.get('/disponivel', avesController.searchDisponivel);
        this.router.get('/indisponivel', avesController.searchIndisponivel);
        this.router.get('/externo', avesController.searchExterno);
    }

}

export default new AveRoutes().router;

