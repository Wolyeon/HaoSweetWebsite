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
    picture = "G:/Workspace/Git_Workspace/HaoSweetWebsite/src/images/20241221_145613.jpg"
}
