import { HttpClient, HttpEvent, HttpResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { apiurls } from '../app/api.urls';
import { filter, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  http = inject(HttpClient); // Injecting HttpClient service to make HTTP requests to the server side application (MEAN stack) using RESTful API endpoints

  registerService (registerObj: any){ // Register service to register a new user in the application using RESTful API endpoint
    return this.http.post<any>(`${apiurls.AuthServiceApi}register`, registerObj)

  }

  loginService (loginObj: any){// Register service to register a new user in the application using RESTful API endpoint
    return this.http.post<any>(`${apiurls.AuthServiceApi}login`, loginObj, {withCredentials: true})
    .pipe(
      tap((res) => {
          if (res) {
              sessionStorage.setItem('userRole', loginObj.roles);
              sessionStorage.setItem('userId', res.data._id);
          }
      })
  );

  }

  sendEmailService (email: string) {
    return this.http.post<any>(`${apiurls.AuthServiceApi}sendemail`, {email: email});
  }

  resetPasswordService (resetObj: any) {
    return this.http.post<any>(`${apiurls.AuthServiceApi}resetpassword`,resetObj);
  }

  getUserDetails(): Observable<any> {

    return this.http.get<any>(`${apiurls.UserServiceApi}user`, { withCredentials: true}).pipe(
      map(response => response.data)
    );
  }

  getAllUserDetails(url:String = ''): Observable<any> {

    return this.http.get<any>(`${apiurls.UserServiceApi}${url}`, { withCredentials: true}).pipe(
      map(response => response.data)
    );
  }

  addClubService (clubObj: any){ // Register service to register a new user in the application using RESTful API endpoint
    return this.http.post<any>(`${apiurls.ClubServiceApi}createclub`, clubObj);
  }

  getClubsService(): Observable<any> {

    return this.http.get<any>(`${apiurls.ClubServiceApi}getallclubs`).pipe(
      map(response => response.data)
    );
  }
  createEvent(eventData: any): Observable<any> {
    return this.http.post<any>(`${apiurls.EventServiceApi}createevent`, eventData);
  }

  getAllEventService(): Observable<any> {

    return this.http.get<any>(`${apiurls.EventServiceApi}getallevent`).pipe(
      map(response => response.data)
    );
  }

  createContest(contestData: any): Observable<any> {
    return this.http.post<any>(`${apiurls.ContestServiceApi}createcontest`, contestData);
  }

  getContestService(): Observable<any> {

    return this.http.get<any>(`${apiurls.ContestServiceApi}getallcontest`).pipe(
      map(response => response.data)
    );
  }

  updateRoleService(Userobj: any): Observable<any> {
    console.log(Userobj);
    return this.http.put<any>(`${apiurls.UserServiceApi}updateuser/${Userobj.id}`, Userobj, {withCredentials: true});
  }

  updateUserService(Userobj: any): Observable<any> {
    console.log(Userobj);
    return this.http.put<any>(`${apiurls.UserServiceApi}updateuserdetails/${Userobj._id}`, Userobj, {withCredentials: true});
  }
}
