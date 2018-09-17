import { Component } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { Observable } from 'rxjs';
import { Project } from '../../models/project';
import { getProjectRoute } from '../../routes';

@Component({
  selector: 'app-projects',
  templateUrl: './app-projects.component.html',
  styleUrls: ['./app-projects.component.css']
})
export class AppProjectsComponent {
    projects$: Observable<Project[]>;

    constructor(private projectsService: ProjectsService) {
        this.projects$ = this.projectsService.getProjects();
    }

    getProjectLink(project: Project) {
        return getProjectRoute(project.id);
    }
}
