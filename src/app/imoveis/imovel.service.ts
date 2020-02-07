import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Imovel, CreateImovel, UpdateImovel } from './imovel.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImovelService {

  private url: string;

  constructor(private http: HttpClient) { 
    this.url = `${environment.apiUrl}`;
  }

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
