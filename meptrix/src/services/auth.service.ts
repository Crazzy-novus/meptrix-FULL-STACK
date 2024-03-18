import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { apiurls } from '../app/api.urls';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: any; // User object to store the user details after successful login

  http = inject(HttpClient); // Injecting HttpClient service to make HTTP requests to the server side application (MEAN stack) using RESTful API endpoints

  registerService (registerObj: any){ // Register service to register a new user in the application using RESTful API endpoint
    return this.http.post<any>(`${apiurls.AuthServiceApi}register`, registerObj);
  }

  loginService (loginObj: any){ // Register service to register a new user in the application using RESTful API endpoint
    return this.http.post<any>(`${apiurls.AuthServiceApi}login`, loginObj)
    .pipe(tap(res => {
      this.user = res.data;
      //console.log(this.user, res);
    }));

  }

  sendEmailService (email: string) {
    return this.http.post<any>(`${apiurls.AuthServiceApi}sendemail`, {email: email});
  }

  resetPasswordService (resetObj: any) {
    return this.http.post<any>(`${apiurls.AuthServiceApi}resetpassword`,resetObj);
  }

  getUserDetails(): Observable<any> {
    return this.http.get<any>(`${apiurls.UserServiceApi}/${this.user._id}`).pipe(
      map(response => response.data)
    );
  }
}
