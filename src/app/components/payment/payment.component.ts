import { Component, inject } from '@angular/core';
import { QRCodeComponent } from 'angularx-qrcode';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-payment',
  imports: [QRCodeComponent],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})
export class PaymentComponent {

  private userService = inject(UserService);
  selectedMemberShip: number = 0;

  public myAngularxQrCode: string = "No membership Selected";
  constructor() {
    // assign a value
    // this.myAngularxQrCode = {}
  }


  ngOnInit() {
    this.selectedMemberShip = this.userService.selectedPlan;
    const membershipData = this.userService.getMembershipById(this.selectedMemberShip);

    this.myAngularxQrCode = JSON.stringify(membershipData)

    console.log(this.selectedMemberShip);
  }

}
