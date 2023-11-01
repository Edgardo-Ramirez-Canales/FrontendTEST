import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private baseUrl = 'http://localhost:8080/webresources';

  constructor(private http: HttpClient) {}

  getPaisById(recId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/Pais/${recId}`);
  }
}
