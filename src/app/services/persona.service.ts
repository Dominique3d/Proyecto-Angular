import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { environment } from 'src/environments/environment';
import { Persona } from '../interfaces/persona.interface';

const base_url = environment.url_api;

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  constructor(private http: HttpClient) { }

  private readonly api_url = `${base_url}/personas`;

  // get token(): string {
  //   return localStorage.getItem('token') || '';
  // }
  getAllPersonas(): Observable<any> {
    return this.http.get<any>(`${this.api_url}`).pipe(map((res: any) => res.data));
  }
  getAllEstudiantes(): Observable<any> {
    return this.http.get<any>(`${this.api_url}/getAllEstudiantes`);
  }
  getAllInstructores(): Observable<any> {
    return this.http.get<any>(`${this.api_url}/getAllInstructores`);
  }
  getPersonaById(id: number):Observable<any>{
    return this.http.get<any>(`${this.api_url}/getPersonaById/${id}`)
  }

  getAllEstudiantesByIdInstructor(id: number): Observable<any>{
    return this.http.get<any>(`${this.api_url}/getAllEstudiantesByIdInstructor/${id}`);
  }

  // getEstudianteById(id: string): Observable<any> {
  //   return this.http.get<any>(`${this.api_url}/${id}`);
  // }
  // createEstudiante(estudiante: Estudiante): Observable<any> {
  //   return this.http.post<any>(`${this.api_url}`, estudiante);
  // }
  // updateEstudiante(estudiante: Estudiante): Observable<any> {
  //   return this.http.put<any>(
  //     `${this.api_url}/${estudiante.id}`,
  //     estudiante
  //   );
  // }
  // deleteEstudiante(id: string): Observable<any> {
  //   return this.http.delete<any>(`${this.api_url}/${id}`);
  // }
}

