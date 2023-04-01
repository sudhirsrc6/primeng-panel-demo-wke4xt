import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { PanelModule } from 'primeng/panel';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { DynamicElementComponent } from './dynamic-element/dynamic-element.component';
import { InputElementComponent } from './element-components/input-element/input-element.component';
import { DropdownElementComponent } from './element-components/dropdown-element/dropdown-element.component';
import { FormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    PanelModule,
    ToastModule,
    ButtonModule,
    MenuModule,
    AutoCompleteModule,
    InputTextModule,
    RouterModule.forRoot([{ path: '', component: AppComponent }]),
  ],
  declarations: [
    AppComponent,
    DynamicElementComponent,
    InputElementComponent,
    DropdownElementComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
