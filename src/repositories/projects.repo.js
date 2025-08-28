import { prisma } from './prisma.js';
import { notDeleted } from '../utils/softDelete.js';

export const ProjectsRepo = {
 list: () =>
    prisma.project.findMany({
      where: notDeleted(),
      orderBy: { name: 'asc' },
      include: {
        positions: {
          where: { isDeleted: false },
          include: {
            allocations: {
              where: { isDeleted: false },
              include: { resource: true } 
            }
          }
        }
      }
    }),

 
  getByName: (name) =>
    prisma.project.findFirst({
      where: {
        name,
        isDeleted: false
      },
      include: {
        positions: {
          where: { isDeleted: false },
          include: {
            allocations: {
              where: { isDeleted: false },
              include: { resource: true }
            }
          }
        }
      }
    }),

  create: (data) => prisma.project.create({ data }),

  updateByName: (name, data) =>
    prisma.project.update({
      where: { name },
      data
    }),

  softDeleteByName: (name) =>
    prisma.project.update({
      where: { name },
      data: { isDeleted: true }
    }),

  listWithPositionsByName: (name) =>
    prisma.project.findFirst({
      where: notDeleted({ name }),
      include: { positions: { where: { isDeleted: false } } }
    })
};
