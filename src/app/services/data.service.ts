import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private header = {
    Authorization: 'token 7780b41a1bbd1a474133226c842cebaaba84e84d'
  };
  private url = 'https://api.github.com/';

  constructor(private http: HttpClient) {
  }

  getUserId(name: string) {
    return this.http.get(this.url + 'search/users?q=' + name );
  }

  getUserData(login: string) {
    return this.http.get(this.url + 'users/' + login);
  }
}
