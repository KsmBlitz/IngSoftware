import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = 'https://api.example.com/usuario'; // URL del API

  constructor(private http: HttpClient) {}

  obtenerUsuario(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
