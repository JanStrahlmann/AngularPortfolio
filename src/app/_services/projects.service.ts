import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  projects: Project[] = [
    {
      id: 0,
      name: 'Pokedex',
      summary: 'Das ist ein Beispiel 1',
      description:
        'Das ist alles was ich schreiben kann denn ich finde es sehr serh sehr toll hihihi',
      projectLinkGithub: '//www.github.com',
      projectLinkViewSite: '//www.google.com',
      tags: [Tag.HTML, Tag.CSS, Tag.JAVASCRIPT, Tag.API],
      pictures: ['Image1.png', 'Image2.png', 'Image3.png'],
    },
    {
      id: 1,
      name: 'Join',
      summary: 'Das ist ein Beispiel 2',
      description:
        'Das ist alles was ich schreiben kann denn ich finde es sehr serh sehr toll hihihi',
      projectLinkGithub: '//www.github.com',
      projectLinkViewSite: '//www.google.com',
      tags: [Tag.HTML, Tag.CSS, Tag.JAVASCRIPT],
      pictures: ['Image2.png', 'Image3.png', 'Image1.png'],
    },
    {
      id: 2,
      name: 'Angular Portfolio',
      summary: 'Das ist ein Beispiel 3',
      description:
        'Das ist alles was ich schreiben kann denn ich finde es sehr serh sehr toll hihihi',
      projectLinkGithub:
        'https://github.com/JanStrahlmann/AngularPortfolio.git',
      projectLinkViewSite: '//www.google.com',
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.SCSS],
      pictures: ['Image3.png', 'Image2.png', 'Image1.png'],
    },
    {
      id: 3,
      name: 'Wetter App',
      summary: 'Das ist ein Beispiel 4',
      description:
        'Das ist alles was ich schreiben kann denn ich finde es sehr serh sehr toll hihihi',
      projectLinkGithub: '//www.github.com',
      projectLinkViewSite: '//www.google.com',
      tags: [Tag.HTML, Tag.CSS, Tag.JAVASCRIPT, Tag.API],
      pictures: ['Image3.png', 'Image2.png', 'Image3.png'],
    },
  ];

  constructor() {}

  GetProjects() {
    return this.projects;
  }

  GetProjectById(id: number): Project {
    let project = this.projects.find((project) => project.id === id);

    if (project === undefined) {
      throw new TypeError('There is no project that matches the id:' + id);
    }

    return project;
  }
}
