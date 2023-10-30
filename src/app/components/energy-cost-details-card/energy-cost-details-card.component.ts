import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-energy-cost-details-card',
  templateUrl: './energy-cost-details-card.component.html',
  styleUrls: ['./energy-cost-details-card.component.scss']
})
export class EnergyCostDetailsCardComponent implements OnInit {
  constructor() { }
  @Input() cardData: { energyTitel: string, energyCost: number, color: string } = { energyTitel: "", energyCost: 0, color: "" };
  ngOnInit(): void {

  }
}
