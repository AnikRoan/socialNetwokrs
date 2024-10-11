import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Profile } from '../interface/profile.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  http = inject(HttpClient);
  baseApiurl = 'http://localhost:8080/api';

  constructor() { }

 getTestAccounts(){
  return this.http.get<Profile[]>('https://jsonplaceholder.typicode.com/users')
    
  
 }
}
