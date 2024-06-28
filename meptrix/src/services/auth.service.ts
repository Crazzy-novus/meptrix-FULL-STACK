import { HttpClient, HttpEvent, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { apiurls } from '../app/api.urls';
import { filter, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { application, response } from 'express';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  http = inject(HttpClient); // Injecting HttpClient service to make HTTP requests to the server side application (MEAN stack) using RESTful API endpoints

  /* ***************************** POST URL  Start ****************************************** */


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

  addClubService (clubObj: any){ // Register service to register a new user in the application using RESTful API endpoint
    return this.http.post<any>(`${apiurls.ClubServiceApi}createclub`, clubObj);
  }

  createEvent(eventData: any): Observable<any> {
    return this.http.post<any>(`${apiurls.EventServiceApi}createevent`, eventData);
  }

  createContest(contestData: any): Observable<any> {
    return this.http.post<any>(`${apiurls.ContestServiceApi}createcontest`, contestData);
  }

  applyClubService(applicationData: any): Observable<any> {
    return this.http.post<any>(`${apiurls.ApplicationServiceApi}createappliaction`, applicationData);
  }
/* ***************************** POST URL End ****************************************** */

/* ***************************** GET URL  Start ****************************************** */
getUserDetails(): Observable<any> {
  let id:any = sessionStorage.getItem('userId');
  let params = new HttpParams().set('userId', id);

  return this.http.get<any>(`${apiurls.UserServiceApi}user`, {params}).pipe(
    map(response => response.data)
  );
}

getAllUserDetails(url:String = ''): Observable<any> {
  return this.http.get<any>(`${apiurls.UserServiceApi}${url}`, { withCredentials: true}).pipe(
    map(response => response.data)
  );
}

getClubsService(): Observable<any> {
  return this.http.get<any>(`${apiurls.ClubServiceApi}getallclubs`).pipe(
    map(response => response.data)
  );
}
getParticularClubsService(type: String): Observable<any> {
  return this.http.get<any>(`${apiurls.ClubServiceApi}getclubs/${type}`).pipe(
    map(response => response.data)
  );

}


getAllEventService(): Observable<any> {
  return this.http.get<any>(`${apiurls.EventServiceApi}getallevent`).pipe(
    map(response => response.data)
  );
}

getContestService(): Observable<any> {
  return this.http.get<any>(`${apiurls.ContestServiceApi}getallcontest`).pipe(
    map(response => response.data)
  );
}

getApplicationService(applicationData: any): Observable<any> {
  let id:any = applicationData.UserId;
  let clubId:any = applicationData.clubId;
  let params = new HttpParams().set('userId', id).set('clubId', clubId);

  return this.http.get<any>(`${apiurls.ApplicationServiceApi}getapplications/`,  {params}).pipe(
    map(response => response.data)
  );
}
getallApplicationService(): Observable<any> {
  return this.http.get<any>(`${apiurls.ApplicationServiceApi}getallapplications`, { withCredentials: true}).pipe(
    map(response => response.data)
  );
}

/* ***************************** GET URL ENDS ****************************************** */

  sendEmailService (email: string) {
    return this.http.post<any>(`${apiurls.AuthServiceApi}sendemail`, {email: email});
  }

  resetPasswordService (resetObj: any) {
    return this.http.post<any>(`${apiurls.AuthServiceApi}resetpassword`,resetObj);
  }

  /* ***************************** PUT URL Starts ****************************************** */


  updateRoleService(Userobj: any): Observable<any> {

    return this.http.put<any>(`${apiurls.UserServiceApi}updateuser/${Userobj.id}`, Userobj, {withCredentials: true});
  }

  updateUserService(Userobj: any): Observable<any> {
    return this.http.put<any>(`${apiurls.UserServiceApi}updateuserdetails/${Userobj._id}`, Userobj, {withCredentials: true});
  }

  updateClubService(clubObj: any): Observable<any> {
    return this.http.put<any>(`${apiurls.ClubServiceApi}updateclub/${clubObj._id}`, clubObj, {withCredentials: true});
  }

  approvedApplicationService(applicationObj: any, applicationId: string): Observable<any> {
    return this.http.put<any>(`${apiurls.ApplicationServiceApi}approved/${applicationId}`, applicationObj, {withCredentials: true});
  }

  registerEventService(eventId: any, userId: any): Observable<any> {
    return this.http.put<any>(`${apiurls.EventServiceApi}registerevent/${eventId}/${userId}`, {withCredentials: true});

  }
  revokeRoleService(UserId: string): Observable<any> {
    return this.http.put<any>(`${apiurls.UserServiceApi}revokeuser/${UserId}`, null, {withCredentials: true});
  }

  /* ***************************** PUT URL ENDS ****************************************** */


  /* ***************************** DELETE URL Starts ****************************************** */

  deleteApplicationService(applicationId: string): Observable<any> {
    return this.http.delete<any>(`${apiurls.ApplicationServiceApi}deleteapplication/${applicationId}`, {withCredentials: true});
  }
  deleteUserService(UserId: string): Observable<any> {
    return this.http.delete<any>(`${apiurls.UserServiceApi}deleteuser/${UserId}`, {withCredentials: true});
  }


}
