import { Router } from 'express';
import { PositionsController } from '../controllers/positions.controller.js';
const router = Router();

router.get('/', PositionsController.list);
router.get('/:id', PositionsController.getById);
router.get('/project/:projectId', PositionsController.getByProjectId);
router.post('/', PositionsController.create);
router.put('/:id', PositionsController.update);
router.delete('/:id', PositionsController.remove);

export default router;

