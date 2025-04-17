import { Component, OnInit, TemplateRef } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from 'src/app/_services/projects.service';
import { Project } from 'src/app/_models/Project';
import { CommonModule } from '@angular/common';
import { ModalModule, BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ModalModule, CarouselModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  featuredProject = {} as Project;
  modalRef?: BsModalRef;

  constructor(
    private titleService: Title,
    private projectService: ProjectsService,
    private modalService: BsModalService
  ) {
    this.titleService.setTitle('Jan Strahlmann - Home');
  }

  ngOnInit(): void {
    this.featuredProject = this.projectService.GetProjectById(1);
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
