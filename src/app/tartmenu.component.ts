import { Component } from '@angular/core';
import { CakeComponent } from './cake.component';
import { CakeInformation } from './cakeinformation';
import tartData from './resources/tartInfo.json';
import { NgFor } from '@angular/common';

@Component({
  selector: 'tartmenu',
  imports: [CakeComponent, NgFor],
  template: `
    <div class="BodyContent">
        <cake *ngFor="let cake of data" [cakeInformation]="cake"/>
    </div>
  `,
  styleUrl: './app.component.css',
})
export class TartMenuComponent {
  data: any[] = tartData;
}