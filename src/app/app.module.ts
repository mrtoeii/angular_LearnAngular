import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { Child3Component } from './child3/child3.component';
import { Child4Component } from './child4/child4.component';
import { Child5Component } from './child5/child5.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CanActivateViaAuthGuard } from './can-activate-via-auth.guard';
import { AuthenService } from './authen.service';
import { CanDeactiveGuard } from './can-deactive.guard';

const routes: Routes = [
  { path: '', redirectTo: '/child1', pathMatch: 'full' },
  { path: 'child1', component: Child1Component },
  { path: 'child2', component: Child2Component },
  { path: 'child3', component: Child3Component,  },
  { path: 'child4/:username/:password', component: Child4Component },
  { 
    path: 'child5', component: Child5Component ,  
    canActivate: [CanActivateViaAuthGuard],
    canDeactivate: [CanDeactiveGuard]
},
  { path: 'notfound', component: NotfoundComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    Child2Component,
    Child3Component,
    Child4Component,
    Child5Component,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    CanActivateViaAuthGuard,
    AuthenService,
    CanDeactiveGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
