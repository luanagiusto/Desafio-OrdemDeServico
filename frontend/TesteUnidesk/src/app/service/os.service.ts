import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DadosOrdens } from '../model/DadosOrdens';
import { Observable } from 'rxjs';


const API =' http://localhost:3000/ordens';

@Injectable({
  providedIn: 'root'
})
export class OsService {


  constructor(private http: HttpClient) { }

  listarOrdens(): Observable<DadosOrdens[]> {
    return this.http.get<DadosOrdens[]>(API);
  }


  criarOrdens(ordensForm: DadosOrdens) : Observable<DadosOrdens> {
    return this.http.post<DadosOrdens>(API, ordensForm);
  }





}
