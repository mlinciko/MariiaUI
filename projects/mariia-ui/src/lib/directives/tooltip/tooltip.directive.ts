import {
  Directive,
  ElementRef,
  Input,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[muiTooltip]',
})
export class TooltipDirective {
  @Input('muiTooltip') tooltipText = '';
  tooltipElement!: HTMLElement;
  rootElement!: HTMLElement;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {}

  @HostListener('mouseenter') onMouseEnter(): void {
    this.showTooltip();
  }

  @HostListener('mouseleave', ['$event.target']) onMouseLeave(
    target: HTMLElement
  ): void {
    if (target.closest('.tooltip')) return;
    this.hideTooltip();
  }

  private showTooltip(): void {
    this.createTooltip();
  }

  private hideTooltip(): void {
    if (this.tooltipElement) {
      this.renderer.removeChild(this.rootElement, this.tooltipElement);
    }
  }

  private createTooltip(): void {
    this.rootElement = this.renderer.selectRootElement('.mui-root');

    this.tooltipElement = this.renderer.createElement('div');
    const text = this.renderer.createText(this.tooltipText);
    this.renderer.appendChild(this.tooltipElement, text);
    this.renderer.addClass(this.tooltipElement, 'tooltip');

    const hostElement = this.elementRef.nativeElement;

    this.addStyle(hostElement);

    this.renderer.appendChild(this.rootElement, this.tooltipElement);
  }

  addStyle(hostElement: any): void {
    const hostPosition = hostElement.getBoundingClientRect();
    this.renderer.setStyle(this.tooltipElement, 'position', 'absolute');
    this.renderer.setStyle(
      this.tooltipElement,
      'top',
      `${hostPosition.top + window.scrollY - 30}px`
    );
    this.renderer.setStyle(
      this.tooltipElement,
      'left',
      `${hostPosition.left + window.scrollX}px`
    );
    this.renderer.setStyle(this.tooltipElement, 'padding', '5px 10px');
    this.renderer.setStyle(
      this.tooltipElement,
      'box-shadow',
      '0 0 10px rgba(0, 0, 0, 0.1)'
    );
    this.renderer.setStyle(this.tooltipElement, 'z-index', '10000');
    this.renderer.setStyle(this.tooltipElement, 'background-color', '#fff');
    this.renderer.setStyle(this.tooltipElement, 'border-radius', '6px');
    this.renderer.setStyle(
      this.tooltipElement,
      'font-family',
      'Arial, sans-serif'
    );
    this.renderer.setStyle(this.tooltipElement, 'font-size', '14px');
  }
}
