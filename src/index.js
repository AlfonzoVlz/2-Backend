import express from 'express';
import { PORT } from './config/config.js';
import authRoutes from './routes/auth.routes.js';
import path from 'path';
import { validateCORS } from './middlewares/middlewares.js';

const app = express();

app.use(validateCORS);
app.use(express.json());
app.use('/api', authRoutes);


const currentDir = path.resolve();

app.use('/perfil', express.static('./uploads/'));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;