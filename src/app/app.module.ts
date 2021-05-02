import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NameValueModule } from '@shared/name-value/name-value.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NameValueModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
