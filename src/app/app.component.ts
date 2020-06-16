import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { RateService } from '../app/services/rateService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public user:any = {};
  private rateSubscription : Subscription;

  title = 'facturadorApp';

  constructor(private rateService : RateService){};

  calculateBill(){
    console.log("user",this.user);
    if (this.rateSubscription)
    this.rateSubscription.unsubscribe()
    this.rateSubscription = this.rateService.post("/getRate", this.user).subscribe((response: any) => {
      if (response.code == "SUCCESS") {
        
      }
    });
    }

  clear(){
    this.user = {};
  }
}
