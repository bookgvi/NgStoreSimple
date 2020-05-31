import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AuthDataSource } from './services/auth.dataSource';
import { AuthRepository } from './services/auth.repository';
import { AuthEffects } from './store/effects/auth.effects';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { loginReducer } from './store/reducers/auth.reducer';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot([loginReducer]),
    EffectsModule.forRoot([AuthEffects])
  ],
  providers: [
    AuthDataSource,
    AuthRepository
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
