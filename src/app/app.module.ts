import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { HighlightDirective } from './directives/highlight.directive';
import { CountclicksDirective } from './directives/countclicks.directive';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    CountclicksDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCi4DIkyVcJKhIvFIng3Woo-zoQOsbUiBk'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
