import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-mini-card',
  templateUrl: './service-mini-card.component.html',
  styleUrls: ['./service-mini-card.component.scss'],
})
export class ServiceMiniCardComponent implements OnInit {
  servicesList = [
    { image: 'assets/app-icons/netflix2.png', name: 'Netflix', id: 1 },
    { image: 'assets/app-icons/netflix2.png', name: 'Netflix', id: 2 },
    { image: 'assets/app-icons/netflix2.png', name: 'Netflix', id: 3 },
  ];

  constructor() {}

  ngOnInit() {}

  goToDetails(id: number): void {
    console.log(id);
  }
}
