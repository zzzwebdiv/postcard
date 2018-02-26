// TODO SOMEDAY: Feature Componetized like CrisisCenter
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Hero, HeroService }  from './hero.service';

@Component({
  template: `
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <div class="post-content">
            <form name="cardContent" ng-controller="cardController">
              <h4>Dear Client</h4>
              <textarea placeholder="Type message here"></textarea>
              <h4>From</h4>
            </form>  
          </div>  
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">
          <div class="design-step1">
              <p>Select the category for your postcard</p>
              <form name="theCat" ng-controller="CatController">
                <label>
                  <input type="radio" ng-model="card.cat" value="birthday">
                  Birthday
                </label>
                <label>
                  <input type="radio" ng-model="card.cat" value="new_born">
                  New Born
                </label>
                <label>
                  <input type="radio" ng-model="card.cat" value="wedding">
                  Wedding
                </label>
                <label>
                  <input type="radio" ng-model="card.cat" value="graduate">
                  Graduate
                </label>
                <label>
                  <input type="radio" ng-model="card.cat" value="others">
                  Others
                </label>
              </form>  
            </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6">
          <div class="design-btn">
            <h4><a>START DESIGN</a></h4>
           
          </div>  
        </div>
        <div class="col-sm-6">
          <div class="email-btn">
            <h4>SEND / DOWNLOAD</h4>
            <button class="btn">Preveiw</button>
            <button class="btn">Download</button>
            <button class="btn">Send</button>
          </div> 
        </div>
      </div>
    </div>
    <!--h2>HEROES</h2>
    <ul class="items">
      <li *ngFor="let hero of heroes$ | async"
        [class.selected]="hero.id === selectedId">
        <a [routerLink]="['/hero', hero.id]">
          <span class="badge">{{ hero.id }}</span>{{ hero.name }}
        </a>
      </li>
    </ul>

    <button routerLink="/sidekicks">Go to sidekicks</button-->
  `
})
export class HeroListComponent implements OnInit {
  heroes$: Observable<Hero[]>;

  private selectedId: number;

  constructor(
    private service: HeroService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.heroes$ = this.route.paramMap
      .switchMap((params: ParamMap) => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = +params.get('id');
        return this.service.getHeroes();
      });
  }
}
