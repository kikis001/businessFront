import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interface/User';
import { ConfigService } from '../config.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient, private url: ConfigService) { }

  private urlUser = `${this.url}/users`

  async getOne(id: string): Promise<Observable<User>> {
    return await this.http.get<User>(`${this.urlUser}/${id}`)
  }
}
