import { Component } from '@angular/core';
import { CakeComponent } from './cake.component';

@Component({
  selector: 'homemenu',
  imports: [CakeComponent],
  template: `   
    <div class="BodyContent">
        <cake/>
        <cake/>
        <cake/>
        <cake/>
        <cake/>
    </div>
  `,
  styleUrl: './app.component.css',
})
export class HomeComponent {
  
}