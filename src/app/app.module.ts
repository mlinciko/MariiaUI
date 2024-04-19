import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MariiaUiModule } from '../../projects/mariia-ui/src/lib/mariia-ui.module';
import { HeaderComponent } from './modules/shared/components/header/header.component';
import { FooterComponent } from './modules/shared/components/footer/footer.component';
import { HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { MUI_THEME } from 'projects/mariia-ui/src/lib/config/theme-injector';

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
          bash: () => import('highlight.js/lib/languages/bash'),
        },
      },
    },
    // { provide: MUI_LANGUAGE, useValue: 'ru' },
    // {
    //   provide: MUI_TRANSLATION_FILE_URL,
    //   useValue: '/assets/i18n/library/ru.json',
    // },
    { provide: MUI_THEME, useValue: { type: 'light', color: 'blue' } },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
