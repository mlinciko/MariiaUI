import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[muiStyles]',
})
export class StylesDirective {
  @Input() set muiStyles(value: string) {
    this.updateStyles(value);
  }
  private uniqueClass: string;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {
    this.uniqueClass = 'mui-style-' + Math.random().toString(36).substring(2);
    this.renderer.addClass(this.el.nativeElement, this.uniqueClass);
  }

  updateStyles(styles: string): void {
    const styleContent = this.processStyle(styles);
    const styleElement = this.renderer.createElement('style');
    this.renderer.setProperty(styleElement, 'textContent', styleContent);
    this.renderer.appendChild(this.el.nativeElement, styleElement);
  }

  private processStyle(styles: string): string {
    // Добавление уникального класса к каждому селектору стилей
    return styles
      .replace(/([^{}]*)(\{[^{}]*\})/g, `.${this.uniqueClass} $1 $2`)
      .replace(/;\s*/g, ' !important; ');
  }
}
