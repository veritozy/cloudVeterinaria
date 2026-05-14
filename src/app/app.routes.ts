import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Galery } from './features/galery/galery';


export const routes: Routes = [
    {path:"home", component:Home},
    {path:"galery", component:Galery},
    {path:"", redirectTo:"/home", pathMatch:"full"}
];
