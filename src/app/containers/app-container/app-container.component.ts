import { Component, OnInit } from '@angular/core';
import { MenuLink } from './../../components/app-sidebar/menu-link';
import { getProjectRoute } from '../../routes';

@Component({
  selector: 'app-container',
  templateUrl: './app-container.component.html',
  styleUrls: ['./app-container.component.css']
})
export class AppContainerComponent implements OnInit {
  links: MenuLink[] = [];

  ngOnInit() {
    this.links = [
      new MenuLink('Projects', '/projects', [
        new MenuLink('Profile', getProjectRoute('profile')),
        new MenuLink('Quizzical', getProjectRoute('quizzical')),
        new MenuLink('Sudoku', getProjectRoute('sudoku')),
      ])
    ]
  }
}
