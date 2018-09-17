import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, ReplaySubject, Observable } from "rxjs";
import { map, shareReplay } from 'rxjs/operators';
import { Project } from './../models/project';

@Injectable()
export class ProjectsService {
    private projectsCache$: Observable<Project[]>;

    constructor(private http: HttpClient){}

    // Only loads projects on the first call. Afterwards, the cached copy is reused.
    getProjects() {
        if (!this.projectsCache$) {
            this.projectsCache$ = this.requestProjects()
                .pipe(
                    shareReplay(1)
                );
        }

        return this.projectsCache$;
    }

    getProject(id: string) {
        return this.getProjects()
            .pipe(
                map(projects => projects.find(project => project.id === id))
            );
    }

    private requestProjects() {
        return this.http.get('/assets/projects.json')
            .pipe(
                map((json: object[]) => json.map(proj => new Project(proj)))
            );
    }
}