import { prisma } from './prisma.js';
import { notDeleted } from '../utils/softDelete.js';

export const ResourcesRepo = {
  list: () =>
    prisma.resource.findMany({
      where: notDeleted(),
      orderBy: { first_name: 'asc' },
      include: {
        allocations: {
          where: notDeleted(),
          include: {
            position: {
              include: {
                project: true
              }
            }
          }
        }
      }
    }),

  getById: (id) =>
    prisma.resource.findUnique({
      where: { id },
      include: {
        allocations: {
          where: notDeleted(),
          include: {
            position: {
              include: {
                project: true
              }
            }
          }
        }
      }
    }),
  create: (data) => prisma.resource.create({ data }),
  update: (id, data) => prisma.resource.update({ where: { id }, data }),
  softDelete: (id) => prisma.resource.update({ where: { id }, data: { is_deleted: true } })
};
