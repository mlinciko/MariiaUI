import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MariiaUiModule } from '../../projects/mariia-ui/src/lib/mariia-ui.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MariiaUiModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
