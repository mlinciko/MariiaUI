import { Pipe, PipeTransform } from '@angular/core';
import { TranslationService } from '../../services/translation/translation.service';

@Pipe({
  name: 'translate',
})
export class TranslatePipe implements PipeTransform {
  constructor(private translationService: TranslationService) {}

  transform(key: string): string {
    return this.translationService.translate(key);
  }
}
