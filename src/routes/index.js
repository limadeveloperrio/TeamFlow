import { Router } from 'express';
import projects from './projects.routes.js';
import positions from './positions.routes.js';
import allocations from './allocations.routes.js';
import resources from './resources.routes.js'; // <-- novo

const router = Router();

// Rota simples de teste/health-check
router.get('/hello', (req, res) => {
  res.send('Hello World 🚀');
});

// Suas rotas principais
router.use('/projects', projects);
router.use('/positions', positions);
router.use('/allocations', allocations);
router.use('/resources', resources); // <-- novo

export default router;
