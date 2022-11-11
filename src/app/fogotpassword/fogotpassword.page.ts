import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-fogotpassword',
  templateUrl: './fogotpassword.page.html',
  styleUrls: ['./fogotpassword.page.scss'],
})
export class FogotpasswordPage {

  constructor(private authSvc: AuthService, private router: Router) { }

 

  async onResetPassword(email){
    try{
        await this.authSvc.resetpassword(email.value);
        this.router.navigate(['/login']);
    }catch(error){
      console.log('Error=>', error);
    }
  }

}
