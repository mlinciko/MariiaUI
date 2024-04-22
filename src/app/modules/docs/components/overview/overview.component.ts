import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverviewComponent {
  constructor(private translationService: TranslationService) {}
  title = this.translationService.translate('docs.overview.title');
  description = this.translationService.translate('docs.overview.description');

  keyFeaturesTitle = this.translationService.translate(
    'docs.overview.keyFeatures.title'
  );
  keyFeaturesDescr = this.translationService.translate(
    'docs.overview.keyFeatures.description'
  );

  feedbackTtitle = this.translationService.translate(
    'docs.overview.feedback.title'
  );
  feedbackDescr = this.translationService.translate(
    'docs.overview.feedback.description'
  );

  contributionTitle = this.translationService.translate(
    'docs.overview.contribution.title'
  );
  contributionDescr = this.translationService.translate(
    'docs.overview.contribution.description'
  );
}
