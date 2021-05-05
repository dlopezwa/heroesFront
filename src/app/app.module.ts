import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/shared/header/header.component';
import { MainComponent } from './pages/shared/main/main.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';



import { HeroeComponent } from './pages/heroe/heroe.component';
import { MissionComponent } from './pages/mission/mission.component';
import { NewHeroComponent } from './pages/heroe/new-hero/new-hero.component';
import { TableHeroComponent } from './pages/heroe/table-hero/table-hero.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NewMissionComponent } from './pages/mission/new-mission/new-mission.component';
import { TableMissionComponent } from './pages/mission/table-mission/table-mission.component';
import { ModalAddEditHeroComponent } from './pages/heroe/modal-add-edit-hero/modal-add-edit-hero.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedLibExampleModule } from 'shared-lib-example';
import { SidenavApplicationsComponent } from 'shared-lib-example/lib/components/sidenav-applications/sidenav-applications.component';
import { Function1Component } from './pages/function1/function1.component';
import { Function2Component } from './pages/function2/function2.component';
import { ModalAddMissionComponent } from './pages/mission/modal-add-mission/modal-add-mission.component';
import { LoginFormComponent } from './login/component/login-form/login-form.component';
import { InterceptorInterceptor } from './interceptor/interceptor.interceptor';
import { ErrorManageComponent } from './pages/error-manage/error-manage.component';
import { VillainComponent } from './pages/villain/villain.component';
import { TableVillainComponent } from './pages/villain/table-villain/table-villain.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    HeroeComponent,
    MissionComponent,
    NewHeroComponent,
    TableHeroComponent,
    NewMissionComponent,
    TableMissionComponent,
    ModalAddEditHeroComponent,
    Function1Component,
    Function2Component,
    ModalAddMissionComponent,
    LoginFormComponent,
    ErrorManageComponent,
    VillainComponent,
    TableVillainComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatTableModule,
    MatTabsModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
    SharedLibExampleModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
