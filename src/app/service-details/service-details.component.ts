import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.scss'],
})
export class ServiceDetailsComponent implements OnInit {
  serviceDetails = {
    image: 'assets/app-icons/netflix-long.png',
    name: 'Netflix',
    id: 1,
    paymentDate: '07 de noviembre',
    cost: 150,
    plan: 'Basico Test',
    subDate: 'Feb 2018',
  };

  constructor() {}

  ngOnInit() {}
}
