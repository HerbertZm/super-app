import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StreamingServiceService {
  allUrl =
    'https://vxnmjzwmfbbzdetqboglxbj7x4.appsync-api.us-east-1.amazonaws.com/graphql';

  constructor(private http: HttpClient) {}

  // getAllData(): Observable<any> {
  //   return this.http.post<any>(this.allUrl);
  // }
}
