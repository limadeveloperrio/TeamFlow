import { ProjectsRepo } from '../repositories/projects.repo.js';

export const ProjectsService = {
  list: () => ProjectsRepo.list(),

  getByName: async (name) => {
    const p = await ProjectsRepo.getByName(name);
    if (!p) throw Object.assign(new Error('Project not found'), { status: 404 });
    return p;
  },

  create: (data) => ProjectsRepo.create(data), // agora envia todos os campos

  updateByName: async (name, data) => {
    await ProjectsService.getByName(name); // garante que o projeto existe
    return ProjectsRepo.updateByName(name, data); // atualiza todos os campos
  },

  removeByName: async (name) => {
    await ProjectsService.getByName(name); // garante que o projeto existe
    return ProjectsRepo.softDeleteByName(name);
  },

  listWithPositionsByName: (name) =>
    ProjectsRepo.listWithPositionsByName(name)
};
