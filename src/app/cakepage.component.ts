import { Component, Input } from '@angular/core';
import { CakeInformation } from './cakeinformation';
import { WebServices } from './webservices';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'cakepage',
  imports: [NgIf, RouterLink],
  template: `
    <div Class=InfoPage>
      <div Class="CakeSlot">
        <img src="{{cakeInformation.image}}.jpg" alt="{{cakeInformation.name}}" (error)="cakeInformation.image = filler">
        <div class="CakeDescription">
          <p><b>{{cakeInformation.name}}</b></p>
          <p>{{cakeInformation.description}}</p>
        </div>
      </div>
      <div>
          <ul><h3>Available Sizes: {{cakeInformation.sizes}}</h3></ul>
          <ul><h3>Price: {{cakeInformation.price}}</h3></ul>
          <ul><h3>Tested?: 
          <span *ngIf="cakeInformation.tested; else elseBlock">yes! <img src="safeHangyo.png"></span>
          <ng-template #elseBlock>no! <img src="naniHangyo.png"></ng-template> 
          </h3></ul>
          <ul><h3>Finalized?:
            <span *ngIf="cakeInformation.finalized; else elseBlock">yes! <img src="safeHangyo.png"></span>
            <ng-template #elseBlock>no! <img src="naniHangyo.png"></ng-template> 
          </h3></ul>
          <a routerLink="/order" [queryParams]="{cakeName: cakeInformation.name}"><img src="hangyoOrder1.png"></a>
      </div>
  </div>
  `,
  styleUrl: './cakepage.component.css',
})
export class CakePageComponent {
  filler = "Filler.jpg"
  @Input() productId!: string;
  cakeInformation!: CakeInformation;
  constructor(private ws: WebServices) {};
  ngOnInit(){
    this.ws.get_cakebyid(this.productId).subscribe(
      data => this.cakeInformation = data
    );
  }
}
