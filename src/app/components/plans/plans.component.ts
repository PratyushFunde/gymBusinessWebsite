import { Component, inject, Input } from '@angular/core';
import { PlanCardComponent } from '../plan-card/plan-card.component';
import { NavbarComponent } from "../navbar/navbar.component";
import { PaymentComponent } from "../payment/payment.component";
import { UserService } from '../../services/user.service';
import { NgIf } from '@angular/common';
import { SuccessComponent } from "../success/success.component";

@Component({
  selector: 'app-plans',
  imports: [PlanCardComponent, NavbarComponent, PaymentComponent, NgIf, SuccessComponent],
  templateUrl: './plans.component.html',
  styleUrl: './plans.component.scss'
})
export class PlansComponent {



  selectedPlan: number = 0;
  success: boolean = false;
  private userService = inject(UserService);

  onPlanSelected(planId: number) {
    this.selectedPlan = planId;
    console.log(this.selectedPlan);
  }


  onCancel() {
    this.selectedPlan = 0;
    this.success = false;
    this.userService.setSelectedPlan(0);
  }

  onComplete() {
    this.selectedPlan = 0;
    this.success = true;
  }


}
