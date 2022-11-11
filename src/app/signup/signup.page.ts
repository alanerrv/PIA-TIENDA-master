import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(private authSvc:AuthService, private router:Router) { }

  ngOnInit() {
  }

  async signUPUser(email, password){
    try{
      const user = await this.authSvc.signup(email.value, password.value);
      if (user){
        const isVerified = this.authSvc.isEmailVerified(user);
        this.redirectUser(await isVerified)
      }
    }
    catch(error){console.log('Error', error)}
  }
  private redirectUser(isVerified: boolean): void {
    if (isVerified) {
      this.router.navigate(['login']);
    } else {
      this.router.navigate(['login']);
    }
  }
}
