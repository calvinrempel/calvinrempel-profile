import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppContainerComponent } from './containers/app-container/app-container.component';
import { AppSidebarComponent } from './components/app-sidebar/app-sidebar.component';
import { AppRoutingModule } from './app-routing.module';
import { AppProjectsComponent } from './containers/app-projects/app-projects.component';
import { AppProjectComponent } from './containers/app-project/app-project.component';
import { ProjectsService } from './services/projects.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppContainerComponent,
    AppProjectComponent,
    AppProjectsComponent,
    AppSidebarComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    HttpClient,
    ProjectsService
  ],
  bootstrap: [AppContainerComponent]
})
export class AppModule { }
