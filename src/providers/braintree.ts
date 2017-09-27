import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import * as dropin from 'braintree-web-drop-in';

@Injectable()
export class BTProvider{

  private apiURL = '/checkouts';

  constructor(public http:Http){
    console.log('Calling Braintree provider');
  }

  braintreeIsReady: boolean;
  dropIninstance: any;
  payloadOut: any;

  // initialize dropin function to ionic
  loadDropin(){
    dropin.create({
      authorization: "sandbox_yr8fgxx2_d73bs4qznwm68dqw",
      selector: '#bt-dropin'
    }, (err, dropinInstance) => {
      if (err) {
        // Handle any errors that might've occurred when creating Drop-in
        console.error(err);
        return;
      }
      this.dropIninstance = dropinInstance;
      this.braintreeIsReady = true;
    });
  }

  // pass payload to server
  checkOut(){
    let headers = {};
    let dropIn: any;
    let promisePayload: any;

    headers = {
      'Content-Type': 'application/json'
    }

    return this.getPayload().then(payload => {
      let price = (<HTMLInputElement>document.getElementById("amount")).value;
      payload["amount"] = price;
      return this.http.post(this.apiURL, payload, headers).toPromise()
                .then(this.extractData)
                .catch(this.handleError)
    })
  }

  getPayload() {
    return new Promise((resolve, reject) => {
      this.dropIninstance.requestPaymentMethod().then((payload) =>{
        resolve(payload);
      }, error => {
        reject(error)
      })
    });
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      console.log('err ' + body);
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errMsg);
  }
}
