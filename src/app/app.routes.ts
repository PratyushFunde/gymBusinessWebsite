import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { PlansComponent } from './components/plans/plans.component';

export const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'plans', component: PlansComponent }
];
