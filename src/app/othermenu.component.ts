import { Component } from '@angular/core';
import { CakeComponent } from './cake.component';
import { CakeInformation } from './cakeinformation';
import { NgFor } from '@angular/common';
import { WebServices } from './webservices';

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
  data?: CakeInformation[];

  constructor(private ws: WebServices) {};

  ngOnInit(){
    this.ws.get_others().subscribe(data => this.data = data);
  }
}