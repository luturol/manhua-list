import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public login(username: string, password: string): Observable<any>{    
    let url = environment.apiEndpoint + 'login';
    let header = new HttpHeaders({'Content-Type': 'application/json'});    
    let body = {
      username: username,
      password: password
    };
    return this.http.post(url, body, { headers: header } );
  }

  public addUser(username: string, password: string, email: string): Observable<any> {
    let url = environment.apiEndpoint + 'adduser';
    let header = new HttpHeaders({'Content-Type': 'application/json'});    
    let body = {
      username: username,
      email: email,
      password: password
    };
    
    return this.http.post(url, body, { headers: header });
  }
}
