import { prisma } from './prisma.js';
import { notDeleted } from '../utils/softDelete.js';

export const PositionsRepo = {
 list: () =>
    prisma.position.findMany({
      where: notDeleted(),
      orderBy: { title: 'asc' },
      include: {
        project: true,             // inclui o projeto
        allocations: {
          where: notDeleted(),     // filtra allocations não deletadas
          include: {
            resource: true         // inclui os recursos das allocations
          }
        }
      }
    }),

  getById: (id) =>
    prisma.position.findUnique({
      where: { id },
      include: {
        project: true,
        allocations: {
          where: notDeleted(),
          include: {
            resource: true
          }
        }
      }
    }),
  getByProjectId: (projectId) => prisma.position.findMany({ where: { projectId, is_deleted: false } }),
  create: (data) => prisma.position.create({ data }),
  update: (id, data) => prisma.position.update({ where: { id }, data }),
  softDelete: (id) => prisma.position.update({ where: { id }, data: { is_deleted: true } }),
  listWithAllocations: (id) =>
    prisma.position.findUnique({
      where: { id },
      include: { allocations: { where: { is_deleted: false }, include: { resource: true } } }
    })
};
