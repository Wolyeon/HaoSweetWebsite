import { Component } from '@angular/core';

@Component({
  selector: 'cake',
  templateUrl: './cake.component.html',
  styleUrl: './cake.component.css'
})
export class CakeComponent {
    description = "Test Description"
    picture = "MintCake.jpg"
}
