import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './login/component/login-form/login-form.component';
import { AuthGuard } from './login/guard/auth.guard';
import { ErrorManageComponent } from './pages/error-manage/error-manage.component';
import { Function1Component } from './pages/function1/function1.component';
import { Function2Component } from './pages/function2/function2.component';
import { MainComponent } from './pages/shared/main/main.component';

const routes: Routes = [
  {path: 'app1/function1', component: Function1Component},
  {path: 'app1/function2', component: Function2Component},
  {path: 'login', component: LoginFormComponent},
  {path: 'error', component: ErrorManageComponent, canActivate: [AuthGuard]},
  {path: '**', component: MainComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
