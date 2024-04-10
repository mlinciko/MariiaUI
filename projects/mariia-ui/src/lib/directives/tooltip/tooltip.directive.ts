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
    if (!this.tooltipElement) {
      this.createTooltip();
    }
    this.tooltipElement.style.visibility = 'visible';
  }

  private hideTooltip(): void {
    if (this.tooltipElement) {
      this.tooltipElement.style.visibility = 'hidden';
    }
  }

  private createTooltip(): void {
    this.tooltipElement = this.renderer.createElement('div');
    const text = this.renderer.createText(this.tooltipText);
    this.renderer.appendChild(this.tooltipElement, text);
    this.renderer.addClass(this.tooltipElement, 'tooltip');

    const hostElement = this.elementRef.nativeElement;
    const hostPosition = hostElement.getBoundingClientRect();

    this.addStyle(hostPosition);

    this.renderer.appendChild(document.body, this.tooltipElement);
  }

  addStyle(hostPosition: any): void {
    this.renderer.setStyle(this.tooltipElement, 'position', 'absolute');
    this.renderer.setStyle(
      this.tooltipElement,
      'top',
      `${hostPosition.top + window.scrollY}px`
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
