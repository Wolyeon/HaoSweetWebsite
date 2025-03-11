import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { OrderComponent } from './order/ordermenu.component';
import { FaqComponent } from './faq/faq.component';

export const routes: Routes = [
    { path: "", component: HomeComponent},
    { path: "order", component: OrderComponent},
    { path: "faq", component: FaqComponent},
];
