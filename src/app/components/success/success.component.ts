import { Component, inject } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Membership } from '../../models/membership';

@Component({
  selector: 'app-success',
  imports: [],
  templateUrl: './success.component.html',
  styleUrl: './success.component.scss'
})
export class SuccessComponent {

  private userService = inject(UserService);
  selectedMembership !: Membership | undefined;

  today = new Date().toDateString();

  ngOnInit() {
    this.selectedMembership = this.userService.getMembershipById(this.userService.selectedPlan);
    console.log(this.selectedMembership);

  }

}
