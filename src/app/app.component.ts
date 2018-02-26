import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <header>
      <nav>
        <a routerLink="/superheroes" routerLinkActive="active">Home</a>
        <a routerLink="/crisis-center" routerLinkActive="active">Design</a>
        <a [routerLink]="[{ outlets: { popup: ['compose'] } }]">Preview</a>
        <!--a routerLink="/admin" routerLinkActive="active">Admin</a>
        <a routerLink="/login" routerLinkActive="active">Login</a-->
      </nav>
    </header>
    <router-outlet></router-outlet>
    <router-outlet name="popup"></router-outlet>
  `
})
export class AppComponent {
}
