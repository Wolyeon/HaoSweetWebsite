import { Component } from '@angular/core';
import { CakeComponent } from './cake.component';
import { CakeInformation } from './cakeinformation';
import { NgFor } from '@angular/common';
import { WebServices } from './webservices';

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
  constructor(private ws: WebServices) {};
  data?: CakeInformation[];

  ngOnInit(){
    this.ws.get_cakes().subscribe(data => this.data);
  }
  
}