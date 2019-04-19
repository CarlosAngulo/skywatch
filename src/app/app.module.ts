import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

// NgRx
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { weatherReducer } from './core/weather.reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { CityDetailComponent } from './city-detail/city-detail.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { CityPreviewComponent } from './dashboard/city-preview/city-preview.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { environment } from 'src/environments/environment.prod';
import { ForecastModule } from './forecast/forecast.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    CityDetailComponent,
    NavbarComponent,
    CityPreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    CoreModule,
    ForecastModule,
    StoreModule.forRoot( { weatherDataType: weatherReducer } ),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  providers: [{provide:LOCALE_ID, useValue: 'en-US'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
