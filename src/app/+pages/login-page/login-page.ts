import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  imports: [FormsModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {
  username: string = '';
  password: string = '';
  remember: boolean = false;
  message: string = '';
  test() {
    if (this.username=='admin' && this.password == 'admin') {
   } else {
      this.message = 'نام کاربری یا کلمه عبور صحیح نیست'
    }
  }
}
