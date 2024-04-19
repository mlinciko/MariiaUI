import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TInput, TOutput } from '../../models/doc-data';
import { ButtonTypeEnum } from 'projects/mariia-ui/src/lib/components/button/button';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-doc-page',
  templateUrl: './doc-page.component.html',
  styleUrls: ['./doc-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocPageComponent {
  @Input() title = '';
  @Input() description = '';
  @Input() code = '';
  @Input() demoLink = '';
  @Input() inputs: TInput[] = [];
  @Input() outputs: TOutput[] = [];

  btnType = ButtonTypeEnum.Flat;
  viewDemoTitle = this.translationService.translate('docs.docPage.viewDemo');
  propertiesTitle = this.translationService.translate(
    'docs.docPage.properties'
  );
  typeTitle = this.translationService.translate('docs.docPage.type');
  defaultValueTitle = this.translationService.translate(
    'docs.docPage.defaultValue'
  );
  descriptionTitle = this.translationService.translate(
    'docs.docPage.description'
  );
  noInputsTitle = this.translationService.translate('docs.docPage.noInputs');
  returnType = this.translationService.translate('docs.docPage.returnType');
  noOutputsTitle = this.translationService.translate('docs.docPage.noOutputs');

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private translationService: TranslationService
  ) {}

  goToDemo(): void {
    const itemUrl = this.trimUrlPath(this.router.url);
    this.router.navigateByUrl(`demos/${itemUrl}`);
  }

  trimUrlPath(urlPath: string): string {
    if (urlPath.startsWith('/docs/')) {
      const url = urlPath.substring(6);
      if (url.includes('radio-button')) {
        return 'radio-group';
      }
      if (url.includes('accordion-item')) {
        return 'accordion';
      }
      if (url.includes('tab')) {
        return 'tabs';
      }
      if (url.includes('slider-item')) {
        return 'slider';
      }
      return url;
    }
    return urlPath;
  }
}
