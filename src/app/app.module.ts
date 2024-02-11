import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SquareComponent } from '../app/square/square.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    NgbModule,
    SquareComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }