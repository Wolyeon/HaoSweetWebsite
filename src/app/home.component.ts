import { Component } from '@angular/core';
import { CakeComponent } from './cake.component';
import { CakeInformation } from './cakeinformation';
import cakeData from './resources/cakeData.json';

@Component({
  selector: 'homemenu',
  imports: [CakeComponent],
  template: `   
    <div class="BodyContent">
        <cake/>
    </div>
  `,
  styleUrl: './app.component.css',
})
export class HomeComponent {
  cakeInfo: CakeInformation = cakeData;
}