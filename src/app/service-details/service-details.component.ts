/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit, Input } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { HttpHeaders } from '@angular/common/http';
import { StreamingServiceService } from '../streaming-service.service';
import { ActivatedRoute } from '@angular/router';

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
    private route: ActivatedRoute
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
}
