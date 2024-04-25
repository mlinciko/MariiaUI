import { Component } from '@angular/core';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  constructor(private translationService: TranslationService) {}
  title = this.translationService.translate('main.title');
  subtitle = this.translationService.translate('main.description');
  btnLabel = this.translationService.translate('main.btnLabel');
}
