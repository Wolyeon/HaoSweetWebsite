import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CakeComponent } from './cake.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgIf, NgFor, CakeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HaoSweet';
}
