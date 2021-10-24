import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StreamingServiceService {
  constructor(private apollo: Apollo) {}

  getService(name: string): Observable<any> {
    return this.apollo.watchQuery<any>({
      query: gql`
        {
          get_data {
            budget
            services {
              ${name} {
                current_suscription_name
                current_suscription_price
                due_date
                has_suscription
                image_url
                member_since
                plans {
                  mensual_cost
                  name
                }
              }
            }
            user
          }
        }
      `,
      context: {
        headers: new HttpHeaders().set(
          'x-api-key',
          'da2-j3i7ksjtovc65ofdhtbtwlptmy'
        ),
      },
    }).valueChanges;
  }

  getAllServices(): Observable<any> {
    return this.apollo.watchQuery<any>({
      query: gql`
        {
          get_data {
            budget
            services {
              Netflix {
                current_suscription_name
                current_suscription_price
                due_date
                has_suscription
                image_url
                member_since
                plans {
                  mensual_cost
                  name
                }
              }
            }
            user
          }
        }
      `,
      context: {
        headers: new HttpHeaders().set(
          'x-api-key',
          'da2-j3i7ksjtovc65ofdhtbtwlptmy'
        ),
      },
    }).valueChanges;
  }
}
