import { AllocationsRepo } from '../repositories/allocations.repo.js';

export const AllocationsService = {
  list: () => AllocationsRepo.list(),
  getById: async (id) => {
    const a = await AllocationsRepo.getById(id);
    if (!a) throw Object.assign(new Error('Allocation not found'), { status: 404 });
    return a;
  },
  getByPositionId: (positionId) => AllocationsRepo.getByPositionId(positionId),
  getByResourceId: (resourceId) => AllocationsRepo.getByResourceId(resourceId),
  create: (data) => AllocationsRepo.create(data),
  update: async (id, data) => {
    await AllocationsService.getById(id);
    return AllocationsRepo.update(id, data);
  },
  remove: async (id) => {
    await AllocationsService.getById(id);
    return AllocationsRepo.softDelete(id);
  }
};
