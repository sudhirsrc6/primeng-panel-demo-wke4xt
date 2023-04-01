import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  Input,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { DropdownElementComponent } from '../element-components/dropdown-element/dropdown-element.component';
import { InputElementComponent } from '../element-components/input-element/input-element.component';

@Component({
  selector: 'dynamic-element',
  templateUrl: './dynamic-element.component.html',
  styleUrls: ['./dynamic-element.component.scss'],
})
export class DynamicElementComponent implements OnInit, AfterViewInit {
  @Input() elementConfig!: any;

  constructor(
    private resolver: ComponentFactoryResolver,
    private entry: ViewContainerRef
  ) {}

  ngOnInit(): void {
    this.entry.clear();
    let elementClass;
    if (this.elementConfig.elementType === 'input') {
      elementClass = InputElementComponent;
    }
    if (this.elementConfig.elementType === 'dropdown') {
      elementClass = DropdownElementComponent;
    }
    const factory = this.resolver.resolveComponentFactory(elementClass);
    const componentRef = this.entry.createComponent(factory);
    componentRef.setInput('elementConfig', this.elementConfig);
  }

  ngAfterViewInit(): void {}
}
