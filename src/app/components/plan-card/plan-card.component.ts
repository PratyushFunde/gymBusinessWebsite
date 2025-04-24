import { Component, inject, Input, Output, EventEmitter } from '@angular/core';
import { Membership } from '../../models/membership';
import { UserService } from '../../services/user.service';
import { NgClass, NgFor } from '@angular/common';
import { } from 'stream';

@Component({
  selector: 'app-plan-card',
  imports: [NgFor, NgClass],
  templateUrl: './plan-card.component.html',
  styleUrl: './plan-card.component.scss'
})
export class PlanCardComponent {

  @Output() selectedPlan = new EventEmitter<number>();

  plans: Membership[] = [];
  private userService = inject(UserService);



  selectedPlanId: number = this.userService.selectedPlan;

  ngOnInit() {
    this.plans = this.userService.getMemberships();
  }

  onPlanSelect(planId: number) {
    this.selectedPlanId = planId;
    console.log(planId)
  }

  onProceed() {
    this.selectedPlan.emit(this.selectedPlanId);
    this.userService.setSelectedPlan(this.selectedPlanId);
  }

}
