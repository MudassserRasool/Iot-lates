import { Component } from '@angular/core';

@Component({
  selector: 'app-equipment-efficiency',
  templateUrl: './equipment-efficiency.component.html',
  styleUrls: ['./equipment-efficiency.component.scss']
})
export class EquipmentEfficiencyComponent {
  selectedView: 'Grid' | 'List' = 'Grid'; 
  overViewCardData = [
    {
      img: '../../../assets/numberOfMachineIcon.png',
      info: 'Total Machines',
      numberOfMachine: 15
    },
    {
      img: '../../../assets/runningMachineIcon.png',
      info: 'Running',
      numberOfMachine: 6
    },
    {
      img: '../../../assets/DownMachineIcon.png',
      info: 'Down',
      numberOfMachine: 25
    },
    {
      img: '../../../assets/OEEIcon.png',
      info: 'Over All OEE',
      numberOfMachine: 3
    },
    {
      img: '../../../assets/OEERunningIcon.png',
      info: 'Over All OEE (Running)',
      numberOfMachine: 3
    },
  ];
  detailCardData = [
    {
      img: '../../../assets/numberOfMachineIcon.png',
      info: 'Total Machines',
      numberOfMachine: 150
    },
    {
      img: '../../../assets/runningMachineIcon.png',
      info: 'Running',
      numberOfMachine: 60
    },
    {
      img: '../../../assets/DownMachineIcon.png',
      info: 'Down',
      numberOfMachine: 250
    },
    {
      img: '../../../assets/OEEIcon.png',
      info: 'Over All OEE',
      numberOfMachine: 30
    },
    {
      img: '../../../assets/OEERunningIcon.png',
      info: 'Over All OEE (Running)',
      numberOfMachine: 30
    },
  ];

  gaugeCardData = [
    {
      titel: 'OEE',
      value: 30,
      behaviour: 'Unsatisfactory'
    },
    {
      titel: 'Availability',
      value: 55,
      behaviour: 'Satisfactory'
    },
    {
      titel: 'Performance',
      value: 78,
      behaviour: 'Expected'
    },
 
    {
      titel: 'Quality',
      value: 60,
      behaviour: 'Satisfactory'
    },
    {
      titel: 'Performance',
      value: 81,
      behaviour: 'Expected'
    },
  ];
}
