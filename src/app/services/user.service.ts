import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user';

const API_VERSION_PATH = `${environment.apiUrl}/api/v1`;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get(`${API_VERSION_PATH}/user`);
  }

  getUser(id: string) {
    return this.http.get(`${API_VERSION_PATH}/user/${id}`);
  }

  createUser(user: User) {
    return this.http.post(`${API_VERSION_PATH}/user`, user);
  }

  deleteUser(id: string) {
    return this.http.delete(`${API_VERSION_PATH}/user/${id}`);
  }

}
