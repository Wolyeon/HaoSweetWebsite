import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'cake',
  imports: [NgFor],
  templateUrl: './cake.component.html',
  styleUrl: './cake.component.css'
})
export class CakeComponent {
    description = "Test Description"
    picture = "filler"
    
}
