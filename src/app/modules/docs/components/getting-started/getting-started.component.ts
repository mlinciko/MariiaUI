import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GettingStartedComponent {
  constructor(private translationService: TranslationService) {}
  title = this.translationService.translate('docs.gettingStarted.title');
  description = this.translationService.translate(
    'docs.gettingStarted.description'
  );

  creatingNewAppTitle = this.translationService.translate(
    'docs.gettingStarted.creatingNewApp.title'
  );
  creatingNewAppDescr = this.translationService.translate(
    'docs.gettingStarted.creatingNewApp.description'
  );

  installationTitle = this.translationService.translate(
    'docs.gettingStarted.installation.title'
  );
  installationDescr1 = this.translationService.translate(
    'docs.gettingStarted.installation.description1'
  );
  installationDescr2 = this.translationService.translate(
    'docs.gettingStarted.installation.description2'
  );

  importingTitle = this.translationService.translate(
    'docs.gettingStarted.importing.title'
  );
  importingDescr = this.translationService.translate(
    'docs.gettingStarted.importing.description'
  );

  stylesTitle = this.translationService.translate(
    'docs.gettingStarted.styles.title'
  );
  stylesDesrc = this.translationService.translate(
    'docs.gettingStarted.styles.description'
  );

  usingTitle = this.translationService.translate(
    'docs.gettingStarted.using.title'
  );
  usingDescr = this.translationService.translate(
    'docs.gettingStarted.using.description'
  );

  ngNewCode = 'ng new angular-project';
  npmInstallCode = 'npm install mariia-ui@latest --save';
  yarnInstallCode = 'yarn add mariia-ui@latest';
  importCode = `import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MariiaUiModule } from '@mariia-ui';
  
@NgModule({
  declarations: [
    // your components
  ],
  imports: [
    BrowserModule,
    MariiaUiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }`;
  usageCode = `<mui-button
	[label]="'Click'"
	[type]="ButtonTypeEnum.Default"
	(onClick)="handleBtnClick($event)"></mui-button>`;
  styleImportCode = `@import url(../node_modules/mariia-ui/src/lib/styles/themes.scss);`;
}
