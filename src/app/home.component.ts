import { Component } from '@angular/core';
import { CakeComponent } from './cake.component';
import { CakeInformation } from './cakeinformation';
import cakeData from './resources/cakeInfo.json';
import { NgFor } from '@angular/common';

@Component({
  selector: 'homemenu',
  imports: [CakeComponent, NgFor],
  template: `   
    <div class="BodyContent">
        <cake *ngFor="let cake of data" [cakeInformation]="cake"/>
    </div>
  `,
  styleUrl: './app.component.css',
})
export class HomeComponent {
  data: any[] = cakeData;
}