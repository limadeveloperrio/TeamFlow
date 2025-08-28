import { Router } from 'express';
import { ResourcesController } from '../controllers/resources.controller.js';

const router = Router();

router.get('/', ResourcesController.list);
router.get('/:id', ResourcesController.getById);
router.post('/', ResourcesController.create);
router.put('/:id', ResourcesController.update);
router.delete('/:id', ResourcesController.remove);

export default router;
