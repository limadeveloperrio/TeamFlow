import { prisma } from './prisma.js';
import { notDeleted } from '../utils/softDelete.js';

export const AllocationsRepo = {
list: () => prisma.allocation.findMany({
    where: notDeleted(),
    include: {
      position: {
        include: {
          project: true  // inclui o projeto da posição
        }
      },
      resource: true  // inclui o recurso
    }
  }),
  getById: (id) => prisma.allocation.findUnique({
    where: { id },
    include: {
      position: {
        include: {
          project: true
        }
      },
      resource: true
    }
  }),
  getByPositionId: (positionId) =>
    prisma.allocation.findMany({ where: { positionId, is_deleted: false }, include: { resource: true } }),
  getByResourceId: (resourceId) =>
    prisma.allocation.findMany({ where: { resourceId, is_deleted: false }, include: { position: true } }),
  create: (data) => prisma.allocation.create({ data }),
  update: (id, data) => prisma.allocation.update({ where: { id }, data }),
  softDelete: (id) => prisma.allocation.update({ where: { id }, data: { is_deleted: true } })
};
