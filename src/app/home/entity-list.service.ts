import {Injectable} from 'angular2/core';
import {HTTP_PROVIDERS, Http, Response} from "@angular/http";
import { Observable }     from 'rxjs/Observable';


@Injectable()
export class EntityListService {

  constructor(private http:Http) {}

  public getData(){
    return this.http.get("app/home/table-data.json")
    .map(res => res.json());
    //.map(this.extractData);
  }

  private extractData(res: Response) {
  let body = res.json();
  return body.data || { };
}

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }



}
