import { Component } from '@angular/core';
import { CakeComponent } from './cake.component';
import { CakeInformation } from './cakeinformation';
import { NgFor } from '@angular/common';
import { WebServices } from './webservices';
import { ProductMenuComponent } from './productmenu.component';

@Component({
  selector: 'tartmenu',
  imports: [CakeComponent, ProductMenuComponent, NgFor],
  template: `
    <productmenu/>
    <div class="BodyContent">
        <cake *ngFor="let cake of data" [cakeInformation]="cake"/>
    </div>
  `,
  styleUrl: './app.component.css',
})
export class TartMenuComponent {
  data?: CakeInformation[];

  constructor(private ws: WebServices){};

  ngOnInit(){
    this.ws.get_tarts().subscribe(data => this.data = data)
  }
}