import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Winner } from '../interface/Winner';
import { ConfigService } from '../config.service';

@Injectable({
  providedIn: 'root'
})
export class WinnerService {
  constructor(private http: HttpClient, private url: ConfigService) { }

  getWinners(): Observable<Winner[]> {
    return this.http.get<Winner[]>(`${this.url}/winner`)
  }
}
