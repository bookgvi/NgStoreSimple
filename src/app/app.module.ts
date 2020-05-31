import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AuthDataSource } from './services/auth.dataSource';
import { AuthRepository } from './services/auth.repository';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { loginReducer } from './store/reducers/auth.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(loginReducer)
  ],
  providers: [
    AuthDataSource,
    AuthRepository
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
