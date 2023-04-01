import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-element',
  templateUrl: './input-element.component.html',
  styleUrls: ['./input-element.component.css'],
})
export class InputElementComponent implements OnInit {
  @Input() elementConfig!: any;

  constructor() {}

  ngOnInit() {}
}
