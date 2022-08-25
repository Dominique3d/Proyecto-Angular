import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { environment } from 'src/environments/environment';
import { Clase } from '../interfaces/clase.interface';
import { Persona } from '../interfaces/persona.interface';

const base_url = environment.url_api;

@Injectable({
  providedIn: 'root'
})
export class ClaseService {

  constructor(private http: HttpClient) { }

  private readonly api_url = `${base_url}/clases`;

  getAllClases(): Observable<any> {
    return this.http.get<any>(`${this.api_url}`).pipe(map((res: any) => res.data));
  }

  getAllClasesByIdEstudiante(id: number): Observable<any>{
    return this.http.get<any>(`${this.api_url}/getAllClasesByIdEstudiante/${id}`);
  }
}
