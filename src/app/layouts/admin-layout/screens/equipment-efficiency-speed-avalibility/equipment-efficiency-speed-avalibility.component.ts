import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment-efficiency-speed-avalibility',
  templateUrl: './equipment-efficiency-speed-avalibility.component.html',
  styleUrls: ['./equipment-efficiency-speed-avalibility.component.scss'],
})
export class EquipmentEfficiencySpeedAvalibilityComponent implements OnInit {
  constructor() {}
  @Input() showSelect: boolean = true;
  gaugeValue = 80; // Set your gauge value here
  minValue = 0; // Set your minimum value here
  maxValue = 100; // Set your maximum value here

  @Input() summeryGaugeCardData: {
    titel: string;
    value: number;
    behaviour: string;
  } = { titel: '', value: 0, behaviour: '' };
  thresholdConfig = {
    '0': { color: '#ED4E3D', label: 'unsatisfy' }, // red
    '50': { color: '#F2BF48', label: 'satisfy' }, // orange
    '75': { color: '#58C540', label: 'good' }, // green
  };

  ngOnInit(): void {
    // Implement any initialization logic here
  }
  selectedView: 'Grid' | 'List' = 'Grid';
  overViewCardData = [
    {
      img: '../../../assets/numberOfMachineIcon.png',
      info: 'Total Machines',
      numberOfMachine: 15,
    },
    {
      img: '../../../assets/runningMachineIcon.png',
      info: 'Running',
      numberOfMachine: 6,
    },
    {
      img: '../../../assets/DownMachineIcon.png',
      info: 'Down',
      numberOfMachine: 25,
    },
    {
      img: '../../../assets/OEEIcon.png',
      info: 'Over All OEE',
      numberOfMachine: 3,
    },
    {
      img: '../../../assets/OEERunningIcon.png',
      info: 'Over All OEE (Running)',
      numberOfMachine: 3,
    },
  ];
  detailCardData = [
    {
      img: '../../../assets/numberOfMachineIcon.png',
      info: 'Total Machines',
      numberOfMachine: 150,
    },
    {
      img: '../../../assets/runningMachineIcon.png',
      info: 'Running',
      numberOfMachine: 60,
    },
    {
      img: '../../../assets/DownMachineIcon.png',
      info: 'Down',
      numberOfMachine: 250,
    },
    {
      img: '../../../assets/OEEIcon.png',
      info: 'Over All OEE',
      numberOfMachine: 30,
    },
    {
      img: '../../../assets/OEERunningIcon.png',
      info: 'Over All OEE (Running)',
      numberOfMachine: 30,
    },
  ];

  equipmentEfficiencyGaugeCardData = [
    {
      titel: 'OEE',
      value: 30,
      behaviour: '',
      size: 170,
    },
  ];
  equipmentEfficiencyGaugeCardDataTwo = [
    {
      titel: 'OEE',
      value: 61,
      behaviour: '',
      size: 170,
    },
  ];
  equipmentEfficiencyGaugeCardDataThree = [
    {
      titel: 'OEE',
      value: 81,
      behaviour: '',
      size: 170,
    },
  ];
}
