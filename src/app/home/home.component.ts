import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {NgIf} from '@angular/common';
import {RegistrationComponent} from '../registration/registration.component';

@Component({
  selector: 'app-home',
  imports: [
    NgIf,
    RegistrationComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less'
})
export class HomeComponent {
  title = 'Home';
  showReg: boolean = false;

  constructor(private router: Router) {
    this.title = 'Home';
    this.router = router;
  }

  GetData() {
    this.showReg = false;
  }

  btnClick() {
    this.showReg = !this.showReg;
  }
}
