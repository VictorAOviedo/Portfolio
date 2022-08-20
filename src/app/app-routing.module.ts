import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './components/contacto/contacto.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion/edit-educacion.component';
import { NewEducacionComponent } from './components/educacion/new-educacion/new-educacion.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia/new-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { EditSkillsComponent } from './components/hys-skills/edit-skills/edit-skills.component';
import { NewSkillsComponent } from './components/hys-skills/new-skills/new-skills.component';
import { LoginComponent } from './components/login/login.component';
import { EditProyectoComponent } from './components/proyectos/edit-proyecto/edit-proyecto.component';
import { NewProyectoComponent } from './components/proyectos/new-proyecto/new-proyecto.component';
import { GuardsService as guards} from './service/guards.service';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'nuevaexp', component: NewExperienciaComponent, canActivate: [guards]},
  {path:'editexp/:id', component: EditExperienciaComponent, canActivate: [guards]},
  {path: 'nuevaedu', component: NewEducacionComponent, canActivate: [guards]},
  {path: 'editedu/:id', component: EditEducacionComponent, canActivate: [guards]},
  {path: 'nuevaskills', component: NewSkillsComponent, canActivate: [guards]},
  {path: 'editskills/:id', component: EditSkillsComponent, canActivate: [guards]},
  {path: 'nuevopro', component: NewProyectoComponent, canActivate: [guards]},
  {path: 'editpro/:id', component: EditProyectoComponent, canActivate: [guards]},
  {path: 'contacto', component: ContactoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
