import { Component } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Project } from './../../models/project';

@Component({
  selector: 'app-project',
  templateUrl: './app-project.component.html',
  styleUrls: ['./app-project.component.css']
})
export class AppProjectComponent {
  project$: Observable<Project>;

  constructor(private projectsService: ProjectsService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.project$ = this.projectsService.getProject(params['id']);
    });
  }
}
