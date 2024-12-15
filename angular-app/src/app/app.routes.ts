import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {BjjComponent} from './bjj/bjj.component';
import {MmaComponent} from './mma/mma.component';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'bjj', component: BjjComponent},
  {path: 'mma', component: MmaComponent},
];
