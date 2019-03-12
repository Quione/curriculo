import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HabtecnicasComponent } from './habtecnicas/habtecnicas.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';


export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'habtecnicas', component: HabtecnicasComponent},
    {path: 'experiencia', component: ExperienciaComponent }


]; 