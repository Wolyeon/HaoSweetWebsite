import { Component, Input } from '@angular/core';
import { CakeInformation } from './cakeinformation';

@Component({
  selector: 'cakepage',
  imports: [],
  template: `
    <div Class="CakeSlot">
      <img src="{{cakeInformation.image}}.jpg" alt="{{cakeInformation.name}}" (error)="cakeInformation.image = filler">
      <div class="CakeDescription">
        <p><b>{{cakeInformation.name}}</b></p>
        <p>{{cakeInformation.description}}</p>
      </div>
    </div>
    <div>
        <ul>Available Sizes: {{cakeInformation.sizes}}</ul>
        <ul>Price: {{cakeInformation.price}}</ul>
        <ul>Tested?: {{cakeInformation.price}}</ul>
        <ul>Finalized?: {{cakeInformation.finalized}}</ul>
    </div>
  `,
  styleUrl: './cake.component.css',
})
export class CakePageComponent {
  filler = "Filler";
  @Input() cakeInformation!: CakeInformation;
}
