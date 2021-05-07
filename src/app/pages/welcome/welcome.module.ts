import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NzFormModule } from 'ng-zorro-antd/form';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { StRadioFormComponent } from './components/st-radio-form/st-radio-form.component';
import { StRadioChartComponent } from './components/st-radio-chart/st-radio-chart.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [WelcomeRoutingModule, NzFormModule, NzTimePickerModule, FormsModule, HttpClientModule, ReactiveFormsModule],
  declarations: [WelcomeComponent, StRadioFormComponent, StRadioChartComponent],
  exports: [WelcomeComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class WelcomeModule { }
