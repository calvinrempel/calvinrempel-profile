import { Component, Input } from '@angular/core';
import { MenuLink } from './menu-link';

@Component({
  selector: 'app-sidebar',
  templateUrl: './app-sidebar.component.html',
  styleUrls: ['./app-sidebar.component.css']
})
export class AppSidebarComponent {
    @Input() title: string;
    @Input() subtitle: string;
    @Input() links: MenuLink[] = [];
}