import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForecastComponent } from './forecast.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [ForecastComponent],
  imports: [
    CommonModule,
    ChartsModule
  ],
  exports: [
    ForecastComponent
  ]
})
export class ForecastModule { }
