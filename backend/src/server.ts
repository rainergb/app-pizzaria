import express, { Request, Response, NextFunction } from 'express' // Importa o módulo express para criar o servidor e os tipos Request, Response e NextFunction do TypeScript para tipagem.
import 'express-async-errors'; // Importa 'express-async-errors' para lidar com erros em rotas assíncronas, sem precisar de blocos try-catch.
import { router } from './routes' // Importa as rotas definidas no arquivo routes.ts.
import cors from 'cors'; // Importa o CORS (Cross-Origin Resource Sharing) para permitir requisições de diferentes domínios.
import path from 'path'

const app = express(); // Inicializa o aplicativo Express.

app.use(express.json()); // Define o middleware para que o Express entenda requisições com o formato JSON.
app.use(cors()); // Define o middleware CORS para habilitar o compartilhamento de recursos entre diferentes origens (cross-origin requests).

app.use(router); // Aplica as rotas definidas no arquivo routes.ts no aplicativo.

app.use(
    '/files', 
    express.static(path.resolve(__dirname, '..', '..', 'tmp'))
)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => { // Middleware global para tratamento de erros.
    
    if (err instanceof Error) { // Verifica se o erro é uma instância da classe Error.
        
        return res.status(400).json({ // Se for um erro conhecido, retorna um status 400 (bad request) com a mensagem de erro.
            error: err.message
        });
    }

    // Para outros erros desconhecidos, retorna um status 500 (internal server error).
    return res.status(500).json({
        status: 'error',
        message: 'Internal server error.'
    });
});

app.listen(3333, () => console.log("Servidor Online!")); // Inicia o servidor na porta 3333 e exibe uma mensagem no console indicando que o servidor está online.
