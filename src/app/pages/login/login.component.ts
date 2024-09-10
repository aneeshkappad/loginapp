import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userobject:any  = {
    username:"",
    password:""

  }
  userService = inject(UserService)
  router = inject(Router);
  doLogin()
  {
    this.userService.onLoginSubmit(this.userobject)
    .subscribe((result:any) =>
    {
      //If the api returns success we let the user to the system
      //otherwise provide and alert/ error message   
      console.log(result);
      if( result && result.token)
      {
        this.router.navigateByUrl("dashboard");
      }
      else
      {
        alert('error');
      }
    },
    (error) => {                              //Error callback
      alert('Invalid username and or password')
      console.log(error);
    }
    )
    ;
    
  }
}
