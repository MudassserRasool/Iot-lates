import { Component, Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-machine-info-simple-card',
  templateUrl: './machine-info-simple-card.component.html',
  styleUrls: ['./machine-info-simple-card.component.scss']
})
export class MachineInfoSimpleCardComponent implements OnInit{
  constructor(){}
  @Input() cardData: {title:string, amount:number, img:string}={title:"", amount:0, img:""};
  ngOnInit(): void {
    
  }
}
"../../../assets/greenFactoryIcon.png"