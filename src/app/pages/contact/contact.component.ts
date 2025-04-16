import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  constructor(private titleService: Title) {
    this.titleService.setTitle('Jan Strahlmann - Kontakt')
  }

  showCopiedPopup = false;

  copyToClipboard(text: string): void {
    navigator.clipboard.writeText(text).then(() => {
      this.showCopiedPopup = true;

      // Blende das Popup nach 2 Sekunden wieder aus
      setTimeout(() => {
        this.showCopiedPopup = false;
      }, 2000);
    }).catch(err => {
      console.error('Fehler beim Kopieren:', err);
    });
  }
}
