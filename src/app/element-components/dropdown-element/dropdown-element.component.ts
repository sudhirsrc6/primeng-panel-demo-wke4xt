import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown-element',
  templateUrl: './dropdown-element.component.html',
  styleUrls: ['./dropdown-element.component.css'],
})
export class DropdownElementComponent implements OnInit {
  @Input() elementConfig!: any;

  dataFiltered: any[] = [];

  constructor() {}

  ngOnInit() {
    this.dataFiltered = this.elementConfig.dropdownData;
  }

  filterData(event: any) {
    if (event.query) {
      this.dataFiltered = this.elementConfig.dropdownData.filter((v: any) =>
        v[this.elementConfig.warehouseId]
          .toLowerCase()
          .startsWith(event.query.toLowerCase())
      );
    } else {
      this.dataFiltered = this.elementConfig.dropdownData.map((i) => ({
        ...i,
      }));
    }
  }

  populateEnteredData(event: any) {}

  onItemSelect(event: any) {
    if (this.elementConfig.onchange) this.elementConfig.onchange(event);
  }

  onKeyUp(event: any) {}
}
