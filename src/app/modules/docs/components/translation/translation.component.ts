import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-translation',
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TranslationComponent {
  title = 'Translation';
  description =
    'This section is dedicated to the ability to add translations for error texts/headings, etc. to the library';
  oldTranslationsCode = `{
    "calendar": {
      "months": {
        "january": "January",
        "february": "February",
        "march": "March",
        "april": "April",
        ...`;
  newTranslationsCode = `{
    "calendar": {
      "months": {
        "january": "Январь",
        "february": "Февраль",
        "march": "Март",
        "april": "Апрель",
        ...`;

  appModuleCode = `import { NgModule } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';
  import { MariiaUiModule, MUI_LANGUAGE, MUI_TRANSLATION_FILE_URL } from '@mariia-ui';
  
  @NgModule({
    declarations: [
      // your components
    ],
    imports: [
      BrowserModule,
      MariiaUiModule
    ],
    providers: [
      { provide: MUI_LANGUAGE, useValue: 'ru' },
      {
        provide: MUI_TRANSLATION_FILE_URL,
        useValue: '/assets/i18n/library/ru.json',
      },
    ],
    bootstrap: [AppComponent]
  })
  export class AppModule { }`;
  paramsMap = '${}';
  paramsCode = `
  ...
  "max": "The maximum value should be no more than \${max}",
  ...`;
}
