import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes'; // ← Das ist korrekt!
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes), // ✅ Routing hier richtig eingebunden
    ModalModule.forRoot()
  ],
  providers: [],
})
export class AppModule { }
