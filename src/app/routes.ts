
import { AppProjectsComponent } from './containers/app-projects/app-projects.component';
import { AppProjectComponent } from './containers/app-project/app-project.component';

export const RouteConstants = {
    projects: "projects",
    project: "project/:id"
}

export function getProjectRoute(projectId: string): string {
    return '/' + RouteConstants.project.replace(':id', projectId);
}

export const Routes = [
    { path: '', redirectTo: '/' + RouteConstants.projects, pathMatch: 'full' },
    { path: RouteConstants.projects, component: AppProjectsComponent },
    { path: RouteConstants.project, component: AppProjectComponent }
]
