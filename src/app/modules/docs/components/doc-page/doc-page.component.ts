import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TInput, TOutput } from '../../models/doc-data';
import { ButtonTypeEnum } from 'projects/mariia-ui/src/lib/components/button/button';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(
    private router: Router,
    private route: ActivatedRoute
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
      return url;
    }
    return urlPath;
  }
}
