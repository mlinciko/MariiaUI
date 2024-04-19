import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemesComponent {
  title = 'Themes';
  description = "This section describes the library's ability to select themes";
  styleImportCode = `@import url(../node_modules/mariia-ui/src/lib/styles/themes.scss);`;
  providerCode = `import { NgModule } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';
  import { MariiaUiModule, ThemeConfig, MUI_THEME } from '@mariia-ui';

  const themeConfig: ThemeConfig = { type: 'light', color: 'blue' };
  
  @NgModule({
    declarations: [
      // your components
    ],
    imports: [
      BrowserModule,
      MariiaUiModule
    ],
    providers: [
      { provide: MUI_THEME, useValue: themeConfig },
    ],
    bootstrap: [AppComponent]
  })
  export class AppModule { }`;
  themeConfig = `
  export type ThemeType = 'dark' | 'light';

  export type ThemeColor = 'blue' | 'violet' | 'green';

  export type ThemeConfig = {
    type: ThemeType;
    color: ThemeColor;
  };`;
  customColorsCode = `
  :root {
    --primary-color: /* custom color*/;
    --hover-color: /* custom color*/;
    --secondary-color: /* custom color*/;
    --background-color: /* custom color*/;
    --text-color: /* custom color*/;
    --active-text-color: /* custom color*/;
    --icon-color: /* custom color*/;
    --table-tr: /* custom color*/;
    --label-color: /* custom color*/;
  }`;
}
