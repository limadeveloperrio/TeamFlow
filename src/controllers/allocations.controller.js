import { AllocationsService } from '../services/allocations.service.js';

export const AllocationsController = {
  list: async (req, res, next) => { try { res.json(await AllocationsService.list()); } catch (e) { next(e); } },
  getById: async (req, res, next) => { try { res.json(await AllocationsService.getById(req.params.id)); } catch (e) { next(e); } },
  getByPositionId: async (req, res, next) => { try { res.json(await AllocationsService.getByPositionId(req.params.positionId)); } catch (e) { next(e); } },
  getByResourceId: async (req, res, next) => { try { res.json(await AllocationsService.getByResourceId(req.params.resourceId)); } catch (e) { next(e); } },
  create: async (req, res, next) => { try { res.status(201).json(await AllocationsService.create(req.body)); } catch (e) { next(e); } },
  update: async (req, res, next) => { try { res.json(await AllocationsService.update(req.params.id, req.body)); } catch (e) { next(e); } },
  remove: async (req, res, next) => { try { await AllocationsService.remove(req.params.id); res.status(204).end(); } catch (e) { next(e); } }
};
