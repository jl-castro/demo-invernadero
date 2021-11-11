import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class DemoService {
  constructor(private http: HttpClient) {}

  getData(): Observable<User[]> {
    return this.http.get<User[]>(
      `https://apipacientes.patelecomsrl.com/api/pacientes`
    );
  }
}
