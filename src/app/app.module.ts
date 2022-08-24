import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

//Rutas
import { APP_ROUTING } from './app.routes';

import { AppComponent } from './app.component';
import { FormularioComponent } from './pago-plan/formulario/formulario.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CursoClaseBComponent } from './components/curso-clase-b/curso-clase-b.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';

//Angular Material
import {MatSliderModule} from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactoComponent } from './contacto/contacto.component';
import { FooterComponent } from './footer/footer.component';
import { AlumnoComponent } from './perfiles/alumno/alumno.component';
import { InstructorComponent } from './perfiles/instructor/instructor.component';
import { RecepcionComponent } from './perfiles/recepcion/recepcion.component';
import { CalendarComponent } from './calendar/calendar.component';
import { FullCalendarModule } from 'primeng/fullcalendar';
import { DatosEstudiantesComponent } from './perfiles/recepcion/datos-estudiantes/datos-estudiantes.component';
import { DatosInstructoresComponent } from './perfiles/recepcion/datos-instructores/datos-instructores.component';
import { SolicitudesComponent } from './perfiles/recepcion/solicitudes/solicitudes.component';
import { PagosMatriculasComponent } from './perfiles/recepcion/pagos-matriculas/pagos-matriculas.component';
import { PerfilAlumnoComponent } from './perfiles/alumno/perfil-alumno/perfil-alumno.component';
import { PerfilInstructorComponent } from './perfiles/instructor/perfil-instructor/perfil-instructor.component';
import { MatriculasComponent } from './matriculas/matriculas.component';
import { MisCursosComponent } from './perfiles/alumno/mis-cursos/mis-cursos.component';
import { ModalEditarEstudianteComponent } from './services/modal-editar-estudiante/modal-editar-estudiante.component';


const routes: Routes = [
  {path: '', component: AppComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    NavbarComponent,
    HomeComponent,
    CursoClaseBComponent,
    LoginComponent,
    ContactoComponent,
    FooterComponent,
    AlumnoComponent,
    InstructorComponent,
    RecepcionComponent,
      CalendarComponent,
      DatosEstudiantesComponent,
      DatosInstructoresComponent,
      SolicitudesComponent,
      PagosMatriculasComponent,
      PerfilAlumnoComponent,
      PerfilInstructorComponent,
      MatriculasComponent,
      MisCursosComponent,
      ModalEditarEstudianteComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    APP_ROUTING,
    HttpClientModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    BrowserAnimationsModule,
    FullCalendarModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
