import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Estudiante } from '../interfaces/estudiante.interface';

const base_url = environment.url_api;

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
  constructor(private readonly http: HttpClient) { }

  private readonly api_url = `${base_url}/personas`;

  get token(): string {
    return localStorage.getItem('token') || '';
  }
  getAllEstudiantes(): Observable<any> {
    return this.http.get<any>(`${this.api_url}`);
  }
  getEstudianteById(id: string): Observable<any> {
    return this.http.get<any>(`${this.api_url}/${id}`);
  }
  createEstudiante(estudiante: Estudiante): Observable<any> {
    return this.http.post<any>(`${this.api_url}`, estudiante);
  }
  updateEstudiante(estudiante: Estudiante): Observable<any> {
    return this.http.put<any>(
      `${this.api_url}/${estudiante.id}`,
      estudiante
    );
  }
  deleteEstudiante(id: string): Observable<any> {
    return this.http.delete<any>(`${this.api_url}/${id}`);
  }
}

