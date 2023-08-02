import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AngularVideoControllerModule } from 'projects/angular-video-controller/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularVideoControllerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
