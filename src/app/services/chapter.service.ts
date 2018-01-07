import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

// https://codecraft.tv/courses/angular/ - Demo API
@Injectable()
export class ChapterService {

  apiRoot: string = "http://localhost:36644/api"; // "http://httpbin.org";
  constructor(private http: Http) { }

  doGET() {
    console.log("GET Chapter");
    let url = `${this.apiRoot}/Chapter`;
    this.http.get(url).subscribe(res => console.log(res.text()));
  }
  doPOST() {
    console.log("POST");
  }
  doPUT() {
    console.log("PUT");
  }
  doDELETE() {
    console.log("DELETE");
  }
  doGETAsPromise() {
    console.log("GET AS PROMISE");
  }
  doGETAsPromiseError() {
    console.log("GET AS PROMISE ERROR");
  }
  doGETAsObservableError() {
    console.log("GET AS OBSERVABLE ERROR");
  }
  doGETWithHeaders() {
    console.log("GET WITH HEADERS");
  }
}
