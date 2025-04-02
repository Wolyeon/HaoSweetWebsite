import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { OrderComponent } from './order/ordermenu.component';
import { FaqComponent } from './faq/faq.component';
import { TartMenuComponent } from './tartmenu.component';
import { OtherMenuComponent } from './othermenu.component';
import { CakePageComponent } from './cakepage.component';

export const routes: Routes = [
    { path: "", component: HomeComponent},
    { path: "tart", component: TartMenuComponent},
    { path: "other", component: OtherMenuComponent},
    { path: "order", component: OrderComponent},
    { path: "faq", component: FaqComponent},
    { path: 'cake/:productId', component: CakePageComponent}
];
