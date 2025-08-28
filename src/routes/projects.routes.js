import { Router } from 'express';
import { ProjectsController } from '../controllers/projects.controller.js';
import { requireBody } from '../middlewares/validate.js';
import { requireRole } from '../middlewares/auth.js';

const router = Router();

router.get('/', ProjectsController.list);
router.get('/:name', ProjectsController.get);
router.get('/:name/positions', ProjectsController.withPositions);
router.post('/', requireBody(['name']), ProjectsController.create);
router.put('/:name', ProjectsController.update);
// proteção opcional de role admin em DELETE
router.delete('/:name', requireRole('admin'), ProjectsController.remove);

export default router;
