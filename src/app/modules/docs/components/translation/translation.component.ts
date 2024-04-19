import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-translation',
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TranslationComponent {
  constructor(private translationService: TranslationService) {}
  title = this.translationService.translate('docs.translation.title');
  description = this.translationService.translate(
    'docs.translation.description'
  );

  settingTitle = this.translationService.translate(
    'docs.translation.setting.title'
  );
  settingDescr1 = this.translationService.translate(
    'docs.translation.setting.description1'
  );
  settingDescr2 = this.translationService.translate(
    'docs.translation.setting.description2'
  );

  paramsTitle = this.translationService.translate(
    'docs.translation.params.title'
  );
  paramsDescr1 = this.translationService.translate(
    'docs.translation.params.description1'
  );
  paramsDescr2 = this.translationService.translate(
    'docs.translation.params.description2'
  );

  providersTitle = this.translationService.translate(
    'docs.translation.providers.title'
  );
  providersDescr1 = this.translationService.translate(
    'docs.translation.providers.description1'
  );
  providersDescr2 = this.translationService.translate(
    'docs.translation.providers.description2'
  );

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
