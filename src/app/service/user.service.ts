import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  //Write a function  to call api and pass Username and password.
  onLoginSubmit(userobj:any)
  {
    console.log (userobj);
    return this.http.post('https://dummyjson.com/auth/login',userobj) 
  }


}
