import { ResourcesService } from '../services/resources.service.js';

export const ResourcesController = {
  list: async (req, res, next) => { try { res.json(await ResourcesService.list()); } catch (e) { next(e); } },
  getById: async (req, res, next) => { try { res.json(await ResourcesService.getById(req.params.id)); } catch (e) { next(e); } },
  create: async (req, res, next) => { try { res.status(201).json(await ResourcesService.create(req.body)); } catch (e) { next(e); } },
  update: async (req, res, next) => { try { res.json(await ResourcesService.update(req.params.id, req.body)); } catch (e) { next(e); } },
  remove: async (req, res, next) => { try { await ResourcesService.remove(req.params.id); res.status(204).end(); } catch (e) { next(e); } }
};
