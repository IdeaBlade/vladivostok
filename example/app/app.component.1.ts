/* First version */
// #docplaster

// #docregion
import { Component } from '@angular/core';

import { UrlSerializer, DefaultUrlSerializer, RouterOutletMap, Router, ActivatedRoute, ROUTER_DIRECTIVES, Params,
 RouterStateSnapshot, ActivatedRouteSnapshot, CanActivate, CanDeactivate, Event, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '../src/index';

import { CrisisListComponent } from './crisis-list.component';
import { HeroListComponent }   from './hero-list.component';

@Component({
  selector: 'my-app',
// #docregion template
  template: `
    <h1>Component Router</h1>
    <nav>
      <a [routerLink]="['/crisis-center']">Crisis Center</a>
      <a [routerLink]="['/heroes']">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
// #enddocregion template
  directives: [ROUTER_DIRECTIVES]
})
// #enddocregion
/*
 // #docregion route-config
 @Component({ ... })
 // #enddocregion route-config
 */
// #docregion
// #docregion route-config
@Routes([
// #docregion route-defs
  {path: '/crisis-center', component: CrisisListComponent},
  {path: '/heroes',        component: HeroListComponent},
  {path: '*',        component: CrisisListComponent}
// #enddocregion route-defs
])
export class AppComponent { }
// #enddocregion route-config
// #enddocregion