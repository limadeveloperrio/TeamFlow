import { ProjectsService } from '../services/projects.service.js';

export const ProjectsController = {
  list: async (req, res, next) => {
    try {
      res.json(await ProjectsService.list());
    } catch (e) {
      next(e);
    }
  },

  get: async (req, res, next) => {
    try {
      res.json(await ProjectsService.getByName(req.params.name));
    } catch (e) {
      next(e);
    }
  },

  create: async (req, res, next) => {
    try {
      res.status(201).json(await ProjectsService.create(req.body));
    } catch (e) {
      next(e);
    }
  },

  update: async (req, res, next) => {
    try {
      res.json(await ProjectsService.updateByName(req.params.name, req.body));
    } catch (e) {
      next(e);
    }
  },

  remove: async (req, res, next) => {
    try {
      await ProjectsService.removeByName(req.params.name);
      res.status(204).end();
    } catch (e) {
      next(e);
    }
  },

  withPositions: async (req, res, next) => {
    try {
      res.json(await ProjectsService.listWithPositionsByName(req.params.name));
    } catch (e) {
      next(e);
    }
  }
};
