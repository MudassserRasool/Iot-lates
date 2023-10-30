import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment-efficiency-overview-card',
  templateUrl: './equipment-efficiency-overview-card.component.html',
  styleUrls: ['./equipment-efficiency-overview-card.component.scss']
})
export class EquipmentEfficiencyOverviewCardComponent implements OnInit {
  constructor(){}
  @Input() cardData: {img:string, info:string, numberOfMachine:number}={img:"", info:"", numberOfMachine:0};
  @Input() detailCardData: {img:string, info:string, numberOfMachine:number}={img:"", info:"", numberOfMachine:0};
  ngOnInit(): void {
    
  }
}
