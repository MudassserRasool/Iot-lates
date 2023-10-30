import { Component, Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-card',
  templateUrl: './simple-card.component.html',
  styleUrls: ['./simple-card.component.scss']
})
export class SimpleCardComponent  implements OnInit{
  constructor(){}
  @Input() cardData: {amount:number, titel:string}={amount:0, titel:""};
  ngOnInit(): void {
    
  }
}
