/* eslint-disable object-shorthand */
/* eslint-disable @typescript-eslint/naming-convention */
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

  changeDueDate(service: string, date: string) {
    const CHANGE_DUE_DATE = gql`
      mutation MyMutation($new_due_date: String!, $platform: String!) {
        change_due_date(new_due_date: $new_due_date, platform: $platform) {
          services {
            ${service} {
              due_date
            }
          }
        }
      }
    `;

    return this.apollo.mutate({
      mutation: CHANGE_DUE_DATE,
      variables: {
        new_due_date: date,
        platform: service,
      },
      context: {
        headers: new HttpHeaders().set(
          'x-api-key',
          'da2-j3i7ksjtovc65ofdhtbtwlptmy'
        ),
      },
    });
  }

  changeSubscriptionPlan(cost: number, plan_name: string, platform: string) {
    const CHANGE_DUE_DATE = gql`
      mutation MyMutation2($mensual_cost: Float!, $plan_name: String!, $platform: String!) {
        change_plan(mensual_cost: $mensual_cost, plan_name: $plan_name, platform: $platform) {
          services {
            ${platform} {
              current_suscription_name
              due_date
            }
          }
        }
      }
    `;

    return this.apollo.mutate({
      mutation: CHANGE_DUE_DATE,
      variables: {
        mensual_cost: cost,
        plan_name: plan_name,
        platform: platform,
      },
      context: {
        headers: new HttpHeaders().set(
          'x-api-key',
          'da2-j3i7ksjtovc65ofdhtbtwlptmy'
        ),
      },
    });
  }

  cancelSubscription(platform: string) {
    const CANCEL_SUBSCRIPTION = gql`
      mutation MyMutation2($platform: String!) {
        cancel_subscription(platform: $platform) {
          budget
        }
      }
    `;

    return this.apollo.mutate({
      mutation: CANCEL_SUBSCRIPTION,
      variables: {
        platform: platform,
      },
      context: {
        headers: new HttpHeaders().set(
          'x-api-key',
          'da2-j3i7ksjtovc65ofdhtbtwlptmy'
        ),
      },
    });
  }
}
