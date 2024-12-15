import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [
    NgIf
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

  btnClick() {
    this.showReg = !this.showReg;
  }
}
