import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/shared/header/header.component';
import { MainComponent } from './pages/shared/main/main.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeroeComponent } from './pages/heroe/heroe.component';
import { MissionComponent } from './pages/mission/mission.component';
import { NewHeroComponent } from './pages/heroe/new-hero/new-hero.component';
import { TableHeroComponent } from './pages/heroe/table-hero/table-hero.component';
import { HttpClientModule } from '@angular/common/http';
import { NewMissionComponent } from './pages/mission/new-mission/new-mission.component';
import { TableMissionComponent } from './pages/mission/table-mission/table-mission.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatTabsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
