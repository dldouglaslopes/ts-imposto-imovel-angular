import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Imovel, CreateImovel, UpdateImovel } from './imovel.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImovelService {

  private url = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getImoveis(): Observable<Imovel[]> {
    return this.http.get<Imovel[]>(`${this.url}/imoveis`);
  }

  createImovel(request: CreateImovel): Observable<Imovel>{
    return this.http.post<Imovel>(`${this.url}/imoveis`, request);
  }

  getImovel(id: string): Observable<Imovel> {
    return this.http.get<Imovel>(`${this.url}/imoveis/${id}`);
  }

  updateImovel(id: string, request: UpdateImovel){
    return this.http.put<Imovel>(`${this.url}/imoveis/${id}`, request);
  }

  deleteImovel(id: string): Observable<any>{
    return this.http.delete<any>(`${this.url}/imoveis/${id}`);
  }
}
