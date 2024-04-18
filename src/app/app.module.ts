import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MariiaUiModule } from '../../projects/mariia-ui/src/lib/mariia-ui.module';
import { HeaderComponent } from './modules/shared/components/header/header.component';
import { FooterComponent } from './modules/shared/components/footer/footer.component';
import { HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [BrowserModule, AppRoutingModule, MariiaUiModule],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        languages: {
          typescript: () => import('highlight.js/lib/languages/typescript'),
          html: () => import('highlight.js/lib/languages/xml'),
          css: () => import('highlight.js/lib/languages/css'),
        },
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
