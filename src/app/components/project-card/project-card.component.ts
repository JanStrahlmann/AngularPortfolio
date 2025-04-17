import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from 'src/app/_models/Project';
import { ModalModule, BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { ProjectModalComponent } from '../project-modal/project-modal.component';





@Component({
  selector: 'app-project-card',
  imports: [CommonModule, ModalModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
})

export class ProjectCardComponent {
  @Input() project = {} as Project;
  bsModalRef?: BsModalRef;

  constructor(private modalService: BsModalService) {}

  OpenProjectModal() {
    const modalOptions: ModalOptions = {
      class: 'modal-lg',
      initialState: {
        project: this.project,
      },
    };

    this.bsModalRef = this.modalService.show(
      ProjectModalComponent,
      modalOptions
    );
  }
}
