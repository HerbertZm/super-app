import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-full-card',
  templateUrl: './service-full-card.component.html',
  styleUrls: ['./service-full-card.component.scss'],
})
export class ServiceFullCardComponent implements OnInit {
  servicesList = [
    {
      image: 'assets/app-icons/netflix-long.png',
      name: 'Netflix',
      id: 1,
      paymentDate: '07/11',
      cost: 150,
    },
    {
      image: 'assets/app-icons/netflix-long.png',
      name: 'Netflix',
      id: 2,
      paymentDate: '07/11',
      cost: 150,
    },
    {
      image: 'assets/app-icons/netflix-long.png',
      name: 'Netflix',
      id: 3,
      paymentDate: '07/11',
      cost: 150,
    },
  ];

  constructor() {}

  ngOnInit() {}

  goToDetails(id: number): void {
    console.log(id);
  }
}
