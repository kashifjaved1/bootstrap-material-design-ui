import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthUtils} from "../utils/auth-utils";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'https://jsonplaceholder.typicode.com';
  private tempUrl = 'https://reqres.in/api';

  constructor(private httpClient: HttpClient) {
  }

  getData(url: string): Observable<any> {
    return this.httpClient.get(this.baseUrl + url);
  }

  login(url: string, data: any): Observable<any> {
    return this.httpClient.post(this.tempUrl + url, data);
    //return this.httpClient.post(this.baseUrl + url, data);
  }

  signup(url: string, data: any): Observable<any> {
    return this.httpClient.post(this.tempUrl + url, data);
    //return this.httpClient.post(this.baseUrl + url, data);
  }

  getDataById(url: string, id: number): Observable<any>{
    return this.httpClient.get(this.baseUrl + url + id);
  }

}
