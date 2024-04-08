import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Room } from '../interface/Room';
import { ConfigService } from '../config.service';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  constructor(private http: HttpClient, private url: ConfigService) { }

  private urlRoom = `${this.url}/rooms`

  getOne(id: string | null): Observable<Room> {
    return this.http.get<Room>(`${this.urlRoom}/${id}`);
  }

  getRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(`${this.urlRoom}`);
  }

  addTeamRoom(roomId: string, teamId: string) {
    return this.http.put(`${this.urlRoom}/${roomId}/addTeam/${teamId}`, {});
  }

  submitAnswers(roomId: string | null, teamId: string, answers: number[]): Observable<number[]> {
    return this.http.post<number[]>(`${this.urlRoom}/${roomId}/teams/${teamId}/submit-answers`, answers);
  }

  validateTeamExist(roomId: string | null, teamId: string) {
    return this.http.get(`${this.urlRoom}/${roomId}/existUserRoom/${teamId}`)
  }
}
