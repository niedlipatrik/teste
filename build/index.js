"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const avesRoutes_1 = __importDefault(require("./routes/avesRoutes"));
const federacoesRoutes_1 = __importDefault(require("./routes/federacoesRoutes"));
const regGaiolasRoutes_1 = __importDefault(require("./routes/regGaiolasRoutes"));
const regUsuariosRoutes_1 = __importDefault(require("./routes/regUsuariosRoutes"));
const regClubesRoutes_1 = __importDefault(require("./routes/regClubesRoutes"));
const regGruposRoutes_1 = __importDefault(require("./routes/regGruposRoutes"));
const regCategoriasRoutes_1 = __importDefault(require("./routes/regCategoriasRoutes"));
const regTamanhosRoutes_1 = __importDefault(require("./routes/regTamanhosRoutes"));
const regAnilhasCriadorRoutes_1 = __importDefault(require("./routes/regAnilhasCriadorRoutes"));
const avesExternoRoutes_1 = __importDefault(require("./routes/avesExternoRoutes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/api/relatorios/', indexRoutes_1.default);
        this.app.use('/api/relatorios/aves', avesRoutes_1.default);
        this.app.use('/api/relatorios/disponivel', avesRoutes_1.default);
        this.app.use('/api/relatorios/indisponivel', avesRoutes_1.default);
        this.app.use('/api/relatorios/externo', avesExternoRoutes_1.default);
        this.app.use('/api/registro-federacoes', federacoesRoutes_1.default);
        this.app.use('/api/registro-gaiola', regGaiolasRoutes_1.default);
        this.app.use('/api/cadastro-usuario', regUsuariosRoutes_1.default);
        this.app.use('/api/cadastro-clube', regClubesRoutes_1.default);
        this.app.use('/api/cadastro-grupo', regGruposRoutes_1.default);
        this.app.use('/api/cadastro-categoria', regCategoriasRoutes_1.default);
        this.app.use('/api/cadastro-tamanho', regTamanhosRoutes_1.default);
        this.app.use('/api/lista_anilhas_criador', regAnilhasCriadorRoutes_1.default);
        this.app.use('/api/lista_anilhas_criador/anilhas_do_criador/', regAnilhasCriadorRoutes_1.default);
        this.app.use('/api/registro-anilha', regAnilhasCriadorRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
