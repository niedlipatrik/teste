import { Request, Response } from 'express';


import pool from '../database';

class GamesController {

    public async list(req: Request, res: Response): Promise<void> {
        const aves = await pool.query('SELECT * FROM aves');
        res.json(aves);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const aves = await pool.query('SELECT * FROM aves WHERE id = ?', [id]);
        console.log(aves.length);
        if (aves.length > 0) {
            return res.json(aves[0]);
        }
        res.status(404).json({ text: "The ave doesn't exits" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO aves set ?', [req.body]);
        res.json({ message: 'Ave Saved' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldGame = req.body;
        await pool.query('UPDATE aves set ? WHERE id = ?', [req.body, id]);
        res.json({ message: "The ave was Updated" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM aves WHERE id = ?', [id]);
        res.json({ message: "The ave was deleted" });
    }
}

const avesController = new GamesController;
export default avesController;



// import { Request, Response } from 'express';


// import pool from '../database';

// class AvesController {

//     public async list(req: Request, res: Response): Promise<void> {
//         const aves = await pool.query('SELECT * FROM aves');
//         res.json(aves);
//     }

//     public async getOne(req: Request, res: Response): Promise<any> {
//         const { id } = req.params;
//         const aves = await pool.query('SELECT * FROM aves WHERE id = ?', [id]);
//         console.log(aves.length);
//         if (aves.length > 0) {
//             return res.json(aves[0]);
//         }
//         res.status(404).json({ text: "Ave inexistente" });
//     }

//     public async create(req: Request, res: Response): Promise<void> {
//         const result = await pool.query('INSERT INTO aves set ?', [req.body]);
//         res.json({ message: 'Ave Registrada' });
//     }

//     public async update(req: Request, res: Response): Promise<void> {
//         const { id } = req.params;
//         const oldAve = req.body;
//         await pool.query('UPDATE aves set ? WHERE id = ?', [req.body, id]);
//         res.json({ message: "Registro Alterado com Sucesso" });
//     }

//     public async delete(req: Request, res: Response): Promise<void> {
//         const { id } = req.params;
//         await pool.query('DELETE FROM aves WHERE id = ?', [id]);
//         res.json({ message: "Ave excluida" });
//     }
// }

// const avesController = new AvesController;
// export default avesController;