/* eslint-disable @typescript-eslint/dot-notation */
import { Component, Input, OnInit } from '@angular/core';
import { StreamingServiceService } from '../streaming-service.service';
import { Apollo, gql } from 'apollo-angular';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-service-full-card',
  templateUrl: './service-full-card.component.html',
  styleUrls: ['./service-full-card.component.scss'],
})
export class ServiceFullCardComponent implements OnInit {
  @Input() showItems = 0;
  allServices: Observable<any>;
  loaded = false;

  constructor(
    private apolloService: StreamingServiceService,
    private apollo: Apollo,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.getAllServices();
  }

  goToDetails(id: string): void {
    console.log(id);
    this.router.navigate(['/details', id]);
  }

  getAllServices() {
    this.getAllData().subscribe((res) => {
      this.allServices = res.services;
      if (this.allServices !== undefined) {
        this.loaded = true;
      }
    });
  }

  getAllData() {
    return this.apollo
      .watchQuery<any>({
        query: gql`
          {
            get_data {
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
                Prime {
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
                Spotify {
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
                Disney {
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
            }
          }
        `,
        context: {
          headers: new HttpHeaders().set(
            'x-api-key',
            'da2-j3i7ksjtovc65ofdhtbtwlptmy'
          ),
        },
      })
      .valueChanges.pipe(map((res) => res.data.get_data));
  }
}
