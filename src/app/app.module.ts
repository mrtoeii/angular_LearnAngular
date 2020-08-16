import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { FormBuliderComponent } from './components/form-bulider/form-bulider.component';
import { FormNormalComponent } from './components/form-normal/form-normal.component';
import { FormTemplateDrivenComponent } from './components/form-template-driven/form-template-driven.component';
import { FormModelGroupComponent } from './components/form-model-group/form-model-group.component';
import { FormReactiveComponent } from './components/form-reactive/form-reactive.component';

const appRoutes: Routes =[
  {path: '' , redirectTo: '/form_normal', pathMatch:'full'},
  {path: 'form_normal' , component: FormNormalComponent},
  {path: 'form_template_driven' , component: FormTemplateDrivenComponent},
  {path: 'form_model_group' , component: FormModelGroupComponent},
  {path: 'form_reactive' , component: FormReactiveComponent},
  {path: 'form_builder' , component: FormBuliderComponent},

]


@NgModule({
  declarations: [
    AppComponent,
    FormBuliderComponent,
    FormNormalComponent,

    FormTemplateDrivenComponent,
    FormModelGroupComponent,
    FormReactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
