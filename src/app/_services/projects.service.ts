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
      summary:
        'API-basierte Anwendung zur Anzeige von Pokémon-Daten wie Attacken, Stats und Moves.',
      description:
        'Beim Pokedex-Projekt wurde eine API genutzt, um Informationen zu den Pokémon wie Attacken, Stats und Moves darzustellen; die Anwendung ist vollständig responsive optimiert.',
      projectLinkGithub: 'https://github.com/JanStrahlmann/PokedexPortfolio',
      projectLinkViewSite: '//www.google.com',
      tags: [Tag.HTML, Tag.CSS, Tag.JAVASCRIPT, Tag.API],
      pictures: [
        'Pokedex.png',
        'PokedexCardOpen.png',
        'PokedexMobile.png',
        'PokedexMobileCardOpen.png',
      ],
    },
    {
      id: 1,
      name: 'Join',
      summary:
        'Kanban-Board aus einem Gruppenprojekt – Aufgaben, Design und Funktionen selbst entwickelt.',
      description:
        'Bei dem Projekt haben wir in einer Gruppe aus 3 Personen das Kanbanboard umgesetzt. Wir haben ein Design bei Figma erhalten und haben die Aufgaben mithilfe eines Trello-Boards aufgeteilt. Wir haben uns die Funktionen ausgedacht und das Design nachgecoded. Meine Aufgabe waren: HTML / CSS für Login, SignUP, Responsive Navbar und die komplette Kontakt-Seite (HTML, CSS, Javascript, Animation, Responsive). Alle Daten werden auch im Local Storage gespeichert.',
      projectLinkGithub: 'https://github.com/JanStrahlmann/JoinPortfolio',
      projectLinkViewSite: '//www.google.com',
      tags: [Tag.HTML, Tag.CSS, Tag.JAVASCRIPT, Tag.LOCALSTORAGE],
      pictures: [
        'JoinLogin.png',
        'JoinSignUp.png',
        'JoinContact.png',
        'JoinAddContact.png',
        'JoinMobile.png',
        'JoinMobileContact.png',
        'JoinMobileAddContact.png',
      ],
    },
    {
      id: 2,
      name: 'Portfolio',
      summary:
        'Erstes Angular-Projekt mit Bootstrap, responsiv umgesetzt und modular aufgebaut.',
      description:
        'Im Rahmen des Angular-Portfolios habe ich erstmals mit Angular gearbeitet und dabei Services, Components, Routing und TypeScript kennengelernt; das Styling wurde mit Bootstrap umgesetzt und das Projekt ist vollständig responsive gestaltet.',
      projectLinkGithub:
        'https://github.com/JanStrahlmann/AngularPortfolio',
      projectLinkViewSite: '//www.google.com',
      tags: [Tag.TYPESCRIPT, Tag.ANGULAR, Tag.BOOTSTRAP, Tag.SCSS],
      pictures: [
        'PortfolioÜberMich.png',
        'PortfolioPortfolio.png',
        'PortfolioProfil.png',
        'PortfolioKontakt.png',
      ],
    },
    {
      id: 3,
      name: 'Spielwiese',
      summary:
        'Sammlung kleiner Projekte mit HTML, CSS und JavaScript zum Üben und Experimentieren.',
      description:
        'Eine Sammlung kleiner Projekte, die ich jeweils mit HTML, CSS und JavaScript gebaut habe – zum Experimentieren, Lernen und Verfeinern meiner Skills. Enthalten sind zum Beispiel: Devgram – ein Social-Media-Layout mit JSON-Daten und dynamischen Elementen, ein Lieferando-Klon mit Warenkorb, Checkout und Kontaktformular sowie eine Fotogalerie mit Zoom-Ansicht und Bildnavigation.',
      projectLinkGithub: 'https://github.com/JanStrahlmann?tab=repositories',
      projectLinkViewSite: '',
      tags: [Tag.HTML, Tag.CSS, Tag.JAVASCRIPT],
      pictures: ['Devgram.png', 'Foodarando.png', 'FotoGallerie.png'],
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
