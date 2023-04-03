import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generate-config',
  templateUrl: './generate-config.component.html',
  styleUrls: ['./generate-config.component.css'],
})
export class GenerateConfigComponent implements OnInit {
  formData: any = {};

  formData1: any = {};
  elementSyntax: string = '';
  constructor() {}

  ngOnInit() {}

  onSubmit() {
    this.formData1 = {};
    if (!this.formData.configKey) {
      return;
    }
    const key = this.formData.configKey;
    this.formData1[key] = JSON.parse(JSON.stringify(this.formData));
    delete this.formData1[key]['configKey'];
    this.elementSyntax = `<dynamic-element [elementConfig]="pageElements.${key}"></dynamic-element>`;
  }
}
