// #docplaster
// #docregion
import { Component } from '@angular/core';

import { UrlSerializer, DefaultUrlSerializer, RouterOutletMap, Router, ActivatedRoute, ROUTER_DIRECTIVES, Params,
 RouterStateSnapshot, ActivatedRouteSnapshot, CanActivate, CanDeactivate, Event, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '../src/index';

import { Crisis, CrisisService } from './crisis.service';

@Component({
  template: `
    <ul class="items">
      <li *ngFor="let crisis of crises"
        [class.selected]="isSelected(crisis)"
        (click)="onSelect(crisis)">
        <span class="badge">{{crisis.id}}</span> {{crisis.name}}
      </li>
    </ul>
  `,
})
export class CrisisListComponent implements OnActivate {
  crises: Crisis[];
  private currSegment: RouteSegment;
  private selectedId: number;

  constructor(
    private service: CrisisService,
    private router: Router) { }

  isSelected(crisis: Crisis) { return crisis.id === this.selectedId; }

  routerOnActivate(curr: RouteSegment, prev: RouteSegment, currTree: RouteTree) {
    this.currSegment = curr;
    this.selectedId = +currTree.parent(curr).getParam('id');
    this.service.getCrises().then(crises => this.crises = crises);
  }

  onSelect(crisis: Crisis) {
    // Absolute link
    // this.router.navigate([`/crisis-center`, crisis.id]);

    // Relative link
    this.router.navigate([`./${crisis.id}`], this.currSegment);
  }
}
