import { PositionsService } from '../services/positions.service.js';

export const PositionsController = {
  list: async (req, res, next) => { try { res.json(await PositionsService.list()); } catch (e) { next(e); } },
  getById: async (req, res, next) => { try { res.json(await PositionsService.getById(req.params.id)); } catch (e) { next(e); } },
  getByProjectId: async (req, res, next) => { try { res.json(await PositionsService.getByProjectId(req.params.projectId)); } catch (e) { next(e); } },
  create: async (req, res, next) => { try { res.status(201).json(await PositionsService.create(req.body)); } catch (e) { next(e); } },
  update: async (req, res, next) => { try { res.json(await PositionsService.update(req.params.id, req.body)); } catch (e) { next(e); } },
  remove: async (req, res, next) => { try { await PositionsService.remove(req.params.id); res.status(204).end(); } catch (e) { next(e); } },
  listWithAllocations: async (req, res, next) => { try { res.json(await PositionsService.listWithAllocations(req.params.id)); } catch (e) { next(e); } }
};
