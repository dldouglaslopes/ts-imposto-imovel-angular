import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proprietario, CreateProprietario, UpdateProprietario } from './proprietario.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProprietarioService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.apiUrl}`;
  }

  getProprietarios(): Observable<Proprietario[]> {
    return this.http.get<Proprietario[]>(`${this.url}/proprietarios`);
  }

  createProprietario(request: CreateProprietario): Observable<Proprietario>{
    return this.http.post<Proprietario>(`${this.url}/proprietarios`, request);
  }

  getProprietario(id: string): Observable<Proprietario> {
    return this.http.get<Proprietario>(`${this.url}/proprietarios/${id}`);
  }

  updateProprietario(id: string, request: UpdateProprietario){
    return this.http.put<Proprietario>(`${this.url}/proprietarios/${id}`, request);
  }

  deleteProprietario(id: string): Observable<any>{
    return this.http.delete<any>(`${this.url}/proprietarios/${id}`);
  }
}
