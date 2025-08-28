import { PositionsRepo } from '../repositories/positions.repo.js';

export const PositionsService = {
  list: () => PositionsRepo.list(),
  getById: async (id) => {
    const p = await PositionsRepo.getById(id);
    if (!p) throw Object.assign(new Error('Position not found'), { status: 404 });
    return p;
  },
  getByProjectId: (projectId) => PositionsRepo.getByProjectId(projectId),
  create: (data) => PositionsRepo.create(data),
  update: async (id, data) => {
    await PositionsService.getById(id);
    return PositionsRepo.update(id, data);
  },
  remove: async (id) => {
    await PositionsService.getById(id);
    return PositionsRepo.softDelete(id);
  },
  listWithAllocations: (id) => PositionsRepo.listWithAllocations(id)
};
