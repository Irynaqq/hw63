import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cookieParser from 'cookie-parser';

import rootRoutes from './routes/rootRoutes.js';
import usersRoutes from './routes/usersRoutes.js';
import articlesRoutes from './routes/articlesRoutes.js';
import authRoutes from './routes/authRoutes.js';

import { logRequests } from './middlewares/logger.js';

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(logRequests);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/', rootRoutes);
app.use('/users', usersRoutes);
app.use('/articles', articlesRoutes);
app.use('/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});