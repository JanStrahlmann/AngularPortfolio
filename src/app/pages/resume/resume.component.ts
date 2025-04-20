import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AccordionComponent, AccordionPanelComponent } from 'ngx-bootstrap/accordion';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resume',
  imports: [CommonModule, AccordionComponent, AccordionPanelComponent],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss',
})
export class ResumeComponent {
  isWorkExperienceOpen: boolean = false;
  isTraineeOpen: boolean = false;
  isSkillsOpen: boolean = false;

  constructor(private titleService: Title, private renderer: Renderer2) {
    this.titleService.setTitle('Jan Strahlmann - Resume');
  }

  DownloadFile() {
    const link = this.renderer.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'Lebenslauf_Jan_Strahlmann.pdf');
    link.setAttribute('download', 'Lebenslauf_Jan_Strahlmann.pdf');
    link.click();
    link.remove();
  }
}