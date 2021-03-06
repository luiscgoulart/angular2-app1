import { Component, OnInit } from '@angular/core';
import {MD_TABS_DIRECTIVES, MdTabGroup} from '@angular2-material/tabs';
import { ActivatedRoute, Router }       from '@angular/router';

@Component({
    //selector: 'entity-list',
    template: require('./entity-detail.component.html'),
    //providers: [EntityListService],
    directives: [MD_TABS_DIRECTIVES],
    //pipes: [DatePipe]
})

export class EntityDetailComponent {
  constructor(
    private router: Router
  ) { }
}
