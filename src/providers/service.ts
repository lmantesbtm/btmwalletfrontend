import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class BTProvider{

  private apiURL = '/checkouts';

  constructor(public http:Http){
    console.log('Calling Braintree provider');
  }

  showResult(){
    return this.http.get('/result')
                .map(res => res.json());
  }

  showInvesment(){
    return this.http.get('/investment')
                .map(res => res.json())
  }
}
