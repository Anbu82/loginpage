import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public loggedInStatus = true;

  constructor() { }
}
