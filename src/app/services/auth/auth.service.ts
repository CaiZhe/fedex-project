import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly url: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  postSignUpForm(formData: any) {
    const { payload } = formData;
    return this.http.post(`${this.url}/users`, payload.user);
  }
}
