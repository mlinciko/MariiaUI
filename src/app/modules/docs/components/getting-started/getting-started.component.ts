import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GettingStartedComponent {
  title = 'Getting started';
  description =
    'This section will guide you through the initial steps required to start using our library in your Angular applications.';
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
}
