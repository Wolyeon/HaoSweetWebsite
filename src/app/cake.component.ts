import { Component, Input } from '@angular/core';
import { CakeInformation } from './cakeinformation';

@Component({
  selector: 'cake',
  imports: [],
  template: `
    <div Class="CakeSlot">
      <img [src]="picture">
      <div class="CakeDescription">
        <p>{{cakeInformation.name}}</p>
        <p>{{cakeInformation.description}}</p>
      </div>
    </div>
  `,
  styleUrl: './cake.component.css'
})
export class CakeComponent {
    description = "Test Description"
    picture = "MintCake.jpg"

    @Input() cakeInformation!: CakeInformation;
}
