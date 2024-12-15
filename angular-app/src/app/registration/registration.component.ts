import { Component } from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-registration',
  imports: [
    NgIf
  ],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.less'
})
export class RegistrationComponent {
  showReg: boolean = false;

  btnClick() {
    this.showReg = !this.showReg;
  }
}
