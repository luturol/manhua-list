import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MangasService {

  constructor(public http: HttpClient) { }

  public getMangas(): Observable<any>{
    let url = environment.apiEndpoint + 'getmangas';
    let header = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')});    

    return this.http.get(url, { headers: header });
  }

  public addManhua(manhua: any): Observable<any>{
    let url = environment.apiEndpoint + 'addmanga';
    let header = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')});    
    let body = {
      name: manhua.name,
      chapter: manhua.chapter,
      state: manhua.state
    };

    return this.http.post(url, body, { headers: header });
  }
}
