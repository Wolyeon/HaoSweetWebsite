import { Component } from '@angular/core';
import { CakeComponent } from './cake.component';

@Component({
  selector: 'homemenu',
  imports: [CakeComponent],
  template: `   
  <div class="BodyContent">
    <div class="Row">
      <cake/>
      <cake/>
      <cake/>
    </div>
    <div class="Row">
      <cake/>
      <cake/>
      <cake/>
    </div>
  </div>
`,
  styleUrl: './app.component.css',
})
export class HomeComponent {
    
}