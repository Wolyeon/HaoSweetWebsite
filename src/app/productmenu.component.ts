import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'productmenu',
  imports: [RouterLink],
  template: `
    <div class="Tiles">
      <a class="MenuButtons" routerLink="">
          Cakes
      </a>
      <a class="MenuButtons" routerLink="/tart">
          Tarts
      </a>
      <a class="MenuButtons" routerLink="/other">
          Others
      </a>
    </div>
  `,
  styles: `
    .Tiles{
        display: flex;
        flex-direction: row;
        height: 15px;
        justify-content: center;
        padding-top: 10px;
    }
    .MenuButtons{
        display: flex;
        flex-direction: column;
        margin-left: 25px;
        padding-right: 25px;
        cursor: pointer;
    }
    `,
})
export class ProductMenuComponent {
}