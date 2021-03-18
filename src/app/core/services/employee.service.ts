import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(
    private http: HttpClient
  ) { }

  public getEmployees(): Observable<HttpResponse<any>> {
    return this.http.get<any>('https://gorest.co.in/public-api/users', { observe: 'response' });
  }
  
}
