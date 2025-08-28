import { ResourcesRepo } from '../repositories/resources.repo.js';

export const ResourcesService = {
  list: () => ResourcesRepo.list(),

  getById: async (id) => {
    const r = await ResourcesRepo.getById(id);
    if (!r) throw Object.assign(new Error('Resource not found'), { status: 404 });
    return r;
  },

  create: (data) => ResourcesRepo.create(data),

  update: async (id, data) => {
    await ResourcesService.getById(id); // garante que existe
    return ResourcesRepo.update(id, data);
  },

  remove: async (id) => {
    await ResourcesService.getById(id);
    return ResourcesRepo.softDelete(id);
  }
};
