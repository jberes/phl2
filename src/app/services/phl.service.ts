import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhlService {
  constructor(private http: HttpClient) { }

  public getFinData1(): Observable<any> {
    return this.http.get(`https://excel2json.io/api/share/c38fb24b7b2d4bb79f904611db2440f5`);
  }
}
