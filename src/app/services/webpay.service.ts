import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WebpayPlus } from 'transbank-sdk';
import { Options, IntegrationApiKeys, Environment, IntegrationCommerceCodes } from 'transbank-sdk';

@Injectable({
  providedIn: 'root'
})
export class WebpayService {

  readonly tx = new WebpayPlus.Transaction(new Options(IntegrationCommerceCodes.WEBPAY_PLUS, IntegrationApiKeys.WEBPAY, Environment.Integration));

  readonly returnUrl = 'http://localhost:4200/';

  readonly webpayUrl = "https://webpay3gint.transbank.cl/rswebpaytransaction/api/webpay/v1.0/transactions";
  token = '';

  constructor(private http: HttpClient) { }

  async initTransaction(amount: number, sessionId: string) {
    try{
      var buyOrder = Date.now().toString();
      console.log("request is: amount: " + amount + " sessionId: " + sessionId + " buyOrder: " + buyOrder);
      const response = await this.tx.create(buyOrder, sessionId, amount, this.returnUrl);
      console.log("webpay init response url: " + response.url);
      console.log("webpay init response token: " + response.token);
      this.token = response.token;
      // document.location.replace(response.url);
    }catch(err){
      console.log("error en init: ", err);
    }
  }

  callAPI() {
    this.http.post('http://localhost:3030/api/token', this.token).subscribe((data: any) => {
      (<HTMLFormElement>document.getElementById("webpay-form")).action=data.url;
      (<HTMLInputElement>document.getElementById("token")).value=data.token;
      (<HTMLFormElement>document.getElementById("webpay-form")).submit();
    })
  }

  async finishTransaction(token: string) {
    try{
      const response = await this.tx.commit(token);  
      console.log("webpay finish response: " + response);
      document.location.replace(this.returnUrl + '?response=' + (response.response_code == 0));
    }catch(err){
      console.log("error en finish: ", err);
    }
  }
}
