import { Component, OnInit } from '@angular/core';
import { MathService } from './math.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  param1: number;
  param2: number;
  result: number;

  constructor(private mathSvc: MathService) { }

  add() {
    this.result = this.param1 + this.param2;
  }

  subtract() {
    this.result = this.mathSvc.subtract(this.param1, this.param2);
  }

  multiply() {
    this.mathSvc.multiply(this.param1, this.param2)
    .subscribe(data => this.result = data);
  }

  ngOnInit() {
  }
}
