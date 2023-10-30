import { Component, Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-energy-cost-overview-card',
  templateUrl: './energy-cost-overview-card.component.html',
  styleUrls: ['./energy-cost-overview-card.component.scss']
})
export class EnergyCostOverviewCardComponent implements OnInit {
  constructor(){}
  @Input() cardData: {energyTitel:string, energyCost:number, color:string}={energyTitel:"", energyCost:0, color:""};
  ngOnInit(): void {
    
  }
}
