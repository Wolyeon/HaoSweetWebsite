import { Component, Input } from '@angular/core';
import { CakeInformation } from './cakeinformation';

@Component({
  selector: 'cake',
  imports: [],
  template: `
    <div Class="CakeSlot">
      <img src="{{cakeInformation.image}}.jpg" alt="{{cakeInformation.name}}" (error)="cakeInformation.image = filler">
      <div class="CakeDescription">
        <p><b>{{cakeInformation.name}}</b></p>
        <p>{{cakeInformation.description}}</p>
      </div>
    </div>
  `,
  styleUrl: './cake.component.css',
})
export class CakeComponent {
  filler = "Filler";
  @Input() cakeInformation!: CakeInformation;
}
