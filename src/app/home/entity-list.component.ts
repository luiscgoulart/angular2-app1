import { Component, OnInit } from '@angular/core';
import {DatePipe} from "@angular/common";
import {DataTableDirectives} from 'angular2-datatable/datatable';
//import {HTTP_PROVIDERS, Http, Response} from "@angular/http";
import { ActivatedRoute, Router } from '@angular/router';
import * as _ from 'lodash';
import { TOOLTIP_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';
import {EntityListService} from './entity-list.service';

@Component({
    //selector: 'entity-list',
    template: require('./entity-list.component.html'),
    providers: [EntityListService],
    directives: [DataTableDirectives, TOOLTIP_DIRECTIVES],
    pipes: [DatePipe]
})


export class EntityListComponent implements OnInit{

    private data: any;
    private dataLength: number;

    constructor(private router: Router, private entityListService: EntityListService) {
    }

    public ngOnInit() {
      this.getData();
      setTimeout(() => {console.log("dataLenght: " + this.dataLength)}, 2000);
      setTimeout(() => {console.log("data: " + JSON.stringify(this.data))}, 2000);
    }

    public getData() {
      this.entityListService.getData().subscribe(
        (data) => {
          this.getLength(data),
          this.data = data
        },
        error => console.log("Error HTTP GET Service"),
        () => console.log("Job Done Get !")
      );
    }

    private getLength(param: any) {
      console.log("getLenght() :" + param.length);
      //console.log(Typeof(param.length));
      this.dataLength = param.length;
    }

    private sortByWordLength = (a:any) => {
        return a.fieldA.length;
    }

    public removeItem(item: any) {
      this.data = _.filter(this.data, (elem)=>elem!=item);
      console.log("Remove: ", item.fieldA);
    }

}
