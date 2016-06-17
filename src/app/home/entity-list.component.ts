import { Component, OnInit } from '@angular/core';
import {DatePipe} from "@angular/common";
import {HTTP_PROVIDERS, Http} from "@angular/http";
import {DataTableDirectives} from 'angular2-datatable/datatable';
import * as _ from 'lodash';

@Component({
    selector: 'entity-list',
    template: require('./entity-list.component.html'),
    providers: [HTTP_PROVIDERS],
    directives: [DataTableDirectives],
    pipes: [DatePipe]
})

export class EntityListComponent implements OnInit{

    private data;

    constructor(private http:Http) {
       http.get("app/home/table-data.json")
            .subscribe((data)=> {
                setTimeout(()=> {
                    this.data = data.json();
                }, 1000);
            });
    }
    
    public ngOnInit() {
        console.log(this.data);
    }

    private sortByWordLength = (a:any) => {
        return a.fieldA.length;
    }
    
    public removeItem(item: any) {
      this.data = _.filter(this.data, (elem)=>elem!=item);
      console.log("Remove: ", item.fieldA);
    }
}
