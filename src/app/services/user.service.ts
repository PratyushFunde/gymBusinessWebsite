import { Injectable } from '@angular/core';
import { Membership } from '../models/membership';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  selectedPlan: number = 0;

  memberships: Membership[] = [
    { id: 1, planName: 'Basic Plan', features: ['Access to gym floor', 'Basic equipment', 'Locker room access'], price: 49 },
    { id: 2, planName: 'Premium Plan', features: ['All basic features', 'Group classes', 'Personal trainer', 'Nutrition advice'], price: 89 },
    { id: 3, planName: 'Elite Plan', features: ['All premium features', 'Private Sessions', 'Spa access', 'VIP lounge '], price: 129 },

  ]

  setSelectedPlan(planId: number) {
    this.selectedPlan = planId;
    console.log(this.selectedPlan)
  }

  getMemberships(): Membership[] {
    return this.memberships;
  }

  getMembershipById(id: number): Membership | undefined {
    return this.memberships.find(membership => membership.id === id);
  }



}
