import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-styling',
  templateUrl: './styling.component.html',
  styleUrls: ['./styling.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StylingComponent {
  constructor(private translationService: TranslationService) {}
  title = this.translationService.translate('docs.styling.title');
  description = this.translationService.translate('docs.styling.description');

  defineStylesTtitle = this.translationService.translate(
    'docs.styling.defineStyles.title'
  );
  defineStylesDescr = this.translationService.translate(
    'docs.styling.defineStyles.description'
  );

  directiveTitle = this.translationService.translate(
    'docs.styling.directive.title'
  );
  directiveDescr1 = this.translationService.translate(
    'docs.styling.directive.description1'
  );
  directiveDescr2 = this.translationService.translate(
    'docs.styling.directive.description2'
  );

  defineStylesCode = `import { Component } from '@angular/core';

  @Component({
    selector: 'app-demo',
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.scss'],
  })
  export class DemoComponent {
    customStyles = \`
      button {
        height: 50px;
        width: 150px;
        background-color: lightcyan;
        color: blueviolet;
        padding: 10px 20px;
      }\`;
  }
  `;

  directiveCode = `<mui-button
  [muiStyles]="customStyles"
  [label]="'Click'"
  [type]="ButtonTypeEnum.Default"
  (onClick)="handleBtnClick($event)"></mui-button>`;

  customStyles = `
      button {
        height: 50px;
        width: 150px;
        background-color: lightcyan;
        color: blueviolet;
        padding: 10px 20px;
      }`;
}
