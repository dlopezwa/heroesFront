import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Function1Component } from './pages/function1/function1.component';
import { Function2Component } from './pages/function2/function2.component';
import { MainComponent } from './pages/shared/main/main.component';

const routes: Routes = [
  {path: 'app1/function1', component: Function1Component},
  {path: 'app1/function2', component: Function2Component},
  {path: '**', component: MainComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
