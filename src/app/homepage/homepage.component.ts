import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo, gql } from 'apollo-angular';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  constructor(private apollo: Apollo, private router: Router) {}

  ngOnInit() {
    this.testQuery();
  }

  goTo(target: string) {
    this.router.navigate(['/spending']);
  }

  testQuery() {
    this.apollo
      .watchQuery({
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
      })
      .valueChanges.subscribe((results: any) => {
        console.log(results.data.get_data);
      });
  }
}
