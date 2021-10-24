/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit, Input } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { HttpHeaders } from '@angular/common/http';
import { StreamingServiceService } from '../streaming-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.scss'],
})
export class ServiceDetailsComponent implements OnInit {
  serviceName: string;
  serviceDetails = [];
  loaded = false;

  constructor(
    private apolloService: StreamingServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.serviceName = this.route.snapshot.paramMap.get('service');
    this.apolloService.getService(this.serviceName).subscribe((res) => {
      console.log(this.serviceName);
      this.serviceDetails = res.data.get_data.services[this.serviceName];
      console.log(res.data.get_data.services);
      console.log(this.serviceDetails);
      if (this.serviceDetails !== []) {
        this.loaded = true;
      }
    });
  }

  changeDueDate(date: string, service: string) {
    this.apolloService.changeDueDate(service, date).subscribe(
      ({ data }) => {
        console.log('got data', data);
      },
      (error) => {
        console.log(error);
      }
    );
    this.router.navigate(['/spending']);
  }

  changeSubscriptionPlan(cost: number, plan: string, service: string) {
    this.apolloService.changeSubscriptionPlan(cost, plan, service).subscribe(
      ({ data }) => {
        console.log('got data', data);
      },
      (error) => {
        console.log(error);
      }
    );
    this.router.navigate(['/spending']);
  }

  cancelSubscription(service: string) {
    this.apolloService.cancelSubscription(service).subscribe(
      ({ data }) => {
        console.log('got data', data);
      },
      (error) => {
        console.log(error);
      }
    );
    this.router.navigate(['/spending']);
  }
}
