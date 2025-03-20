import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Room } from '../models/room';
import { rooms } from '../data/rooms';

@Injectable({
  providedIn: 'root'
})
export class RoomDataService {
  constructor() {}

  getRooms(): Observable<Room[]> {    
    return of(rooms);
  }

  getRoom(roomCode: string): Observable<Room[]> {
    const room = rooms.filter(room => room.code === roomCode);
    return of(room);
  }

  addRoom(formData: Room): Observable<Room> {
    rooms.push(formData);
    return of(formData);
  }

  updateRoom(formData: Room): Observable<Room> {
    const index = rooms.findIndex(room => room.code === formData.code);
    if (index !== -1) {
      rooms[index] = formData;
    }
    return of(formData);
  }
} 