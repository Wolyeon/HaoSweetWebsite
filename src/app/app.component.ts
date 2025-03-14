import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CakeComponent } from './cake.component';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { CakeInformation } from './cakeinformation';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'HaoSweet';
  cakes = [];
}
