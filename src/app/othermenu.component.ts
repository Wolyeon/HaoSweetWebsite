import { Component } from '@angular/core';
import { CakeComponent } from './cake.component';
import { CakeInformation } from './cakeinformation';
import otherData from './resources/otherInfo.json';
import { NgFor } from '@angular/common';

@Component({
  selector: 'othermenu',
  imports: [CakeComponent, NgFor],
  template: `
    <div class="BodyContent">
        <cake *ngFor="let cake of data" [cakeInformation]="cake"/>
    </div>
  `,
  styleUrl: './app.component.css',
})
export class OtherMenuComponent {
  data: any[] = otherData;
}