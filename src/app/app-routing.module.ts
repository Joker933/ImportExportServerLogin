import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { BaseComponent } from './base/base.component';
import { InfoComponent } from './info/info.component';
import { RegComponent } from './reg/reg.component';
import { LoggedComponent } from './logged/logged.component';


const routes: Routes = [
  {path: 'reg', component: RegComponent},
  {path: 'info', component: InfoComponent},
  {path: 'base', component: BaseComponent},
  {path: 'log-in', component: LogInComponent},
  {path: 'logged', component: LoggedComponent},
  {path: '', redirectTo: '/base', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
