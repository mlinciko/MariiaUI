/* eslint-disable @angular-eslint/directive-class-suffix */
import { Directive, Input } from '@angular/core';

@Directive({ selector: '[BaseIcon]' })
export class BaseIcon {
  @Input() color = '#cecece';
  @Input() width = '18px';
  @Input() height = '18px';
}
