import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import avesRoutes from './routes/avesRoutes';
import federacoesRoutes from "./routes/federacoesRoutes";
import regGaiolasRoutes from './routes/regGaiolasRoutes';
import regUsuariosRoutes from './routes/regUsuariosRoutes';
import regClubesRoutes from './routes/regClubesRoutes';
import regGruposRoutes from './routes/regGruposRoutes';
import regCategoriasRoutes from './routes/regCategoriasRoutes';
import regTamanhosRoutes from './routes/regTamanhosRoutes';
import regAnilhasCriadorRoutes from './routes/regAnilhasCriadorRoutes';
import avesExternoRoutes from './routes/avesExternoRoutes';


class Server {

    public app: Application;
    
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set('port', process.env.PORT || 3000);

        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    routes(): void {
        this.app.use('/api/relatorios/', indexRoutes);
        this.app.use('/api/relatorios/aves', avesRoutes);
        this.app.use('/api/relatorios/disponivel', avesRoutes);
        this.app.use('/api/relatorios/indisponivel', avesRoutes);
        this.app.use('/api/relatorios/externo', avesExternoRoutes);
        this.app.use('/api/registro-federacoes', federacoesRoutes);
        this.app.use('/api/registro-gaiola', regGaiolasRoutes);
        this.app.use('/api/cadastro-usuario', regUsuariosRoutes);
        this.app.use('/api/cadastro-clube', regClubesRoutes);
        this.app.use('/api/cadastro-grupo', regGruposRoutes);
        this.app.use('/api/cadastro-categoria', regCategoriasRoutes);
        this.app.use('/api/cadastro-tamanho', regTamanhosRoutes);
        this.app.use('/api/lista_anilhas_criador', regAnilhasCriadorRoutes);
        this.app.use('/api/lista_anilhas_criador/anilhas_do_criador/', regAnilhasCriadorRoutes);
        this.app.use('/api/registro-anilha', regAnilhasCriadorRoutes);
    }

    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
    

}

const server = new Server();
server.start();