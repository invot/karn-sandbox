import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { StRadioFormComponent } from './components/st-radio-form/st-radio-form.component';
import { StRadioChartComponent } from './components/st-radio-chart/st-radio-chart.component';


@NgModule({
  imports: [WelcomeRoutingModule],
  declarations: [WelcomeComponent, StRadioFormComponent, StRadioChartComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
