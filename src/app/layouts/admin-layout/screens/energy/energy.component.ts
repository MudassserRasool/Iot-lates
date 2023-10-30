import { Component, Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-energy',
  templateUrl: './energy.component.html',
  styleUrls: ['./energy.component.scss'],
})
export class EnergyComponent  implements OnInit {
  energyCostData = [
    {
      energyTitel: 'Runtime Energy Cost',
      energyCost: 289.1,
      // color: '#F2BF48',
    },
    {
      energyTitel: 'Downtime Energy Cost',
      energyCost: 295.7,
      // color: '#ED4E3D',
    },
    {
      energyTitel: 'Total Energy Cost',
      energyCost: 594.16,
      // color: '#FF569E',
    },
    {
      energyTitel: 'kW/h',
      energyCost: 1700.5,
      // color: '#58C540',
    },
    {
      energyTitel: 'Avg. Runtime kWh/Kg',
      energyCost: 0.4,
      // color: '#347AE2',
    },
    {
      energyTitel: 'Avg. Overall kWh/Kg',
      energyCost: 3.8,
      // color: '#1E2772',
    },
  ];
  constructor(){}
  @Input() cardData: {energyTitel:string, energyCost:number, color:string}={energyTitel:"", energyCost:0, color:""};
  ngOnInit(): void {
    
  }
}
