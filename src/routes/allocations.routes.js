import { Router } from 'express';
import { AllocationsController } from '../controllers/allocations.controller.js';

const router = Router();

router.get('/', AllocationsController.list);
router.get('/:id', AllocationsController.getById);
router.get('/position/:positionId', AllocationsController.getByPositionId);
router.get('/resource/:resourceId', AllocationsController.getByResourceId);
router.post('/', AllocationsController.create);
router.put('/:id', AllocationsController.update);
router.delete('/:id', AllocationsController.remove);

export default router;

