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

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PanelModule,
    ToastModule,
    ButtonModule,
    MenuModule,
    RouterModule.forRoot([{ path: '', component: AppComponent }]),
  ],
  declarations: [AppComponent, DynamicElementComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
