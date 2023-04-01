import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dynamic-element',
  templateUrl: './dynamic-element.component.html',
  styleUrls: ['./dynamic-element.component.scss'],
})
export class DynamicElementComponent implements OnInit {
  @Input() elementConfig!: any;
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
