import { Component, Input } from '@angular/core';

@Component({
  selector: 'cake',
  imports: [],
  template: `
    <div Class="CakeSlot">
      <img [src]="picture">
      <div class="CakeDescription">
        {{description}}
      </div>
    </div>
  `,
  styleUrl: './cake.component.css'
})
export class CakeComponent {
    description = "Test Description"
    picture = "MintCake.jpg"

    // @Input() cakeInformation!: CakeInformation;
}
