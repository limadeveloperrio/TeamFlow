import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import routes from './routes/index.js';
import { errorHandler } from './middlewares/error.js';
import { notFound } from './middlewares/notFound.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

app.get('/', (req, res) => res.json({ status: 'API TeamFlow funcionando 🚀' }));

app.use('/api', routes); app.use(notFound);
app.use(errorHandler);

export default app;